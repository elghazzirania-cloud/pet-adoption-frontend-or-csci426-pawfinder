FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install axios --save
COPY . .
RUN npm run build
CMD ["npx", "serve", "-s", "build"]