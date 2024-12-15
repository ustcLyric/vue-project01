<template>
  <div class="layout-menu">
    <p>{{menuList}}</p>
    <template v-for="(item, index) in menuList" :key="item.path">
<!--      1.没有子路由-->
      <el-menu-item v-if="!item.children" :index="item.path">
        <template #title>
          <span>标&nbsp;</span>
          <span>{{item.meta.title}}</span>
        </template>
      </el-menu-item>
<!--      2.有且只有一个子路由 -->
      <el-menu-item v-if="item.children && item.children.length == 1" :index="item.children[0].path" >
        <template #title>
          <span>标&nbsp;</span>
          <span>{{item.children[0].meta.title}}</span>
        </template>
      </el-menu-item>
<!--&lt;!&ndash;      3.有多个子路由&ndash;&gt;-->
      <el-sub-menu  :index="item.children[0].path" >
        <template #title>
         <span>{{item.meta.title}}</span>
        </template>
<!--        <Menu :menuList="item.children"></Menu>-->
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
// 获取父组件传递过来的路由数组
import {Menu} from "@element-plus/icons-vue";

defineProps(['menuList'])
</script>


<style scoped lang="scss">
.layout-menu{
  color: white;
}

</style>
