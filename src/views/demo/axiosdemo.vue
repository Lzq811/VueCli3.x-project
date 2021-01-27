<template>
  <div class="axios-demo-page">
    <p class="title">axios demo</p>
  </div>
</template>
<script>
import api from '@/api/demo'
export default {
  name: 'axiosdemo',
  mounted () { this.getData()},
  methods: {
    getData () {
      const params = {method: api.echartdemo, name: 'tom', pwd: '123456'}
      this.axios.post(params).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.axios-demo-page {
  border: 1px solid red;
  .title {
    font-size: 40px;
    font-weight: 700;
    color: yellowgreen;
  }
}
</style>