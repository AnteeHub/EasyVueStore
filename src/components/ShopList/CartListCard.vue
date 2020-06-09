<template>
  <v-card class="mx-auto" max-width="344">
    <v-container class="d-flex justify-space-between" style="padding-bottom:0;">
      <span>{{ CardItem.restName }}</span
      ><strong class="price">总计: {{ CardItem.total }}元</strong>
    </v-container>
    <v-btn icon @click="show = !show">
      <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
    </v-btn>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-list>
          <v-list-item v-for="(value, ind) in CardItem.dishList" :key="ind">
            <v-list-item-avatar>
              <v-img :src="value.img"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="d-flex justify-space-between"
                ><span>{{ value.dishName }}</span>
                <strong class="price">{{ value.price }}元</strong>
              </v-list-item-title>
              <v-row>
                <v-col cols="2.5" class="d-flex align-self-center">
                  数量:
                </v-col>
                <v-col
                  cols="6"
                  class="d-flex justify-space-between align-self-center"
                >
                  <v-btn icon dense small>
                    <v-icon>remove</v-icon>
                  </v-btn>
                  <v-btn outlined disabled dense small>
                    <span style="color:black;font-weight:600;font-size:1.3em">{{
                      value.dishCount
                    }}</span>
                  </v-btn>
                  <v-btn icon dense small>
                    <v-icon>add</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions class="d-flex justify-space-between">
          <v-btn text large color="error">
            清空购物车
            <v-icon>delete</v-icon>
          </v-btn>
          <v-btn color="purple" text large @click="showOverlays">
            跳转支付
            <v-icon>
              payment
            </v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </v-expand-transition>
    <v-fade-transition>
      <v-overlay :value="payOverlays" absolute color="#036358">
        <v-col cols="12">
          <v-btn large block color="pink" @click.stop.prevent="closeOverlays">线下支付</v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn large block color="info" @click.stop.prevent="closeOverlays"
            >线上支付</v-btn
          >
        </v-col>
      </v-overlay>
    </v-fade-transition>
  </v-card>
</template>
<script>
export default {
    name:"CartListCard",
    props:["CardItem"],
    data:()=>({
        show: false,
        payOverlays:false,
    }),
    methods:{
        showOverlays(){
            this.payOverlays=true;
        },
        closeOverlays(){
            this.payOverlays=false;
        }
    }
};
</script>
<style lang="less" scoped>
</style>