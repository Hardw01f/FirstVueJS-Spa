<template>

<div calss="shopping">
  <ol>
      <li id="list" v-for="list in lists" :key="list.id">
          <label v-bind:class="{ done : list.isChecked } ">
              <h3><input type="CHECKBOX" v-model="list.isChecked"> : {{ list.title }}</h3>
          </label>
      </li>
  </ol>
  <input type="text" class="check" placeholder="買うものを入力！" v-model="NewItemTitle">
  <button type="submit" id="submit" v-on:click="addTodo">Go!!</button>
  <br>
  <br>
  <button id="submit" v-on:click="deleteTodo()">Remove</button>
</div>


</template>

<script>

export default {
  name: 'Shopping',
  data () {
    return {
    msg : 'This is Test', 
    lists : [
			{ title: 'AAA', id: 1 , isChecked: false },
            { title: 'BBB', id: 2 , isChecked: false },
            { title: 'CCC', id: 3 , isChecked: false },
            ],
	NewItemTitle: '',
    }
  },
  methods: {
      addTodo: function() {
          this.lists.push({
              title: this.NewItemTitle,
              isChecked: false
          });
          this.NewItemTitle = '';
          this.saveTodo();
      },
      deleteTodo: function() {
          this.lists = this.lists.filter(function (list) {
              return list.isChecked === false;
         });
          this.saveTodo();
       },
       saveTodo: function() {
           localStorage.setItem('lists',JSON.stringify(this.lists));
       },
       loadTodo: function() {
               this.lists = JSON.parse( localStorage.getItem('lists') );
               if ( !this.list ){
                   this.list = [];
               }
       },
  },
  mounted: function() {
       this.loadTodo();
  },
}

</script>

<style>
    .done { text-decoration: line-through; }

#list {
        text-align: center;
}

	ol {
  background: #f3fbff;
  border: 2px #5DAD94 dashed;
}

.shopping {
		margin: 10px auto;
        width:500px;
}

.check {
			border:0;
padding:10px;
font-size:1.0em;
font-family:Arial;
color:#000000 ;
border:solid 1px #ccc;
margin:0 0 20px;
width:300px;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border-radius: 3px;
-moz-box-shadow: inset 0 0 4px rgba(0,0,0,0.2);
-webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
box-shadow: inner 0 0 4px rgba(0, 0, 0, 0.2);
}

#submit {
font-size:1.0em;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border:solid 1px;
border-color : #5DAD94;
border-radius: 3px;
-moz-box-shadow: inset 0 0 4px rgba(0,0,0,0.2);
-webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
box-shadow: inner 0 0 4px rgba(0, 0, 0, 0.2);
background-color:#D5EBE7;
}
</style>
