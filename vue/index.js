var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello world'
	}
})

var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'Hola que hace'
	}
})

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})


var app4 = new Vue({
	el: '#app-4',
	data:{
		todos:[
			{ text: 'Aprendiendo JavaScript' },
			{ text: 'Aprendiendo Vue' },
			{ text: 'Construyendo algo asombroso' }
		]
	}
})

var app5 = new Vue({
	el: '#app-5',
	data:{
		message: 'Hello Vue.js'
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el: '#app-6',
	data:{
		message: 'Texto del input'
	}
})

Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
	el: '#app-7',
	data:{
		groseryList:[
			{ id: 0, text: 'Vegatables' },
			{ id: 1, text: 'Cheese'},
			{ id: 2, text: 'Whatever else humans are supposed to eat'}
		]
	}
})