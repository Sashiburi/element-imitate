<template>
    <div class="home-container">
        <p class="home-msg">{{msg}}</p>
        <router-link to="/merchant">进入商家页面</router-link>    
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            msg: 'App 入口'
        }
    }
}
</script>

<style lang="scss" scoped>
    .home-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        .home-msg {
            text-align: center;
            margin-bottom: 25px;
        }
    }
</style>
