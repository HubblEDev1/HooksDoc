import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { SimpleForm } from './components/02-useEffect/SimpleForm';

ReactDOM.render(
  //<MultipleCustomHook/>,
  <SimpleForm/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
