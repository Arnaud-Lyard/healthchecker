FROM mcr.microsoft.com/playwright:v1.30.0-focal

RUN mkdir /server
WORKDIR /server

COPY ./server/package.json ./package.json
COPY ./server/pnpm-lock.yaml ./pnpm-lock.yaml


RUN npm i -g pnpm
RUN pnpm i

COPY ./server/src ./src
COPY ./server/.env ./.env
COPY ./server/.eslintrc.js ./.eslintrc.js
COPY ./server/tsconfig.json ./tsconfig.json

RUN mkdir /e2e-tests
WORKDIR /e2e-tests

COPY e2e-tests/package*.json ./

RUN npm i -g pnpm
RUN pnpm i
RUN npx playwright install

COPY e2e-tests/playwright.config.ts ./playwright.config.ts
COPY e2e-tests/tsconfig.json ./tsconfig.json
COPY ./server/.env ./.env

CMD pnpm test