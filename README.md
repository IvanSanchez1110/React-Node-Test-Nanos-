## Description

This is the test project built using MERN(React, Node, Express, Mongo).
The reason why I choose MERN, as a javascript developer, I especially specialized in React and Node as I built tons of React/Node projects so far as well as React/Node is more popular than other stacks.

### Server

The backend is implemented using Node, Express and Mongoose.
And I chose Mongodb, because Mongo is very ideal for the structure of the file given.
And as the file is json structured, so with Mongo, it is very easy to populate the database from this file using the functionality provided by Mongoose.

### Client

The frontend is built using React, Redux, Redux-Saga, React-Hook, Material UI, Axios.
The initial code was generated from create-react-app.
React-Saga is used for async api call when fetching data from the backend.
On this app, All component are implemented using Function component and Hook API such as useState, useStore, useDispatch, useSelector, useEffect, etc.
As the introduction of Hook API including useState, useEffect, useStore, useDisaptch, etc, we can build a React app without using Class component. So it helps us to write code more clean, readable, and structured.

Material UI is used for implementing the UI easily.
There are many theme UIs including Material UI, Ant Design, Kendo UI, Grommet, etc, so we can use one of them.
And then we can use Styled-Component or Emotion for styling components.

Axios is used for http request.

## Installation

1. Clone the repository
2. run docker-compose

**Clone the repository**

`git clone https://github.com/pigetwebdev/nanos_test.git`

**run docker-compose**

## Usage

Note: use the following commands at the root folder.

1. Start <code>docker-compose up</code>
2. Go to <code>http://localhost:3000</code> in browser for client

## Docker commands

Start: `docker-compose up`<br>
Stop: `docker-compose down`<br>

Or Simply `./run.sh`

## Used libs, packages, frameworks.

1. Server

   - "chai": "^4.2.0",
   - "express": "^4.17.1",
   - "mocha": "^7.1.0",
   - "mongoose": "^5.9.3"

2. Client
   the initial code comes from
   `npx create-react-app`

used libes

- "@material-ui/core": "^4.9.5",
- "@material-ui/icons": "^4.9.1",
- "@testing-library/jest-dom": "^4.2.4",
- "@testing-library/react": "^9.3.2",
- "@testing-library/user-event": "^7.1.2",
- "axios": "^0.19.2",
- "immutable": "^4.0.0-rc.12",
- "react": "^16.13.0",
- "react-dom": "^16.13.0",
- "react-redux": "^7.2.0",
- "react-router-dom": "^5.1.2",
- "react-scripts": "3.4.0",
- "redux": "^4.0.5",
- "redux-actions": "^2.6.5",
- "redux-saga": "^1.1.3"
