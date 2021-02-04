<template>
  <div class='apps'>
    <div class="sidebar">
      <Menus/>
    </div>
    <div class="subject">
      <div class="header">
        <Header/>
      </div>
      <div class="main" ref="adminLayout_main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/work-bench-coms/head'
import Menus from '@/components/work-bench-coms/menus'
export default {
  name: 'workbench',
  data () {
    return {}
  },
  components: { Header, Menus },
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.apps {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  background: #F5F6FF;
  .sidebar {
    border: 1px solid red;
    width: 230px;
    flex: none;
    background: #ffffff;
    box-shadow: 0px 3px 27px 0px rgba(176,193,226,0.15);
  }
  .subject {
    border: 1px solid blue;
    flex: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .header{
      flex: none;
      padding: 0 60px;
      box-sizing: border-box;
      height: 60px;
    }
    .main {
      border: 1px solid green;
      flex: auto;
      overflow-x: hidden;
      padding: 0 60px 30px 60px;
      box-sizing: border-box;
    }
  }
}
</style>