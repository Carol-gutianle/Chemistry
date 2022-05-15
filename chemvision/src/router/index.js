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

    ]

    }

  ]
})
