FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app

EXPOSE 7770

CMD ["npm", "run", "start"]