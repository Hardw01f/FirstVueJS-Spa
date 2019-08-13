<template>
    <div class="signout">
      <h1>Logouted !!!</h1>
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
        signOut: function () {
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
