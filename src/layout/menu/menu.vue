<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <!--      1.没有子路由-->
    <el-menu-item v-if="!item.children && !item.meta.hidden" :index="item.path" @click="goRoute">
      <el-icon>
        <component :is="item.meta.icon"/>
      </el-icon>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <!--      2.有且只有一个子路由 -->
    <el-menu-item v-if="item.children && item.children.length == 1  && !item.children[0].meta.hidden"
                  :index="item.children[0].path" @click="goRoute">
      <el-icon>
        <component :is="item.children[0].meta.icon"/>
      </el-icon>
      <template #title>
        <span>{{ item.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
    <!--&lt;!&ndash;      3.有多个子路由&ndash;&gt;-->
    <el-sub-menu v-if="item.children && item.children.length > 1 && !item.meta.hidden" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"/>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>

import {useRouter} from "vue-router";
// 获取路由器对象
const $router = useRouter();

// 获取父组件传递过来的路由数组
defineProps(['menuList'])


// 实现路由跳转

const goRoute = (vc: any) => {
  console.log(vc);
  console.log($router);
  $router.push(vc.index)
}
</script>

<script lang="ts">
export default {
  name: 'Menu',
}
</script>{

'


<style lang="scss" scoped>
.layout-menu {
  color: white;
}

</style>
