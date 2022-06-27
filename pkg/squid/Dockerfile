FROM node:16-alpine AS node

FROM node AS node-with-gyp
RUN apk add g++ make python3

FROM node-with-gyp AS builder
WORKDIR /squid
ADD package.json .
RUN yarn
ADD tsconfig.json .
ADD src src
RUN yarn run build

FROM node-with-gyp AS deps
WORKDIR /squid
ADD package.json .
RUN yarn install --production

FROM node AS squid
WORKDIR /squid
COPY --from=deps /squid/package.json .
COPY --from=deps /squid/node_modules node_modules
COPY --from=builder /squid/lib lib
ADD db db
ADD schema.graphql .
ADD zeroTypesBundle.json .

# TODO: use shorter PROMETHEUS_PORT
ENV PROCESSOR_PROMETHEUS_PORT 3000
EXPOSE 3000
EXPOSE 4000

FROM squid AS processor
CMD ["npm", "run", "processor:run"]