<template>

  <!--  <SvgIcon color="red" height="100px" name="elxe" width="100px"></SvgIcon>-->

  <!--  测试 request-->
  <router-view>

  </router-view>

  <!--  测试sass-->
  <!--  <div>-->
  <!--    <h1>测试</h1>-->
  <!--  </div>-->

</template>

<script lang="ts" setup>

import request from "@/utils/request.ts";

import {onMounted} from "vue";

// 组建挂载完毕即发请求
// onMounted(() => {
//   request({
//     url: '/user/login',
//     method: 'post',
//     data: {
//       username: 'admin',
//       password: '1111121'
//     }
//   }).then(res => {
//     console.log(res);
//   })
// })


</script>

<style lang="scss" scoped>

</style>
