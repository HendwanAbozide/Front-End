FROM node:12.17.0-alpine
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 80
CMD node server.js

#ENTRYPOINT ["node", "index.js"]
#COPY package.json /app
