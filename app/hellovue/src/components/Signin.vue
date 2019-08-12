<template>
  <div class='signin'>
      <h1>Hello</h1>
      <h2>Signin page</h2>
      <input type="email" placeholder="Username" v-model="username"><br>
      <input type="password" placeholder="Password" v-model="password"><br>
      <button @click="signIn">SignIn!</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data () {
    return {
        username: '',
        password: ''
    }
  },
  methods:{
    signIn: function () {
			firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
            user => { 
                alert( user + ': Success');
                this.$router.push('/')
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode + ' : ' + errorMessage)
        })
    }
  }
}



</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
#time {
		font-size: 600%;
}

#todayweek {
        font-size: 400%;
}

#nextdayweek {
		font-size: 200%;
}

#garbage {
		font-size: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 10px 0;
  padding: 10px;
}


.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}

input {
  margin: 5px 0;
  padding: 10px;
}


</style>
