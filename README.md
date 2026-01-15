# OAuth App Docker Instructions

This project demonstrates OAuth authentication in a Node.js app. Below are instructions to build and run the app using Docker.

## Prerequisites
- Docker installed on your machine
- Clone this repository

## Building the Docker Image

1. Open a terminal in the project directory.
2. Build the Docker image:
   ```sh
   docker build -t oauth-app .
   ```

## Running the Container

1. Start the container:
   ```sh
   docker run -p 3000:3000 --env-file .env oauth-app
   ```
   - Replace `3000` with your app's port if different.
   - The `--env-file .env` flag loads environment variables from your `.env` file.

## Stopping the Container

- To stop the running container, press `Ctrl+C` in the terminal or use:
  ```sh
  docker ps
  docker stop <container_id>
  ```

## Notes
- The `.env` file is excluded from the image for security. Provide it at runtime.
- Update your `.env` file with the required OAuth credentials before running.

## Troubleshooting
- If you change dependencies, rebuild the image.
- Check logs with:
  ```sh
  docker logs <container_id>
  ```

---
For more details, see the source files in the project.
