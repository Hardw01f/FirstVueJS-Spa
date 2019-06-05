
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! Welcome to the Vue world!'
  }
})


var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
		el: '#app-3',
		data:{
				seen:true
		}
})

var app4 = new Vue({
		el: '#app-4',
		data:{
				todos : [
						{text : 'Hello'},
						{text : 'Your number is ...'},
						{text : 'RX-78-2'}
				]
		}
})


var app5 = new Vue({
		el: '#app-5',
		data:{
				message:'Hello, Vue world!!'
		},
		methods:{
				reverseMessage: function () {
						this.message = this.message.split('').reverse().join()
				}
		}
})

var app6 = new Vue({
		el: '#app-6',
		data: {
				message : 'Hello Vue world!'
		}
})

