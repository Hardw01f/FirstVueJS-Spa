<template>
  <div class="shopping">
    <img alt="Vue logo" src="../assets/logo.png" width="15%" height="15%">
    <Shopping msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Shopping from '@/components/Shopping.vue'

export default {
  name: 'shopping',
  components: {
    Shopping
  }
}
</script>
