FROM node:10

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

EXPOSE  8080

ENTRYPOINT [ "npm", "run", "server" ]
