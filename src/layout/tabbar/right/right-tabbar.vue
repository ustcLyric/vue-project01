<template>
  <el-button circle icon="Switch" size="default" type="primary"></el-button>
  <el-button circle icon="Sunny" size="default" type="primary"></el-button>
  <el-button circle icon="Setting" size="default" type="primary"></el-button>
  <img src="../../../../public/user-avator.png" style="width: 24px; height: 24px; margin: 0px 10px"/>
  <!--      下拉菜单-->
  <!--      <el-dropdown>-->
  <!--    <span class="el-dropdown-link">-->
  <!--      Admin-->
  <!--      <el-icon class="el-icon&#45;&#45;right">-->
  <!--        <arrow-down />-->
  <!--      </el-icon>-->
  <!--    </span>-->
  <!--        <template #dropdown>-->
  <!--          <el-dropdown-menu>-->
  <!--            <el-dropdown-item>Action 1</el-dropdown-item>-->
  <!--            <el-dropdown-item>Action 2</el-dropdown-item>-->
  <!--            <el-dropdown-item>Action 3</el-dropdown-item>-->
  <!--            <el-dropdown-item disabled>Action 4</el-dropdown-item>-->
  <!--            <el-dropdown-item divided>Action 5</el-dropdown-item>-->
  <!--          </el-dropdown-menu>-->
  <!--        </template>-->
  <!--      </el-dropdown>-->
</template>

<script lang="ts" setup>

import useUserStore from "@/store/modules/user.ts";
import {REMOVE_TOKEN} from "@/utils/token.ts";
import {useRouter} from "vue-router";

const userStore = useUserStore();
const $router = useRouter();
// 退出登录
const logout = () => {
  // 1.删除userStore信息
  userStore.removeUser()
  // 2.删除本地token信息
  REMOVE_TOKEN()
  // 3.通知服务器token作废

  // 4.跳转到登陆页面
  $router.push({path: "/login"})
}

</script>


<style lang="scss" scoped>

</style>
