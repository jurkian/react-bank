# react-bank

Banking app built in React and Redux.

[Demo here](https://react-bank-f7cc8.firebaseapp.com/)<br />
Login: email@example.com<br />
Password: qwerty

## What's inside?

* Login/register
* Accounts
* Transactions + new transaction
* Credit/debit cards + change PIN/limits
* Internal messages
* User profile incl. password change
* Help form
* Income change chart
* Currency stats
* Form validation, pagination, async routing

![react-bank screenshot](screenshot.png?raw=true)

## Some details
Inspired by [Daily UI 30](https://symu.co/freebies/ui-kits-9/daily-ui-30-elements/) PSD files.<br />
Moved to HTML5/CSS3 using Avocode ([link to HTML/CSS repo](https://github.com/jurkian/daily-ui-30-html)).

Technologies:
* React
* Redux
* Webpack
* Sass
* Bootstrap 3 (modified for em/rem support)
* React Router
* JWT tokens
* recharts
* react-dates
* APIs: Firebase as database, Fixer.io for currency rates

## How to use it?

1. Install all dependencies `npm install`
2. Put your Firebase configuration in `src/tools/firebase/index.js` (for development)
3. Run `npm run start` to start a server and begin developing
4. Run `npm run build` to create a build
