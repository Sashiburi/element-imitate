<template>
    <div class="seller-wrapper">{{title}}</div>
</template>

<script>
export default {
    name: 'Seller',
    data() {
        return {
            title: '商家页面'
        }
    },
    created() {
        this.$http.get('/api/seller').then((res) => {
            if(res.data.errno == 0){
                console.log(res.data.data);
            }           
        }).catch((error) => {
            console.log(error);
        })
    }
}
</script>
