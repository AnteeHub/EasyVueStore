<template>
  <v-container>
    <v-card-title>统计信息</v-card-title>
    <v-row>
      <v-col xl="6" lg="6" md="6" sm="6" xs="12" cols="12">
        <v-card>
          <v-card-title> 今日订单状态</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row class="subtitle-1">
              <v-col class="text-left info-title" cols="6" xs="8"
                >进行中数量：</v-col
              >
              <v-col class="text-left info-value tag-blue" cols="4">12</v-col>
            </v-row>
            <v-row class="subtitle-1">
              <v-col class="text-left info-title" cols="6" xs="8"
                >已完成订单数：</v-col
              >
              <v-col class="text-left info-value tag-green" cols="4">26</v-col>
            </v-row>
            <v-row class="subtitle-1">
              <v-col class="text-left info-title" cols="6" xs="8"
                >总计订单数：</v-col
              >
              <v-col class="text-left info-value" cols="4">56</v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="6" xs="12" cols="12">
        <v-card>
          <v-card-title>销量统计</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row class="subtitle-1">
              <v-col class="text-left info-title" cols="6" xs="8"
                >本月结算订单：</v-col
              >
              <v-col class="text-left info-value" cols="4">12 个</v-col>
            </v-row>
            <v-row class="subtitle-1">
              <v-col class="text-left info-title" cols="6" xs="8"
                >本月收入金额：</v-col
              >
              <v-col class="text-left info-value tag-red" cols="4"
                >26.60 元</v-col
              >
            </v-row>
            <v-row class="subtitle-1">
              <v-col class="text-left info-title" cols="6" xs="8"
                >总金额数：</v-col
              >
              <v-col class="text-left info-value tag-red" cols="4"
                >56.60 元</v-col
              >
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="6" xs="12" cols="12">
        <v-card>
          <v-card-title>订单管理</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row class="subtitle-1">
              <v-col class="text-left info-title" cols="6" xs="8"
                >订单详情：</v-col
              >
              <v-col class="text-left info-value" cols="6"
                ><v-btn dark block color="info" cols="4"
                  >点击进入订单管理</v-btn
                ></v-col
              >
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="6" xs="12" cols="12">
        <v-card>
          <v-card-title>支付管理</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row class="subtitle-1">
              <v-container>
                <v-btn dark block color="pink" cols="6">二维码支付</v-btn>
              </v-container>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <!-- <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Click Me
        </v-btn> -->
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          二维码支付
        </v-card-title>
  <v-card-text>
    <v-col class="text-left info-title" cols="12" xs="8"
                >订单状态：
                <span class="info-value tag-green">已支付</span></v-col
              >
              <v-col class="text-left" cols="12"
                >订单号：<span class="info-value">158908229674410895</span></v-col
              >
  </v-card-text>
        <v-card-text>
          <v-container>
            <v-alert type="success">
              支付成功.
            </v-alert>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  name: "StasticPage",
  data() {
    return {
      dialog: true
    };
  }
};
</script>

<style lang="less" scoped>
.info-value {
  color: black;
  font-weight: 600;
}
.tag-blue {
  color: blue;
}
.tag-green {
  color: green;
}
.tag-red {
  color: red;
}
.tag-orange {
  color: orange;
}
</style>