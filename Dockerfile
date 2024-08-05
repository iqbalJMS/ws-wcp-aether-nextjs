FROM node:20-bookworm

WORKDIR /workspace/next

COPY . . 
# COPY .env ./

RUN npm install

RUN npm run obfuscate  

EXPOSE 5000

CMD ["npm", "run", "prod:concurrent"]