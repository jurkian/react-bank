# 🏦 react-bank

Banking app built in TypeScript, React, Redux and Node.
There is also an option to use Strapi, but you would have to adjust the Front End to use it.

Demo user (automatically created when you start the app):

Login: email@example.com<br />
Password: admin123

**(Please note this app needs to be adjusted to use the new Strapi Back End. Also, the TypeScript implementation is in early stage and covers only Front End at the moment.)**

## What's inside?

-  Login/register
-  Accounts
-  Transactions + new transaction
-  Credit/debit cards + change PIN/limits
-  Internal messages
-  User profile incl. data change
-  Help form
-  Income change chart
-  Currency stats
-  Form validation, async routing
-  Dummy data generator

![react-bank screenshot](screenshot.png?raw=true)

## Some details

Inspired by [Daily UI 30](https://symu.co/freebies/ui-kits-9/daily-ui-30-elements/) PSD files.<br />
Moved to HTML5/CSS3 using Avocode ([link to HTML/CSS repo](https://github.com/jurkian/daily-ui-30-html)).

Technologies:

WEB:

-  TypeScript
-  React
-  Redux
-  React Router
-  Webpack
-  Sass
-  Bootstrap 4
-  JWT tokens
-  recharts
-  react-dates

API:

-  Node, Express, Strapi
-  JWT tokens
-  Database: MongoDB, Mongoose (old API), MySQL or MariaDB (new API on Strapi)
-  Fixer.io for currency rates

## How to use it?

## Installation and running (old API, Node/Express)

1. Install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) ([MongoDB Compass](https://www.mongodb.com/products/compass) may be useful as well, to work on the database)
2. Create database called `react-bank-api` or use any other name, but then update it in the `old-api/.env` config file
3. Install all dependencies both in `web` and `old-api` folder by typing `npm install` inside each of them
4. Run API: type `npm run start-dev` in `old-api` folder
5. Run web: type `npm start` in `web` folder

## Installation and running (new API, Node/Strapi)

1. Install [Node.js](https://nodejs.org/) and [MariaDB](https://mariadb.org/)
2. Create database called `react-bank-api` or use any other name, but then update it in the `.env` config file
3. Install all dependencies both in `web` and root folder by typing `npm install` inside each of them
4. Run API: type `npm run develop` in root folder or (recommended) use `Visual Studio Code debugger` to run it
5. Run web: type `npm start` in `web` folder
6. Adjust Front End to use new Strapi endpoints

To create an optimized build in both cases, run `npm run build` in `web` folder

## First steps with Strapi

1. When you start the app, you should create yourself an example user, like `email@example.com`/`admin123`<br />
   You can also use dummy data generator by sending `POST` request to `http://localhost:1337/app/generate-dummy-data`<br />
   It will create few users and for each one of them few accounts, cards, transactions, messages and stats for the income/expenses stats widget on Front End<br />

2. Go to Strapi admin panel `http://localhost:1337` and set proper roles for all the endpoints your app is using, like enable generating dummy data for `Public` role. Otherwise you will see "Forbidden" every time you try to connect to the API

## How to run Strapi API on VPS using PM2?

I assume you will use Ubuntu 20.04 LTS as your system

1. Install node `sudo apt install nodejs` and npm `sudo apt install npm`
2. Install `pm2` package: `npm i -g pm2`
3. Move all the Strapi files to /var/www/react-bank-api
4. Run `NODE_ENV=production npm run build && pm2 start ecosystem.config.js --env production`<br />This command will build Strapi admin panel in `production` mode and then will use PM2's config `ecosystem.config.js` to start the app
5. Now your production Strapi should be ready to serve

Remember to set up the routes permissions on the server as well, otherwise most of the endpoints will return "Forbidden"<br />

HAVE FUN! 💪
