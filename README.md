
![Logo](https://i.imgur.com/BI7WyUl.png)


# LEARNIFY - SKILL UP

Welcome to Learnify, your ultimate e-learning platform designed to revolutionize the way you learn and grow. At Learnify, we believe that education should be accessible, engaging, and tailored to your needs. Whether you're looking to expand your skills, pursue a passion, or achieve professional goals, Learnify provides a comprehensive, user-friendly environment where you can explore a wide range of courses, track your progress, and earn certifications that showcase your achievements.

With an intuitive interface, expert-led courses, and interactive features, Learnify empowers you to take control of your learning journey. Join our community of learners and start your path to success with Learnify today!




# Administrator Features

## 1. Role Management:

#### Admin and User Roles:
 Manage different roles within the platform to control access and functionalities.

## 2. OAuth Google Integration:

#### Seamless Login:
 Enable users to log in easily with their Google accounts using OAuth for secure and convenient access.

## 3. Firebase Authentication:

#### Secure Access:
 Utilize Firebase Auth for reliable and secure authentication processes.

## 4. Course Management:

#### CRUD Operations: 
Admins can create, read, update, and delete courses with ease, ensuring that the course catalog is always up-to-date.

## 5. Quiz Management:

#### Add and View Quizzes:
 Admins can add quizzes to specific courses and view all quizzes they've created, enhancing course interactivity and assessment.

## 6. Profile Management for Admin:

#### Admin Profile Control: 
Customize and manage admin profiles to maintain effective oversight and administration.

## 7. Course Filtering and Search:

#### Advanced Search: 
Filter courses by tags and categories, and search by course name or description, making it easy to find relevant courses.

## 8. Interactive Dashboard:

#### Real-Time Analytics: 
Monitor user growth and course popularity with real-time data visualizations, including charts and pie charts.

# Learner Features

## 1. Course Discovery:

#### Browse and Search: 
View all available courses, apply filters by tag and category, and search for courses by name or description.

## 2. Certification, Course Enrollment and Learning:

#### Enroll and Track: 
Enroll in courses, start learning with videos and documents, and track your progress by marking lectures as completed. Completion of courses can lead to certificate generation.

## 3. Notification System:

#### Real-Time Reminders: 
Set and receive real-time notifications and reminders to keep track of learning goals and deadlines.

## 4. User Profile Management:

#### Personal Control: 
Manage your profile details to keep your information up-to-date and tailored to your learning preferences.

## 5. Quiz Participation:

#### Take Quizzes: 
Engage with quizzes for enrolled courses if they have been added by the admin, and assess your understanding of the material.


#### Learnify combines these robust features to create a powerful, user-friendly platform that caters to both administrators and learners, ensuring a comprehensive and engaging learning experience. Overall the app is fully mobile responsive.
# Tech Stack

- React for frontend
- Tailwind CSS for styling
- Firebase as BaaS (Backend as a Service)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_APP_FIREBASE_API`

`VITE_APP_FIREBASE_AUTH_DOMAIN`

`VITE_APP_FIREBASE_PROJECT_ID`

`VITE_APP_FIREBASE_STORAGE_BUCKET`

`VITE_APP_FIREBASE_MESSAGING_SENDER_ID`

`VITE_APP_FIREBASE_APP_ID`

`VITE_APP_FIREBASE_MEASUREMENT_ID`


# Run Locally

### Clone the project

```bash
  git clone https://github.com/Kashan-2912/Learnify-SkillUp.git
```

### Go to the project directory

```bash
  cd my-project
```

### Install dependencies

```bash
  npm install
```

### Setup firebase config

```
Make account on firebase, then make project and copy config and paste in your .env.example file that you will see in project folder.

Rename .env.example to .env and save
```

### Start the server

```bash
  npm run start
  OR 
  npm run dev
```

### localhost:5173

```
if any cors issuse conflict while uploading data of courses, then enable cors by using the cmd prompt: 
gsutil cors set cors.json gs://<your-bucket_name>...
where you-bucket_name is the one from your firebase config.

NOTE: While running above command make sure that you are in correct directory where cors.json is located!

Install gsutils if not installed already. 
Install gsutils: https://cloud.google.com/storage/docs/gsutil_install
```

### fix CORS if stuck 
```
https://cloud.google.com/storage/docs/gsutil/commands/cors
```
# Screenshots

![App Screenshot](https://i.imgur.com/PEGapke.jpeg)
![App Screenshot](https://i.imgur.com/oW46eMj.jpeg)
![App Screenshot](https://i.imgur.com/GRa3iGj.jpeg)
![App Screenshot](https://i.imgur.com/pGd8Nt8.jpeg)

# Video Demo

[App Video](https://drive.google.com/file/d/18a9ssEM1AG7dUIwlslchJptsoGTDUzXe/view?usp=drive_link)


# Lessons Learned

Learned all about React.js including hooks (useState, useEffect, useParams, useRef, useNavigate), props, components, Tailwind CSS, responsiveness and Firebase especially including firestore, firestore-storage, firestore-authentication.

It was a challenging journey to make this project but I gave my full potential and brought dream to life.


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhammad-kashan-ashraf)

# P.S
#### Make sure to run the project, as I have added little bit coloring and some responsiveness for mobile devices which was not shown in video.
