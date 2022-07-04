FROM node:16

ENV SERVER_PORT 4000
EXPOSE 4000

WORKDIR /app
COPY . ./

# Install packages
RUN yarn install

# Create types
RUN yarn generate

CMD yarn prisma migrate deploy && node --experimental-specifier-resolution=node --loader ts-node/esm src/main.ts