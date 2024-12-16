<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo"  alt="logo">
    <p v-if="fold ? false: true" class="whitespace-nowrap">{{setting.title}}</p>
  </div>
</template>
<script setup lang="ts">
import setting from '@/setting.ts'
defineProps(['fold'])
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
    height: 30px;
    width: 40px;
  }
  p{
    font-size : $base-menu-title-fontSize;
    margin-left: 10px;
  }
}

</style>
