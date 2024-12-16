<template>
  <div>home</div>
</template>

<script lang="ts" setup>
import useUserStore from "@/store/modules/user.ts";
import {onMounted} from "vue";

let userStore = useUserStore();

onMounted(() => {
  userStore.userInfo()
})
</script>

<style scoped>

</style>
