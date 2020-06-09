<template>
  <v-container>
    <v-container v-for="(value, index) in items.cartList" :key="index">
      <CardListCard :CardItem="value"></CardListCard>
    </v-container>
  </v-container>
</template>


<script>
import CardListCard from "@/components/ShopList/CartListCard.vue"
import Mock from "mockjs";
const Random = Mock.Random;
let restArr = Mock.mock({
  "cartList|1-3": [
    {
      restId: () => {
        return Random.string("number", 10);
      },
      restName: () => {
        return "餐厅名称" + Random.string("number", 4);
      },
      total: () => {
        return Random.float(1, 100, 1, 2);
      },
      "dishList|1-3": [
        {
          dishId: () => {
            return Random.string("number", 10);
          },
          dishName: () => {
            return "餐品名称" + Random.string("number", 5);
          },
          "dishCount|1-10": 1,
          price: () => {
            return Random.float(0, 100, 1, 2);
          },
          "img|1": [
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2935184512,3938511824&fm=26&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591082243247&di=b3e49075f202277aee43a4b3577fd4b2&imgtype=0&src=http%3A%2F%2Fpic65.nipic.com%2Ffile%2F20150429%2F20309624_193036762000_2.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591082243246&di=9d494001575545e86b68ac50c302ac57&imgtype=0&src=http%3A%2F%2Fimg004.hc360.cn%2Fhb%2FMTQ2Nzk0MzYxNzU4NDE3NjA4MzkwODI%3D.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591082243244&di=d2b6272504490d1437fcff41d65e2e94&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fy4%2FM01%2FDE%2F91%2FwKhQiFUJ7QCEAfQ2AAAAAKCJYpA623.jpg"
          ]
        }
      ]
    }
  ],
  success: true
});

export default {
  name: "Cart",
  data: () => ({
    items: restArr
  }),
  components: {
    CardListCard
  }
};
</script>

<style lang="less" scoped>
.price {
  color: red;
}
</style>