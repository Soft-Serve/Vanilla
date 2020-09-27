FROM node:14.4-alpine
WORKDIR /frontend
COPY package*.json ./
RUN yarn install
COPY . .
CMD ["yarn", "serve"]