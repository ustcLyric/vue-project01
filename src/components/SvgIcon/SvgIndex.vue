<template>
<!--   svg外层容器节点 内部需要和use标签结合使用-->
  <svg :style="{width,height}">
<!--    icon-名字 fill设置颜色-->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<script setup lang="ts">

// 接收父组件传来的参数
defineProps({
  // xlink:href属性值前缀
  prefix:{
    type:String,
    default:'#icon-'
  },
  // 提供使用的图标的名字
  name:String,
  // 图标颜色
  color:{
    type:String,
    default:'',
  },
  width:{
    type:String,
    default:'16px'
  },
  height:{
    type:String,
    default:'16px'
  }

})
</script>

<style scoped>

</style>
