# Health Checker

## Introduction

Health Checker is an application designed to easily verify the availability of a domain name. The collaborative project, developed by a team of 2, utilizes version control tools. The application provides users with the ability to authenticate, modify the frequency of URL requests, and view results in either list or graph format. It operates as a Saas application accessible through a web interface.

## Installation

To install the project, follow these steps :

1. Clone the project using the command :
 ```bash
 git clone https://github.com/Arnaud-Lyard/healthchecker.git
 ```
   
2. Navigate to the project root and run :
```bash
docker-compose -f docker-compose.dev.yml up --build
```

3. For CSS modification, navigate to the client folder :
```bash
cd ./client
pnpm i
pnpm watch-css
```
## Prerequisites
Make sure you have the following prerequisites installed :
- [NodeJS](https://nodejs.org/en)
- [pnpm](https://pnpm.js.org/)

## Functioning
The application facilitates communication between a server and a client using a GraphQL API. User authentication involves receiving a token securely stored in cookies. Mutations and queries are accessible only to authenticated users and are protected. The application includes a mobile version developed with React Native and Expo. Unit tests and end-to-end tests have been implemented. The server analyzes responses using a CRON job that checks URLs at the programmed frequency. Real-time client updates are achieved through polling.

## Technologies
### Server
- NodeJS
- JavaScript
- TypeScript
- Jest
- GraphQL
- Express
- Class-validator
- PostgreSQL
- Playwright
### Client
- ReactJS
- JavaScript
- TypeScript
- React-router
- GraphQL
- React Native
- Expo
## Use
The application is straightforward :

Submit a URL via a form.
The response is displayed and added to the list of all URLs.
This list is accessible even when not logged in.
When logged in, an additional "My URLs" page lists all URLs the user has requested, with various filtering options.
## Tests
Unit tests have been implemented for critical functions, and an end-to-end test using Playwright is included. Additionally, a test API generates local responses to simulate website responses.

## Update in real time
The list of URLs is refreshed every 5 seconds.
