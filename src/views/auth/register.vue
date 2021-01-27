<template>
  <div class="register-page">
    <p @click="jump">register page</p>
  </div>
</template>

<script>
  export default {
    name: 'register',
    methods: {
      jump () {
        this.$router.replace('login')
      }
    }
  }
</script>

<style lang="css" scoped>
.register-page p {
  color: blue;
  cursor: pointer;
}
</style>