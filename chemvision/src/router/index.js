import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layout/layout.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path: '/',
      name:'layout',
      component: layout,
      redirect:'/upload_data',
      children:[
        {
          path: 'upload_data',
          name: 'upload_data',
          component: () => import("@/components/upload_data")
        },

        {
          path: 'show_result',
          name: 'show_result',
          component: () => import("@/components/show_result")
        },
        {
          path: 'background',
          name: 'background',
          component: () => import("@/components/background")
        },
        {
          path: 'reagent',
          name: 'reagent',
          component: () => import("@/components/reagent")
        },
        {
          path: 'goal',
          name: 'goal',
          component: () => import("@/components/goal")
        },
        {
          path: 'mechanism',
          name: 'mechanism',
          component: () => import("@/components/mechanism")
        },
        {
          path: 'process',
          name: 'process',
          component: () => import("@/components/process")
        },
    ]

    }

  ]
})
