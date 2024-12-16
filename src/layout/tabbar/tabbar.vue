<template>
  <div class="tabbar">
    <div class="tabbar-left">
       <Left/>
    </div>
    <div class="tabbar-right">
      <Right/>
    </div>
  </div>
</template>
<script setup lang="ts">

import Right from './right/right-tabbar.vue'
import Left from './left/left-tabbar.vue'

</script>



<style scoped lang="scss">
.tabbar{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .tabbar-left{
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbar-right{
    display: flex;
    align-items: center;
  }
}
</style>
