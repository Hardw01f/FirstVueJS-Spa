<template>
  <div class='hello'>
    <h1 id="time" :class="msg">{{ msg }}</h1>
	<h3 id="todayweek">{{ todayweek }}</h3>
	<h3 id="nextdayweek">Tommorw : {{ nextdayweek }}</h3>
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

var weeks = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function Getnowweek() {
		var now = new Date();
		var nowweek = now.getDay();
		return weeks[nowweek]
}

function GettommorwWeek() {
		var now = new Date();
		var nowweek = now.getDay();
		return weeks[nowweek + 1]
}


export default {
  name: 'HelloWorld',
  data () {
    return {
    msg : GetRealtime(), 
    todayweek : Getnowweek(),
    nextdayweek : GettommorwWeek()
    }
  },
  methods:{
  },
  mounted() {
          setInterval(() => this.msg = GetRealtime(),1000);
          setInterval(() => this.todayweek = Getnowweek(),1000);
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
