<template>
  <v-container class="grey lighten-5">
    <h4 class="text-left">餐厅名</h4>
    <v-row gutters>
      <template v-for="(item, index) in cards">
        <v-col :key="index" cols="6">
          <DishListCard :card="item"></DishListCard>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<script>
import DishListCard from "@/components/ShopList/DishListCard.vue";
import Mock from "mockjs";
const Random = Mock.Random;
let dataArr = Mock.mock({
  "dishList|2-15": [
    {
      title: () => {
        return "餐品名" + Random.string("number", 5);
      },
      "src|1": [
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2935184512,3938511824&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591082243247&di=b3e49075f202277aee43a4b3577fd4b2&imgtype=0&src=http%3A%2F%2Fpic65.nipic.com%2Ffile%2F20150429%2F20309624_193036762000_2.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591082243244&di=d2b6272504490d1437fcff41d65e2e94&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fy4%2FM01%2FDE%2F91%2FwKhQiFUJ7QCEAfQ2AAAAAKCJYpA623.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591082243246&di=9d494001575545e86b68ac50c302ac57&imgtype=0&src=http%3A%2F%2Fimg004.hc360.cn%2Fhb%2FMTQ2Nzk0MzYxNzU4NDE3NjA4MzkwODI%3D.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1205636056,3864830298&fm=11&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591252163034&di=dcd5609bca0f4da66f0019198278f05b&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20141121%2Fdahuicai_3475375.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591252156012&di=3d3c159720b34dcd20d1675758fc2e45&imgtype=0&src=http%3A%2F%2Fp1.meituan.net%2Fdeal%2Fa48bf0183ae284609edcf9cd209bd73589368.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591252156012&di=d9ceb80a3ed19cec96789d315bb4f0eb&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn15%2F290%2Fw1134h756%2F20180630%2F2ea3-hespqrx5073843.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591252159908&di=78233dc0f9345437c7f615cb46cc006b&imgtype=0&src=http%3A%2F%2Fcp1.douguo.com%2Fupload%2Fcaiku%2F2%2F4%2Fd%2Fyuan_24ca21d484062773154c1e627f83cf9d.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2229826450,2819013961&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2041448936,1299766795&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591252230007&di=749a8d592ba59a2906247cb0ab55baf3&imgtype=0&src=http%3A%2F%2Fp1.pstatp.com%2Flarge%2F39a200023b8e6dbba897"
      ],
      price: () => {
        return Random.float(0, 100, 0, 3);
      },
      "count|0-100": 50
    }
  ]
});

export default {
  name: "DishList",
  data: () => ({
    cards: dataArr.dishList
  }),
  methods: {},
  components: {
    DishListCard
  },
  mounted(){
    console.log("dishList");
  }
};
</script>