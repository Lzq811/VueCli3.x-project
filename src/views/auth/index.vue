<template>
  <div>
    <p style="color: red">index</p>
    <div class="state-count-update">xuex-state-count-update:  {{count}}</div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'auth',
    computed: {
      count () {
        return this.$store.state.count
      }
    }
  }
</script>