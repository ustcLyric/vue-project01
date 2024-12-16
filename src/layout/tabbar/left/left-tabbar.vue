<template>
<!--  扩展-->
  <el-icon style="margin-right: 20px" @click="changeIcon">
    <component :is="layoutSettingStore.fold?'Expand':'Fold'">

    </component>
  </el-icon>
<!--面包屑-->
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>
      <a href="/">promotion management</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">


import useLayoutSettingStore from "@/store/modules/setting.ts";

// 折叠控制变量
const layoutSettingStore = useLayoutSettingStore()

const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold;
}

</script>



<style scoped lang="scss">

</style>
