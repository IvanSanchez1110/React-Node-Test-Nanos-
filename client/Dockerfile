FROM node:10-alpine

WORKDIR /client

COPY package.json .

RUN npm install

ADD . .

EXPOSE 3000

CMD ["npm", "start"]
