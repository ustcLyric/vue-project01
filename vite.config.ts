import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// 引入 svg需要用的插件
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
import * as path from "node:path";
import {viteMockServe} from "vite-plugin-mock";

// https://vite.dev/config/
export default defineConfig(({command}) => {

  return {
    plugins: [
      vue(),
      vueDevTools(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        enable: command === 'serve'
      }),

    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       javascriptEnabled: true,
    //       additionalData: '@import "./src/styles/variable.scss";',
    //     },
    //   },
    // },
  }

})
