<template>
  <div class="layout-container">
    <!-- 顶部导航  -->
    <div class="layout-tabbar" :class="{fold:LayoutSettingStore.fold ? true : false}">
      <Tabbar></Tabbar>
    </div>
    <!-- 左侧菜单  -->
    <div class="layout-slider" :class="{fold:LayoutSettingStore.fold ? true : false}">
    <IndexLogo :fold="LayoutSettingStore.fold"></IndexLogo>
<!--     滚动组件-->
      <el-scrollbar  class="scrollbar">
<!--        菜单组件-->
        <el-menu background-color="black" :collapse="LayoutSettingStore.fold ? true : false" text-color="white" :default-active="$route.path">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 内容区域  -->
    <div class="layout-main" :class="{fold:LayoutSettingStore.fold ? true : false}">
     <Main/>
    </div>
  </div>
</template>

<script setup lang="ts">

// import IndexLogo from "@/layout/logo/IndexLogo.vue";
import IndexLogo from "@/layout/logo/IndexLogo.vue";
import Menu from "@/layout/menu/menu.vue"
import Main from "@/layout/main/main.vue"
import Tabbar from "@/layout/tabbar/tabbar.vue"
import useUserStore from "@/store/modules/user.ts";
import {useRouter} from "vue-router";
import useLayoutSettingStore from "@/store/modules/setting.ts";

const userStore = useUserStore();
const LayoutSettingStore = useLayoutSettingStore();
const $route = useRouter();
</script>

<style scoped lang="scss">

 .layout-container {
  width: 100%;
  height: 100vh;
  background: red;
  .layout-slider{
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;
    .scrollbar{
      width: 100%;
      height: calc(100vh - $base-menu-logo-heigth);
      color: white;
      .el-menu{
        border-right: none;
      }
    }
    &.fold{
      width: $base-menu-width-min;
    }
  }
   .layout-tabbar{
     width: calc(100vw - $base-menu-width);
     height: $base-tabble-height;
     position: fixed;
     background: white ;
     left: $base-menu-width;
     top:0px;
     transition: all 0.3s;
     &.fold{
       width: calc(100% - $base-menu-width-min);
       left: $base-menu-width-min;
     }
   }
   .layout-main{
     position: absolute;
     width: calc(100% - $base-menu-width);
     height: calc(100vh - $base-tabble-height);
     background: blue;
     left: $base-menu-width;
     top: $base-tabble-height;
     padding: 20px;
     overflow: auto;
     transition: all 0.3s;
     &.fold{
       width: calc(100vw - $base-menu-width-min);
       left: $base-menu-width-min;

     }
   }

}
</style>
