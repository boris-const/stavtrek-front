#################
#Build
#################
FROM --platform=linux/amd64 node:18.19.1-alpine AS build

WORKDIR /app

ARG VITE_BACK_URL
ENV VITE_BACK_URL=${VITE_BACK_URL}

ARG VITE_PORT
ENV VITE_PORT=${VITE_PORT}

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --frozen-lockfile

COPY index.html ./
COPY tsconfig.json ./
COPY tsconfig.app.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./
COPY ./public ./public
COPY ./src ./src

RUN yarn build

#################
#Start
#################
FROM --platform=linux/amd64 node:18.19.1-alpine AS deploy

WORKDIR /app

RUN apk add bash && \
  yarn global add serve

COPY --from=build ./app/dist ./dist

CMD ["/bin/bash", "-c", "serve -s dist"]

