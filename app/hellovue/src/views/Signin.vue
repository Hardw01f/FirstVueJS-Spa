<template>
  <div class="signin">
    <img alt="Vue logo" src="../assets/logo.png" width="15%" height="15%">
    <Signin msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signin from '@/components/Signin.vue'

export default {
  name: 'signin',
  components: {
    Signin
  }
}
</script>
