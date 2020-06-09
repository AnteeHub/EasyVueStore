<template>
  <v-card height="100%" width="100%" :light="true" outlined>
    <v-subheader>取餐信息</v-subheader>
    <v-list dense class="subtitle-1">
      <v-list-item class="info-list-item d-flex justify-space-between">
        <div class="info-item">{{ cardInfo.shopName }}</div>
        <div class="info-item">
          <span>{{ cardInfo.infoType }}</span>
          <span
            ><strong class="title">
              {{ cardInfo.infoContent }}
            </strong></span
          >
        </div>
      </v-list-item>
      <v-list-item class="info-list-item d-flex justify-space-between"
        ><div class="info-item">{{ "订单号: " + cardInfo.orderId }}</div>
        <div class="info-item">当前排队人数：200人</div></v-list-item
      >
    </v-list>
    <v-divider></v-divider>
    <v-card-actions>
      <v-row>
        <v-col cols="6">
          <v-btn text block color="#01579b">更新</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn text block color="#e65100">取餐</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "CarouselInfoCard",
  props: ["cardInfo"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.v-card {
  box-shadow: none;
  -webkit-box-shadow: none;
}
.carousel-card {
  border: 2px dashed #e0e0e0;
}
.carousel-card-header {
  text-align: left;
  border-bottom: 2px dashed #e0e0e0;
}
.info-list-item {
  .info-item {
    width: 50%;
  }
  :nth-child(2n-1) {
    text-align: left;
  }
  :nth-child(2n) {
    text-align: right;
  }
}
</style>