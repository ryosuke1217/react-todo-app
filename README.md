This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm install -g json-server`

install api mock server.<br/>
description to [json-server](https://github.com/typicode/json-server)

### `json-server --watch --port 5000 api-mock/db.json`

Open a new console and runs this command.<br />

Open [http://localhost:5000/todos](http://localhost:5000/todos) to view it in browser.

    {
      "id": "1",
      "content": "hoge",
      "done": true,
      "createdAt": "2019-11-19T07:10:52.789Z",
      "updatedAt": "2019-11-19T07:10:52.789Z"
    }

This is the content of db.json file is read.<br />
You can do create, read, update and delete.<br />
Then it is automatically reflected in db.json.

