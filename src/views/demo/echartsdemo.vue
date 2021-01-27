<template>
  <div class="echarts-demo-page"> <div id="my-chart-demo"></div> </div>
</template>
<script>
export default {
  name: 'echartsdemo',
  data () {
    return {
      options: {
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        legend: { data:['销量'] },
        xAxis: { data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"] },
        yAxis: {},
        series: [{ name: '销量', type: 'bar', data: [5, 20, 36, 10, 10, 20] }]
      }
    }
  },
  mounted () { this.initEcharts() },
  methods: {
    initEcharts () {
      const mychart = this.echarts.init(document.getElementById('my-chart-demo'))
      mychart.setOption(this.options)
    }
  }
}
</script>
<style lang="css" scoped>
#my-chart-demo { width: 600px; height: 400px; border: 1px solid red; margin: 0 auto;}
</style>