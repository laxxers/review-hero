FROM node:lts-alpine AS development

WORKDIR /usr/src/app
ADD package.json yarn.lock ./
RUN apk add --no-cache --virtual .gyp python3 make g++
RUN yarn
COPY src/ ./src
COPY tsconfig.json tsconfig.build.json nest-cli.json ./

CMD yarn start