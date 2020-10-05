FROM node:12

LABEL maintainer=<dbcluster@gmail.com>

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000
CMD [ "npm", "start" ]