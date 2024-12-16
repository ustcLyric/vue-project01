<template>

  <!--  <SvgIcon color="red" height="100px" name="elxe" width="100px"></SvgIcon>-->

  <!--  测试 request-->
  <div>
    <router-view/>
  </div>

</template>

<script lang="ts" setup>

// import request from "@/utils/request.ts";
//
// import {onMounted} from "vue";

// 组建挂载完毕即发请求
// onMounted(() => {
//   request({
//     url: '/user/login1',
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

div{
  h1{
    color: $color;
  }
}
</style>
