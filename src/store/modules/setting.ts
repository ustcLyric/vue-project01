// layout 配置相关仓库

 import {defineStore} from "pinia";

const useLayoutSettingStore = defineStore('SettingStore',{
  state:() => {
    return {
      fold:false,//菜单折叠还是收起

    }
  }
})


export default useLayoutSettingStore;
