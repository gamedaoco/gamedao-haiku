FROM node:lts

ENV SERVER_PORT 4000
EXPOSE 4000

WORKDIR /app
COPY . ./

RUN yarn install && yarn cache clean && yarn generate

# CMD [ "sh", "-c", "yarn prisma migrate deploy; node --experimental-specifier-resolution=node --loader ts-node/esm src/main.ts" ]
CMD [ "sh", "yarn prisma migrate deploy; node --experimental-specifier-resolution=node --loader ts-node/esm src/main.ts" ]
