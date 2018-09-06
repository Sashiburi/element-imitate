import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Merchant from '@/components/Merchant.vue'
import Seller from '@/components/seller/Seller.vue'
import Goods from '@/components/goods/Goods.vue'
import Ratings from '@/components/ratings/Ratings.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/merchant',
      component: Merchant,
      children: [
        {
          path: '/',
          redirect: 'goods'
        },
        {
          path: 'seller',
          component: Seller
        },
        {
          path: 'goods',
          component: Goods
        },
        {
          path: 'ratings',
          component: Ratings
        }
      ]
    }
  ]
})
