<template>
  <div style="color: red">
    <div>login component</div>
    <el-button @click="plus">plus+8</el-button>
    <el-button @click="short">short-6</el-button>
  </div>
</template>

<script>
  export default {
    name: 'login',
    methods: {
      plus () {
        this.$store.commit('setCountPlus', 8)
      },
      short () {
        this.$store.dispatch('ACT_COUNT_SHORT', 6)
      }
    }
  }
</script>