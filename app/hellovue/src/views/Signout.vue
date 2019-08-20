<template>
  <div class="signout">
    <img alt="Vue logo" src="../assets/logo.png" width="15%" height="15%">
    <Signout msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signout from '@/components/Signout.vue'

export default {
  name: 'signout',
  components: {
    Signout
  }
}
</script>
