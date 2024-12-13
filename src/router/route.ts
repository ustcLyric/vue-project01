// 对外暴露配置路由
export const constantRoute = [
  {
    // 1.登陆
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    // 2.首页
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
  }
]
