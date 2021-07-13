import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Exercise from './Exercise';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render((
  <React.StrictMode>

<BrowserRouter >
  <Switch>
    {/* <Route path = "/exercise" component = {Exercise} /> */}
    <Route exact path="/" component={Exercise} />
  </Switch>
</BrowserRouter>

  </React.StrictMode>
), document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
