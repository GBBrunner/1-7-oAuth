FROM node:latest

LABEL maintainer="Garrett Brunner <garrett.brunner3090@stu.mtec.edu>"
LABEL COHORT ="COHORT 21 - TEWP 1050 - Deployment and Security"
LABEL description="Node.js OAuth demo app for TEWP 1050 Docker lab"

WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000 4001
CMD ["node", "app.js"]