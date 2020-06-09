<template>
  <mu-list-item class="cart-box">
    <mu-row style="width:100%;">
      <mu-col span="3" xl="4">
        <mu-container class="cart-box-img-container">
          <img :src="CartListItemOpt.img" alt class="cart-box-img" />
        </mu-container>
      </mu-col>
      <mu-col span="5" xl="4">
        <mu-list-item-content>
          <mu-list-item-title class="cart-box-title">{{CartListItemOpt.title}}</mu-list-item-title>
          <mu-list-item-sub-title>
            <span class="cart-box-content">{{CartListItemOpt.content}}</span>
            <br />
            <span class="cart-box-price">{{CartListItemOpt.price}}</span>
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-col>
      <mu-col span="4" xl="4">
        <mu-list-item-action>
          <StepCounter :cValue="CartListItemOpt.count"></StepCounter>
        </mu-list-item-action>
      </mu-col>
    </mu-row>
  </mu-list-item>
</template>
<script>
import StepCounter from "@/components/CartList/StepCounter";
export default {
  name: "cartListItem",
  props: ["CartListItemOpt"],
  data() {
    return {
      count: 0
    };
  },
  components: {
    StepCounter
  }
};
</script>

<style lang="less" scoped>

.mu-item{
  padding:0;
}

.cart-box-img-container {
  width: 80%;
  height: auto;
  padding:0;
  margin:0;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.cart-box-title {
  color: #212121;
  font-weight: 600;
  font-size: 2em;
}

.cart-box-price {
  color: #f44336;
  font-size: 1.5em;
  font-weight: 600;
}
</style>