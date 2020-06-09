<template>
  <v-card max-width="500" class="main-card">
    <v-card-actions>
      <v-btn :disabled="step === 1" v-if="step !== 1" text @click="step--">
        <v-icon>
          arrow_back_ios
        </v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
        点餐车
        <v-icon>
          cshopping_cart
        </v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        :color="currentSubtitleColor"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <RestList :autoCmpColor="currentSubtitleColor"></RestList>
      </v-window-item>

      <v-window-item :value="2">
        <DishList></DishList>
      </v-window-item>

      <v-window-item :value="3">
        <CartList></CartList>
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>
  </v-card>
</template>


<script>
import RestList from "@/components/ShopList/RestList.vue";
import StepCounter from "@/components/ShopList/StepCounter.vue";
import DishList from "@/components/ShopList/DishList.vue";
import CartList from "@/components/ShopList/CartList.vue";
export default {
  name:"ShopMain",
  data: () => ({
    step: 1
  }),
  methods: {},
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "餐厅列表";
        case 2:
          return "餐品列表";
        default:
          return "完成点餐";
      }
    },
    currentSubtitleColor() {
      switch (this.step) {
        case 1:
          return "blue";
        case 2:
          return "yellow";
        default:
          return "red";
      }
    }
  },
  components: {
    RestList,
    DishList,
    CartList
  }
};
</script>

<style lang="less" scoped>
.main-card{
  overflow:auto;
}
</style>