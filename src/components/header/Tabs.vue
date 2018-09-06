<template>
    <div class="tabs-wrapper">
        <ul class="tabs">
            <li v-for="(item,i) in tabs" 
                class="tab-item"
                :key="`tab-item-${i}`">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    props: {
        tabs: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
    $line-color: rgba(7,17,27,0.1);
    .tabs-wrapper{
        @include border-1px($line-color);
        width: 100%;
        .tabs {
            display: flex;
            height: 40px;
            line-height: 40px;
            .tab-item{                
                flex-grow: 1;
                text-align: center;
                font-size: 14px;
                color: rgb(77,85,93);
                & > a.active{
                    color: rgb(240, 20, 20);
                }
            }
        }
    }
</style>
