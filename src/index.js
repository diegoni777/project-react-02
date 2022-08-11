import React from 'react';
import  ReactDOM  from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import './style/main.css' 

import Router from './router/router'

const info = <Router/>
ReactDOM.render(info,document.getElementById('root'));
