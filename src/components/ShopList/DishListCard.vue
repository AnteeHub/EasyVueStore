<template>
  <v-card dense>
    <v-img
      :src="card.src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="120px"
    >
    </v-img>
    <div class="info-container">
      <div class="info-line">
        <span class="body-1 item-title">{{ card.title||'暂无数据' }}</span>
      </div>
      <div class="info-line">
        剩余:<span class="body-1 item-value">{{card.count||'暂无数据'}}</span>
      </div>
    </div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <span>￥<strong class="price"><slot name="price"><span style="color:grey">{{card.price||'暂无数据'}}</span></slot></strong></span>
      <v-spacer></v-spacer>
      <v-btn icon color="orange accent-4" :disabled="card.count<=0">
        <v-icon>add</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "DIshListCard",
  props: ["card"],
  data: () => ({}),
  methods: {}
};
</script>

<style lang="less" scoped>
.info-container {
  height: 90px;
  overflow: auto;
}
.info-line {
  text-align: center;
  padding: 2px;
  word-break: break-all;
  color: black;
}
.item-title{
    font-weight: 600;
}

.price {
  color: red;
}
</style>