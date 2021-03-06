# Cloud Deployment with Heroku

This repository contains the code of my live coding session while presenting ["Deployment in die Cloud"](http://slides.com/akoenig/sitegeist-barcamp2015-cloud-deployment/#/) at the [sitegeist](https://sitegeist.de) Barcamp 2015.

It demonstrates the deployment of a Node.js application to the [Heroku](https://heroku.com) PaaS.

## Requirements

You need an [account](https://signup.heroku.com/www-pricing-top) on Heroku. They provide a [free plan](https://www.heroku.com/pricing) so that it is easy to start and play with the service. So no worries, there are no secret charges. Really :)

Furthermore you have to install the so-called [Heroku Toolbelt](https://toolbelt.heroku.com/) which is a CLI for interacting with the Heroku platform (creating applications, inspecting logs, scaling, etc.).

## Motivation

This project is represented by a Node.js application which exposes a HTTP interface you can interact with. It provides one `route handler` which, when called, will return a JSON response with an array of greetings. Nothing special. The aim is to demonstrate how to interact with Heroku and deploy an application. One important note: Heroku is not restricted to Node.js applications. They provide support for [Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs), [Ruby](https://devcenter.heroku.com/articles/getting-started-with-ruby), [Java](https://devcenter.heroku.com/articles/getting-started-with-java), [PHP](https://devcenter.heroku.com/articles/getting-started-with-php), [Python](https://devcenter.heroku.com/articles/getting-started-with-python), [Go](https://devcenter.heroku.com/articles/getting-started-with-go), [Scala and Play](https://devcenter.heroku.com/articles/getting-started-with-scala) and [Clojure](https://devcenter.heroku.com/articles/getting-started-with-clojure).

## Usage

Please note that you need Node.js >= 4.2.0 to run this appliaction locally.

### Installation

```
git clone https://github.com/akoenig/heroku-nodejs
cd heorku-nodejs
npm install
```

### Local usage

```
npm start
```

Open up your browser and point it to `http://localhost:8080`. You should see the response of this little service then.

### Deployment

You have to execute the following command once in order to be able to deploy this application on your personal Heroku PaaS account:

```
heroku create
```

This will register a new application on your personal Heroku account which, however, has not been deployed yet. The command will tell you the URL of your application in the output. Beside registering the application, this command will also register a new remote repository in your local git repository with the name `heroku`. If you execute `git remote -v`, you should something like this now:

```sh
heroku <YOUR_HEROKU_URL>.git (fetch)
heroku <YOUR_HEROKU_URL>.git (push)
```

If you have created the application on the Heroku PaaS, a deployment is simple as a `git push`. Just execute:

```sh
git push heroku master
```

and your application will be deployed to Heroku and be available afterwards via `<YOUR_HEROKU_URL>`.

## Important files

  * `Procfile`: This file tells Heroku the type of the application (`web`) and which command Heroku has to execute in order to boot the application (`npm start`).
  * `index.js`: The whole application :) A larger project would, of course, be represented by multiple files. But to keep things simple, keep things simple :)

Please consider the [Heroku Getting Started Guide for Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) to see how to inspect logs (`heroku logs --tail`) or how to scale your application horizontally and other interesting stuff. Make sure to play with your [Heroku Dashboard](https://dashboard.heroku.com/) as well.

Enjoy :)

## Author

MIT © 2015, [André König](mailto:andre.koenig@posteo.de)

