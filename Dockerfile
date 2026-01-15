FROM Node:latest

LABEL Garrett Brunner<garrett.brunner3090@stu.mtec.edu>
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000

CMD ["node", "app.js"]