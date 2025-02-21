FROM node:lts
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
COPY package*.json ./
RUN npm install --force
EXPOSE 4200
CMD ["npm", "run", "start"]