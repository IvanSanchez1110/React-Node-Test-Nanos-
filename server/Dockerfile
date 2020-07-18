FROM node:10-alpine

WORKDIR /server

COPY package.json .

RUN npm install
# RUN npm run test

COPY . .

CMD ["node", "app.js"]
