FROM node:22-alpine

ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN mkdir -p uploads logs && chown -R node:node /app

USER node
EXPOSE 8701

CMD ["node", "src/server.js"]