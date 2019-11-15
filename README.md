# react-bank

Banking app built in React and Redux.

Demo user (automatically created when you start the app):

Login: email@example.com<br />
Password: admin123

## What's inside?

* Login/register
* Accounts
* Transactions + new transaction
* Credit/debit cards + change PIN/limits
* Internal messages
* User profile incl. data change
* Help form
* Income change chart
* Currency stats
* Form validation, async routing
* Dummy data generator

![react-bank screenshot](screenshot.png?raw=true)

## Some details
Inspired by [Daily UI 30](https://symu.co/freebies/ui-kits-9/daily-ui-30-elements/) PSD files.<br />
Moved to HTML5/CSS3 using Avocode ([link to HTML/CSS repo](https://github.com/jurkian/daily-ui-30-html)).

Technologies:

WEB:
* React
* Redux
* React Router
* Webpack
* Sass
* Bootstrap 4
* JWT tokens
* recharts
* react-dates

API:
* Node, Express
* JWT tokens
* Database: MongoDB, Mongoose
* Fixer.io for currency rates

## How to use it?

1. Install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) ([MongoDB Compass](https://www.mongodb.com/products/compass) may be useful as well, to work on the database)
2. Create database called `react-bank-api` or use any other name, but then update it in the `api/.env` config file
3. Install all dependencies both in `web` and `api` folder by typing `npm install` inside each of them
4. Run API: type `npm run start-dev` in `api` folder
5. Run web: type `npm start` in `web` folder

To create an optimized build, run `npm run build` in `web` folder
