<template>
    <div class="merchant-container">
        <v-header :seller="seller"></v-header>
        <v-tabs :tabs="tabs"></v-tabs>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
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
            ],
            seller: {}
        }
    },
    beforeCreate() {
        this.getSeller = (callback)=> {
            this.$http.get('/api/seller').then((res) => {
                callback(res.data);          
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    created() {
        let vm = this;
        vm.getSeller((res)=>{
            if(res.errno === 0){
                vm.seller = res.data;
                console.log(res.data);               
            } 
        });
    }
}
</script>
