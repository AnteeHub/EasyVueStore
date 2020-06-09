<template>
  <div class="page-container">
    <router-view class="tab-content" />
    <v-bottom-navigation
      class="tab-nav"
      :value="shiftIndex"
      background-color="blue"
      grow
      height="10vh"
      :hide-on-scroll="true"
      :fixed="true"
      :dark="true"
      color="cyan"
    >
      <v-btn to="/OrderList"
      >
        <span>订单详情</span>
        <v-icon>
          person_pin
        </v-icon>
      </v-btn>

      <v-btn to="/ShopMain">
        <span>点餐服务</span>
        <v-icon>
          person_pin
        </v-icon>
      </v-btn>

      <v-btn to="/Profiles">
        <span>自助服务</span>
        <v-icon>
          face
        </v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "tabView",
  data() {
    return {
      shiftIndex: 1
    };
  },
  mounted() {
    this.$router.push({ path: "/ShopMain" });

  }
};
</script>

<style lang="less" scoped>
.page-container {
  margin: 0 auto;
  height: 100vh;
  max-width: 800px;
  padding: 0;
}
.tab-content {
  height: 90vh;
  overflow: auto;
}

</style>