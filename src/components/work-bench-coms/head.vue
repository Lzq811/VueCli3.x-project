<template>
  <div class="header-coms">
    <div class="bread-crumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'head-com',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.header-coms {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>

<style lang="less">
.header-coms {
  .el-breadcrumb__separator {
    color: #888;
  }
  .bread-crumb{
    padding-left: 100px;
    .el-breadcrumb {
      font-size: 18px;
      height: 100%;
      text-align: center;
      line-height: 60px;
    }
  }
  
}
</style>