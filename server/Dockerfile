FROM node:18-alpine

WORKDIR /app
# RUN npm i @prisma/client

# RUN npx prisma generate


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

# CMD ["npm", "start"]