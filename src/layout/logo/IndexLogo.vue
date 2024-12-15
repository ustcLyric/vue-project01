<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo"  alt="logo">
    <p >{{setting.title}}</p>
  </div>
</template>
<script setup lang="ts">
import setting from '@/setting.ts'
</script>

<style scoped lang="scss">
.logo{
  width: 100%;
  height: $base-menu-logo-heigth;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  img{
    height: 40px;
    width: 40px;
  }
  p{
    font-size : $base-menu-title-fontSize;
    margin-left: 10px;
  }
}

</style>
