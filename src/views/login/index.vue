<template>
  <div class="login-container">
    <el-form>
      <el-row>
        <el-col :span="12" :xs="0"></el-col>
        <el-col :span="12" :xs="24">
          <el-form class="login-form" label-width="auto">
            <h1> Hello，please login</h1>
            <el-form-item>
              <el-input v-model="loginForm.username" :prefix-icon="User" type="text"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="loginForm.password" :prefix-icon="Lock" show-password
                        type="password"></el-input>
            </el-form-item>
            <el-row></el-row>
            <el-form-item>
              <el-button class="login_buton" size="default" type="primary" @click="login">提交</el-button>
              <!--              <el-button type="primary" @click="">取消</el-button>-->
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {User} from '@element-plus/icons-vue'
import {Lock} from '@element-plus/icons-vue'
import {reactive} from "vue";
import useUserStore from "@/store/modules/user.ts";

let userStore = useUserStore();

// 收集数据
const loginForm = reactive({
  username: 'admin',
  password: '111111',
})


// 方法
const login = async () => {
  // 1.请求成功
  let result = await userStore.userLogin(loginForm)
  console.log("result:", result)
  // 2.请求失败
}

</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  //background-color: red;
  background: url("@/assets/images/background.jpg") no-repeat;
  //background-size: cover;
  .login-form {
    position: relative;
    width: 60%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 50px;

    h1 {
      color: white;
      font-size: 40px;
    }

    .login_buton {
      width: 100%;
    }
  }

}


</style>
