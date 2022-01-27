import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GitHub from './component/GitHub';
import { BrowserRouter as Router } from 'react-router-dom'
import Links from './component/links'

ReactDOM.render(
  <>

    <Router>
      <Links />
      <App />
    </Router>
  </>

  ,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <GitHub name="developersatish" />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
