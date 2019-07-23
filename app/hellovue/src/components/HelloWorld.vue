<template>
  <div class='hello'>
    <h1 id="time" :class="msg">{{ msg }}</h1>
	<h2>{{ msg }}</h2>
    <!-- <button @click="apiPublic">public</button>
    <button @click="apiPrivate">private</button>
	<button @click="getNowtime">nowtime</button> -->
  </div>
</template>

<script>

function GetRealtime(){
            var now = new Date();
			var year = now.getFullYear();
			var month = now.getMonth();
			var nowdate = now.getDate(); // 日
            var hour = now.getHours(); // 時
            var min  = now.getMinutes(); // 分
            var sec  = now.getSeconds(); 
            var msg = year + "/" + month + "/" + nowdate + "  " + hour + ":" + min + ":" + sec;
            return msg
            //document.getElementById("realtime").innerHTML = msg;
}



import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
    msg : GetRealtime(), 
    }
  },
  methods: {
    apiPublic: async function () {
      let res = await axios.get('http://127.0.0.1:8000/public')
      this.msg = res.data
    },
    apiPrivate: async function () {
      let res = await axios.get('http://127.0.0.1:8000/private')
      this.msg = res.data
    },
    getNowtime: async function () {
      let res = await axios.get('http://localhost:8000/nowtime')
      this.msg = res.data
	},
	startInterval : function () {
      var self = this;
      setInterval(function(){
            self.msg = GetRealtime()
            },1000);
    },
  },
  mounted: {
	function () {
          setInterval(() => {
              this.msg = GetRealtime()
          },1000);
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
		font-size: 400%;
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
</style>
