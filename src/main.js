import Vue from 'vue'
import App from './App'

import store from "./store/index"

import Vuex from "vuex"

new Vue({
  el: "#app",
  store,
  render: h=>h(App)
});
