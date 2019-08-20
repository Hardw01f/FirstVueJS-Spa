<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="userStatus" to="/">Home</router-link> |
      <router-link to="/shopping">Shopping-Lists</router-link> |
      <router-link to="/signin">Signin</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <!-- <Signout @click="signOut">Signout</Signout> -->
      <router-link to="/signOut">Signout</router-link> |

    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'

/*
function test() {
		firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('test login')
                return true
            } else {
                console.log('test logout')
                return false
			}
		})
}*/


export default {
    name: "statusCheck",
    data () {
            return {
                userStatus : this.statusCheck
            }
    },
    methods: {
        statusCheck: function () {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log('login')
                    return true
                } else {
                    console.log('logout')
                    return false 
                }
            });
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
