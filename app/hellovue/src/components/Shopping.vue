<template>

<div>
  <ul>
      <li v-for="list in lists" :key="list.id">
          <label v-bind:class="{ done : list.isChecked } ">
               <input type="CHECKBOX" v-model="list.isChecked"> {{ list.id }} : {{ list.title }}
          </label>
      </li>
  </ul>
  <input type="text" placeholder="買うものを追加！" v-model="NewItemTitle">
  <button type="submit" v-on:click="addTodo">Go</button>
  <br>
  <br>
  <button v-on:click="deleteTodo()">Delete</button>
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
</style>
