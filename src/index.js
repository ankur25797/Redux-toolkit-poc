import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sections from './Sections'
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import financialInfoReducer from './formSlice'
import tradingInfoReducer from './form2Slice'

const store=configureStore({
  reducer:{
    financial: financialInfoReducer,
    trading: tradingInfoReducer,
  } 
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Sections />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
