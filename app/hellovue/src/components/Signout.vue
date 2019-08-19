<template>
      <button class="btn-square-shadow" style="width:200px;height:75px" @click="signOut">SignOut!</button>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "signout",
    data () {
        return {
      }
    },
    methods: {
         signOut: function () {
             //this.$emit("signOut");
             firebase.auth().onAuthStateChanged((user) => {
                 firebase.auth().signOut().then(() => {
                     alert(user + ' : logout');
                     this.$router.push('/signin');
                     console.log('logouted');
             }).catch( (error)=>{
                     alert( error + ' : occur logout errer');
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

		.btn-square-shadow {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #5EBA83;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
.btn-square-shadow:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
  border-bottom: none;
}

</style>
