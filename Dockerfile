# PROD CONFIG
FROM node:14-alpine as prod

WORKDIR /app 
COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]

# DEV CONFIG
FROM prod as dev

RUN npm install --only=dev
CMD [ "npm", "run", "dev" ]