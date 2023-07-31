FROM node:16

RUN npm install -g express

COPY . /usr/src/app

CMD ["node", "server.js"]
