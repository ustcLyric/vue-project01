<template>
  <div class="layout-container">
    <!-- 顶部导航  -->
    <div class="layout-tabble"></div>
    <!-- 左侧菜单  -->
    <div class="layout-slider">
    <IndexLogo></IndexLogo>
<!--     滚动组件-->
      <el-scrollbar  class="scrollbar">
<!--        菜单组件-->
        <el-menu background-color="black" text-color="white">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 内容区域  -->
    <div class="layout-main">
      <p style="height: 100000px">18282`28</p>
    </div>
  </div>
</template>

<script setup lang="ts">

// import IndexLogo from "@/layout/logo/IndexLogo.vue";
import IndexLogo from "@/layout/logo/IndexLogo.vue";
import Menu from "@/layout/menu/index.vue"
import useUserStore from "@/store/modules/user.ts";

const userStore = useUserStore();

</script>

<style scoped lang="scss">

 .layout-container {
  width: 100%;
  height: 100vh;
  background: red;
  .layout-slider{
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background ;
    .scrollbar{
      width: 100%;
      height: calc(100vh - $base-menu-logo-heigth);
      color: white;
    }
  }
   .layout-tabble{
     width: calc(100% - $base-menu-width);
     height: $base-tabble-height;
     position: fixed;
     background: white ;
     left: $base-menu-width;
     top:0px;
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
   }

}
</style>
