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
              <el-button class="login_buton" size="default" type="primary" @click="login" :loading="loading" >提交</el-button>
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
import {reactive, ref} from "vue";
import useUserStore from "@/store/modules/user.ts";
import {useRouter} from "vue-router";
import {ElNotification} from "element-plus";
const userStore = useUserStore();

const $router = useRouter()

// 登陆加在

let loading = ref<boolean>(false)

// 收集数据
const loginForm = reactive({
  username: 'admin',
  password: '111111',
})


// 方法
const login = async () => {
  loading.value = true
  // 1.请求成功
  try {
    await userStore.userLogin(loginForm)
    loading.value = false
    // 编程式导航跳转到数据首页
    $router.push({ path: '/' });
    // 登陆成功提示登录信息
    ElNotification({
      type: 'success',
      message:'登陆成功'
    })
  }catch (error) {
    loading.value = false
    // 2.请求失败
    ElNotification({
      type: 'error',
      message:(error as Error).message,
    })
    console.log(error )
  }
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
