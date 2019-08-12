<template>
  <div class='signup'>
      <h1>Hello</h1>
      <h2>Welcome to Signup page</h2>
      <input type="email" placeholder="Username" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <button @click="signUp">Register</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
        username: '',
        password: ''
    }
  },
  methods:{
    signUp: function(){
        firebase.auth().createUserWithEmailAndPassword(this.username, this.password).then(user => {
            alert('Create account: ',user.email)
        }).catch(error => {
            alert(error.message)
        })
    }
  },
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
