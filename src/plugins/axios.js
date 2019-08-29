// 配置axios
import React from "react";
import axios from "axios";
import PubSub from 'pubsub-js'

axios.interceptors.request.use(function (config) {
  // publish a topic asynchronously
  PubSub.publish('VIEW_BLOADING', true);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  PubSub.publish('VIEW_BLOADING', false);

  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

React.Component.axios = axios
window.axios = axios;

export default axios;