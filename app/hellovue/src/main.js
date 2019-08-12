import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyCEWfFwrgJvNaznzcKqAqaOw36MldHknpM",
    authDomain: "mysmartclock-3861b.firebaseapp.com",
    databaseURL: "https://mysmartclock-3861b.firebaseio.com",
    projectId: "mysmartclock-3861b",
    storageBucket: "",
    messagingSenderId: "147996235726",
    appId: "1:147996235726:web:6ee326593f19024c"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
