import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouteHome from './core/routeHome';

// <DefaultReactPage />
// <GitHub name="developersatish" />,
// <RouteHome />,
{/* <React.StrictMode>
    <DefaultReactPage />
  </React.StrictMode>,  */}



ReactDOM.render(
  <>
    <div className="App container mx-auto mt-3 font-thin">
      <RouteHome />
    </div>

  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
