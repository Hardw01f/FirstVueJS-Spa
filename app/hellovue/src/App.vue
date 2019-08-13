<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/shopping">Shopping-Lists</router-link> |
      <router-link to="/signin">Signin</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <button @click="signOut">Signout</button>

    </div>
    <router-view/>
  </div>
</template>


<script>
import firebase from 'firebase'

export default {
  name: 'Signout',
  data () {
    return {
    }
  },
  methods:{
        signOut: window.onload = function () {
			firebase.auth().onAuthStateChanged((user) => {
                firebase.auth().signOut().then(() =>{
                    alert(user + ' : logout');
                    this.$router.push('/signin');
                }).catch( (error)=>{
                    alert(error + ' : occur logout error');
                });
			})
    }

  }
}



</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
