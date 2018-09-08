<template>
    <div class="header-container">
        <div class="content-wrapper">
            <div class="avator">
                <img class="icon" :src="seller.avatar"/>
            </div>            
            <div class="info">
                <div class="brand">
                    <span class="icon"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    <span>{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
                </div>
                <div class="support" v-if="seller.supports">
                    <span class="icon"></span>
                    <span class="description">{{seller.supports[0].description}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    seller: {
      type: Object
    }
  },
  data() {
      return {

      }
  },
  created() {
      console.log(this.seller);
  }

};
</script>

<style lang="scss" scoped>
$color-wihte: rgb(255,255,255);
.header-container {
    font-size: 0;
    .content-wrapper {  
        font-size: 0px;
        background-color: #000;
        padding: 24px 12px 18px 24px;
        .avator {
            display: inline-block;
            .icon {
                width: 64px;
                height: 64px;
                border-radius: 4px;
            }                      
        }
        .info {
            display: inline-block;
            color: $color-wihte;
            vertical-align: top;
            font-size: 12px;
            margin-left: 16px;
            .brand {
                margin: 2px 0px 8px 0;
                .icon {
                    display: inline-block;
                    vertical-align: top;
                    width: 30px;
                    height: 18px;
                    @include bg-image('brand');
                    background-size: 30px 18px;
                    background-repeat: no-repeat;
                }
                .name {
                    font-size: 16px;
                    line-height: 18px;
                    font-weight: bold;
                    margin-left: 6px;
                }
            }
            .description {
                margin-top: 8px;
                font-size: 12px;
                line-height: 12px;
            }
            .support {
                margin: 10px 0px 2px 0;
                .icon {
                    display: inline-block;
                    vertical-align: top;
                    width: 12px;
                    height: 12px;
                    @include bg-image('decrease_1');
                    background-size: 12px 12px;
                    background-repeat: no-repeat;
                }
                .description {
                    font-size: 10px;
                    line-height: 12px;
                    margin-left: 4px;
                }
            }
        }
  }
}
</style>
