<template>
  <div class='home'>
    <h1 id="time" :class="msg">{{ msg }}</h1>
	<h3 id="todayweek">{{ todayweek }}</h3>
	<h3 id="nextdayweek">Tomorrow : {{ nextdayweek }}</h3>
	<h4 id="garbage">Tomorrow Garbage : {{ garbage }}</h4> 
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
            if ( month < 10 ) month = '0' + month;	
			var nowdate = AddDigital(now.getDate());
            var hour = AddDigital(now.getHours());
            var min  = AddDigital(now.getMinutes());
            var sec  = AddDigital(now.getSeconds());
            var msg = year + "/" + month + "/" + nowdate + "  " + hour + ":" + min + ":" + sec;
            return msg
            //document.getElementById("realtime").innerHTML = msg;
}

function AddDigital(args){
		if( args < 10 ) args = '0' + args
        return args
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
		if ( nowweek != 6 ){
				return weeks[nowweek]
		}else{
				return weeks[0]
		}
}

function WeekGarbage(tomorrow) {
        if ( tomorrow == "Monday" ) {
            return '燃えるゴミ'
        } else if ( tomorrow == "Tuesday" ) {
            return '燃やさないゴミ'
		} else if ( tomorrow == "Wednesday" ) {
            return '紙＆ダンボールゴミ、布ごみ'
        } else if ( tomorrow == "Thursday" ) {
            return '燃やすゴミ、ペットボトル、カン、ビン'
        } else {
            return 'Nothing'
		}
}

export default {
  name: 'HelloWorld',
  data () {
    return {
    msg : GetRealtime(), 
    todayweek : Getnowweek(),
    nextdayweek : GettommorwWeek(),
    garbage : 0
    }
  },
  methods:{
  },
  mounted() {
          setInterval(() => this.msg = GetRealtime(),1000);
          setInterval(() => this.todayweek = Getnowweek(),1000);
          setInterval(() => this.nextdayweek = GettommorwWeek(),60000);
          setInterval(() => this.garbage = WeekGarbage(this.nextdayweek),1000);
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
</style>
