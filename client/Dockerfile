FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]


RUN yarn install 

COPY . .

CMD [ "yarn", "start" ]