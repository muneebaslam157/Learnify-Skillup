import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, query } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const signInWithGoogle = async (setUserRole, setIsAuthenticated, navigate) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userQuery = query(doc(db, 'users', user.uid));
    const userDoc = await getDoc(userQuery);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      setUserRole(userData.role);
      setIsAuthenticated(true);
      navigate(userData.role === 'admin' ? '/admin' : '/user');
    } else {
      
      const role = prompt("Please enter your role (admin/user):", "user");
      if (role !== "admin" && role !== "user") {
        alert("Invalid role. Please enter 'admin' or 'user' next time.");
        return;
      }

      // Store user data in Firestore
      const registrationDate = new Date().toISOString();
      await setDoc(doc(db, 'users', user.uid), { 
        role, 
        registrationDate 
      });

      setUserRole(role);
      setIsAuthenticated(true);
      navigate(role === 'admin' ? '/admin' : '/user');
    }
  } catch (error) {
    console.error("Error during Google sign-in:", error);
    alert("Error during Google sign-in: " + error.message);
  }
};

export { auth, signInWithGoogle, db };
