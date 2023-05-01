import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Surprise from './Surprise'
import Team from './Team'
import Feedback from './Feedback'
import Select from './Select'

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Surprise />
    <Team />
    <Feedback />
    <Select />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
