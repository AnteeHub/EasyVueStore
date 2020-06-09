<template>
  <v-container class="page">
    <v-card outlined class="d-flex flex-column" style="border:none;">
      <v-card
        width="auto"
        outlined
        style="border:none;margin:0;padding:0;border-radius:none;"
      >
        <vue-qr class="qrcode" :text="qrcode" :size="500"></vue-qr>
        <v-overlay :absolute="true" :value="qrdisabled">
          <v-text class="title">二维码失效</v-text>
        </v-overlay>
      </v-card>
      <v-btn text block color="primary" @click="changeQR">
        <v-icon>autorenew</v-icon>
      </v-btn>
      <v-overlay :absolute="overlayAbs" :value="qrloading">
        <v-progress-circular indeterminate size="32"></v-progress-circular>
      </v-overlay>
    </v-card>
    <v-carousel
      :cycle="false"
      hide-delimiters
      height="220"
      :show-arrows="false"
      progress
    >
      <v-carousel-item v-for="(value, key) in cardInfoList" :key="key">
        <CarouselInfoCard :cardInfo="value"></CarouselInfoCard>
      </v-carousel-item>
    </v-carousel>
    <v-card outlined style="margin-top:20px;">
      <p>
        系统功能
      </p>
      <v-row style="padding:0 8px">
        <v-col cols="6" md="4"
          ><v-btn depressed block color="error">
            退出登陆
          </v-btn></v-col
        >
        <v-col cols="6" md="4">
          <v-btn depressed block color="info">
            我的信息
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import Mock from "mockjs";
import VueQr from "vue-qr";
import CarouselInfoCard from "@/components/Profiles/CarouselInfoCard";
import totp from "totp.js";

console.log(totp.randomKey());

const Random = Mock.Random;

const getQRcode = function(options) {
  let data = JSON.parse(options.body);
  let url = "www.fake.com/" + Math.random(1, 5);
  console.log(data);
  return {
    success: true,
    url: url
  };
};

Mock.setup({
  timeout: "400-1000"
});
Mock.mock(/getQRcode/, "post", getQRcode);

export default {
  name: "profilesPage",
  data() {
    return {
      qrBasic: "fake.com",
      qrcode: "github:AnteeHub",
      urlPath: "",
      qrloading: false,
      qrdisabled: false,
      overlayAbs: true,
      errorQRcode: "Error",
      active: 0,
      cardInfoList: [
        {
          shopName: "餐厅1",
          orderId: "111",
          infoType: "取餐号码",
          infoContent: "01"
        },
        {
          shopName: "餐厅2",
          orderId: "33333",
          infoType: "取餐号码",
          infoContent: "02"
        },
        {
          shopName: "餐厅3",
          orderId: "5555",
          infoType: "取餐号码",
          infoContent: "33"
        }
      ]
    };
  },
  methods: {
    async changeQR() {
      console.log("change");
      let timestamp = new Date().getTime();
      this.qrloading = true;
      let qrcode;
      await axios
        .post("http://www.fake/com/getQRcode", {
          user: "thc",
          time: timestamp
        })
        .then(response => {
          let resultData = response.data;
          if (resultData.success) {
            this.qrcode = resultData.url;
          } else {
            this.qrcode = errorQRcode;
          }
          this.qrloading = false;
        })
        .catch(error => {
          console.log(error);
        });
      console.log(this.qrcode);
    },
    changeActive(index) {
      this.active = index;
    }
  },
  beforeMount() {
    this.changeQR();
  },
  mounted() {},
  components: {
    VueQr,
    CarouselInfoCard
  }
};
</script>

<style lang="less" scoped>
.page {
  background-color: #fff;
}

#qr {
  max-height: 180px;
  canvas {
    padding-left: 15px;
  }
}

// 二维码
.qrcode {
  display: block;
  max-width: 250px;
  max-height: 45%;
  margin: 0 auto;
  img {
    width: 100%;
    // height:100%;
    height: auto;
  }
}
</style>