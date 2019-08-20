<template>

  <ul>
      <li v-for="list in lists" :key="list.id">
          <label>
               <input type="CHECKBOX" v-model="list.isChecked"> {{ list.id }} : {{ list.title }}
          </label>
      </li>
  </ul>


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
            ]
    }
  },
}

</script>

