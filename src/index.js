import React from 'react';
import ReactDom from 'react-dom';
import App from "./layouts/App";

import './assets/css/base.css'
import './assets/js/font.js'

import axios from "./plugins/axios";
React.Component.axios = axios

// import router
import { BrowserRouter,Route } from "react-router-dom"

// 配置utils
import * as utils from './utils';

Object.keys(utils).forEach(key => {
  React.Component[key]=utils[key]
});

ReactDom.render(
  <BrowserRouter>
     <Route component={App} />{/*Route获取上下文context */}
  </BrowserRouter>,
  document.getElementById("root")
);


