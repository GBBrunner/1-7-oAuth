# Clone the Repository
To get started, clone the project repository:
```bash
git clone https://github.com/GBBrunner/1-7-oAuth
cd 1-7-oAuth
```

# OAuth App Docker Instructions
This project demonstrates OAuth authentication in a Node.js app. Below are instructions to build and run the app using Docker.

## Prerequisites
- Docker installed on your machine
- Clone this repository
## Install an .env file
1. Use these enviroment variables
PORT = 4001
SESSION_SECRET=your_secret_key_here
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID_HERE
GOOGLE_SECRET=YOUR_GOOGLE_SECRET_HERE
GOOGLE_CALLBACK_URL=http://localhost:4000/auth/google/callback
## Building the Docker Image

 Open a terminal in the project directory.
 Make sure Docker Desktop is running
2. Build and start the Docker image:
   ```bash
   docker build -t oauth-app .
   docker run -p 4001:4001 --env-file .env oauth-app
   ```

3. Finding project in browser
Go to http://localhost:4001/ in your browser

4. To run deploy a stack; currently set to 5, run the commands
```bash
docker stack deploy -c docker-compose.yaml myapp-stack
docker stack ls
docker stack services
```
To scale from commandline, run this command, replacing the 5 with how many images you want in your stack
```bash
docker service scale mystack_web=5
```
5. To stop the Docker Instances run
```bash
docker stop $(docker ps -q)
docker stack rm myapp-stack
```