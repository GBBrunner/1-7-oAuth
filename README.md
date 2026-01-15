# OAuth App Docker Instructions

This project demonstrates OAuth authentication in a Node.js app. Below are instructions to build and run the app using Docker.

## Prerequisites
- Docker installed on your machine
- Clone this repository
## Install an .env file
1. Use these enviroment variables
PORT = 4000
SESSION_SECRET=your_secret_key_here
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID_HERE
GOOGLE_SECRET=YOUR_GOOGLE_SECRET_HERE
GOOGLE_CALLBACK_URL=http://localhost:4000/auth/google/callback
## Building the Docker Image

 Open a terminal in the project directory.
2. Build and start the Docker image:
   ```bash
   docker build -t oauth-app .
   docker run -p 4000:4000 --env-file .env oauth-app
   ```

3. Finding project in browser
Go to http://localhost:4000/ in your browser