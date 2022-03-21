FROM node:16-alpine

WORKDIR /app/backend/

COPY package*.json ./

COPY package.npm .

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]
