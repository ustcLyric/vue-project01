// 对外暴露配置路由

export const constantRoute = [
  {
    // 1.登陆
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta:{
      "title":"登陆",
    },

  },
  {
    // 2.登陆成功展示
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    children:[
      {
        path:'/home',
        component: () => import('@/views/home/index.vue'),
        name:'home',
        meta:{
          "title":"首页",
        },
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta:{
      "title":"登陆",
    },

  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any1',
    meta:{
      "title":"登陆",
    },
    children:[
      {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      name: 'any2',
      meta:{"title":"登陆",},
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any3',
        meta:{"title":"登陆",},
      },
    ],

  }
]
