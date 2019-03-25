import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/pages/Index'], resolve)
const Scenic = resolve => require(['@/pages/Scenic'], resolve)
const Foods = resolve => require(['@/pages/Foods'],resolve)
const Photography = resolve => require(['@/pages/Photography'], resolve)
const Strategy = resolve => require(['@/pages/Strategy'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/travels-record',
      redirect: '/index' 
    },
    {
      path: '/index',
      name: '首页',
      component: Index
    },
    {
      path: '/scenic',
      name: '景点大全',
      component: Scenic
    },
    {
      path: '/foods',
      name: '美食',
      component: Foods
    },
    {
      path: '/photography',
      name: '旅游摄影',
      component: Photography
    },
    {
      path: '/strategy',
      name: '旅游攻略',
      component: Strategy,
      // children: [
      //   {
          
      //   }
      // ]
    }
  ]
})
