FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .
COPY .env .env
EXPOSE 5000
CMD ["npm", "start"]
