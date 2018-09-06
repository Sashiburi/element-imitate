<template>
    <div class="merchant-container">
        <v-header></v-header>
        <v-tabs :tabs="tabs"></v-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './header/Header'
import Tabs from './header/Tabs.vue'
export default {
    name: 'Merchant',
    components: {
        'v-header': Header,
        'v-tabs': Tabs
    },
    data() {
        return {
            tabs: [
                {
                    id: 0,
                    name: '商品',
                    path: '/merchant/goods',
                },
                {
                    id: 1,
                    name: '评价',
                    path: '/merchant/ratings',
                },
                {
                    id: 2,
                    name: '商家',
                    path: '/merchant/seller',
                }
            ]
        }
    }
}
</script>
