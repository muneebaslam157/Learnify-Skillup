FROM alpine:3.18
WORKDIR /app
COPY . .
CMD ["echo", "Jenkins CI/CD pipeline executed successfully!"]
