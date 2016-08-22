import Vue from 'vue';
import component from 'component';

Vue.component('testComponent', component); 

let initialize = function(config) {
  return new Vue({
  el: config.container,
  data: {
    message: 'Hello Vue.js!'
  }
}); 
}

window.test = {};
window.test.init = initialize; 
