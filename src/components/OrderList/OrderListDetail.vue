<template>
  <v-container>
    <v-dialog v-model="dialogShow" width="500" scrollable>
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" text dark v-on="on" block>
          订单详情
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          <slot name="cheader"></slot>
        </v-card-title>
        
        <v-card-text style="padding:0;margin:0;">
          <slot name="ccontent"></slot>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="card-cation-area">
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogShow = false">
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "OrderListDetail",
  data() {
    return {
      dialogShow: false,
    };
  }
};
</script>
<style lang="less" scoped>
  .card-cation-area{
    background-color:#fff;
  }
</style>