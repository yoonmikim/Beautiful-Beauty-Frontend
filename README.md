# Beautiful Beauty Frontend

![alt text](screenshots/cart.png "Description goes here")
![alt text](screenshots/beautiful_beauty.png)

A Makeup App (Sephora-ish) where user can go to view products, toggle with login/filter/sort/search products based on user inputs. If user likes certain products, user can add to cart and/or go to product pages to purchase.

+ Created a Ruby on Rails API backend to parse data from a 3rd party API. (Seed data from a complex data set - external API)
+ Use of MVC, Serializers, ActiveRecord, and custom RESTful routes to optimize database and schema for backend functionality. (belongs_to / has_many / belongs_to / has_many_through relationships in model)
+ Basic database query optimizations & Background jobs for slow actions (provided a Loading Page for async issues with React.js when fetching data from componentDidMount)
+ Validations (when signing up as a new user - username should be unique)
+ Built Frontend with React ( React Component, import { Switch, BrowserRouter as Router, Route, Link, Redirect, withRouter from 'react-router-dom'; )
+ Interacting with a complex API, Custom CSS & HTML for styling UX & UI, NPM & yarn packages

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. You will ned to have the backend repo cloned and installed on your device first. [Backend Found Here](https://github.com/yoonmikim/Beautiful-Beauty-Backend)

### Installing and Running the App

A step by step series of examples that tell you how to get a development env running.
You will need to have cloned the backend repo and started the rails server on port 3000.
The frontend will run on port 3001 by default if you already have the backend server up and running.
To start the frontend:

```
$ git clone
$ cd [repo location]
$ cd beautiful-beauty-frontend
$ npm install
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Built With

* ReactJS and Redux (front-end)
* Ruby on Rails (back-end)
* Makeup API

## Author

* **Yoonmi Kim** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

