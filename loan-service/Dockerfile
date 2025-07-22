FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .
COPY .env .env
EXPOSE 5002
CMD ["npm", "start"]
