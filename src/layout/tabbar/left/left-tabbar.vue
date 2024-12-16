<template>
  <!--  扩展-->
  <el-icon style="margin-right: 20px" @click="changeIcon">
    <component :is="layoutSettingStore.fold?'Expand':'Fold'">

    </component>
  </el-icon>
  <!--面包屑-->
  <el-breadcrumb separator="/">
    <!--    <el-button type="primary" @click="getRoute">获取路由</el-button>-->
    <el-breadcrumb-item v-for="(item,index) in $route.matched" v-show="item.meta.icon" :key="item.path"
                        style="align-items: center">
      <!-- icon图标     -->
      <el-icon style="vertical-align: middle">
        <component :is="item.meta.icon"/>
      </el-icon>
      <!-- 标题渲染     -->
      <span style="margin: 0px 5px;vertical-align: middle">{{ item.meta.title }}</span>
    </el-breadcrumb-item>


    <!--    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>-->
    <!--    <el-breadcrumb-item>-->
    <!--      <a href="/">promotion management</a>-->
    <!--    </el-breadcrumb-item>-->
  </el-breadcrumb>
</template>

<script lang="ts" setup>


import useLayoutSettingStore from "@/store/modules/setting.ts";

import {useRoute} from "vue-router";

// 折叠控制变量
const layoutSettingStore = useLayoutSettingStore()

// 路由组建
const $route = useRoute();


const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold;
}

const getRoute = () => {
  console.log('route:', $route)
}

</script>


<style lang="scss" scoped>

</style>
