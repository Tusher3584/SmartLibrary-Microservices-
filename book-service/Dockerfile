FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .
COPY .env .env
EXPOSE 5001
CMD ["npm", "start"]
