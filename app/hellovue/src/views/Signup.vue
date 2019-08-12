<template>
  <div class="signup">
    <img alt="Vue logo" src="../assets/logo.png" width="15%" height="15%">
    <Signup msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/Signup.vue'

export default {
  name: 'signup',
  components: {
    Signup
  }
}
</script>
