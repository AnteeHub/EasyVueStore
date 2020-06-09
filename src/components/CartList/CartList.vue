<template>
  <mu-container style="overflow-x:hidden;">
    <mu-sub-header>
      <span class="cart-top-title">购物车</span>
      <span>{{nowDate}}</span>
    </mu-sub-header>
    <mu-paper :z-depth="1" class="demo-list-wrap">
      <mu-divider inset></mu-divider>
      <mu-list textline="three-line" v-for="(value,key) in CartListData" :key="value.shipNo">
        <mu-divider inset v-if="key"></mu-divider>
        <mu-sub-header inset>{{value.shop}}{{key}}</mu-sub-header>
        <CartListItem v-for="(citem,key) in value.shopItem" :CartListItemOpt="citem" :key="key"></CartListItem>
      </mu-list>
    </mu-paper>
  </mu-container>
</template>

<script>
import CartListItem from "@/components/CartList/CartListItem";

let getDate = () => {
  let WeekDays = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ];
  let date = new Date();
  let yy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  let day = WeekDays[date.getDay()];
  console.log(date);
  console.log(yy, mm, dd);
  console.log(`${yy}年${mm}月${dd}日   ${day}`);
  return `${yy}年${mm}月${dd}日   ${day}`;
};

export default {
  name: "CartList",
  data() {
    return {
      nowDate: getDate(),
      CartListData: [
        {
          shopNo: "123",
          shop: "A shop",
          shopItem: [
            {
              title: "title1111",
              content: "content11111",
              price: "155130$",
              count: 100,
              img:
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2410538485,1803277935&fm=11&gp=0.jpg"
            },
            {
              title: "title22222",
              content: "content2222",
              price: "136$",
              count: 99,
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587985954876&di=06efaaac1031cb12ab1d59b4485c5070&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_lfill%2Cw_300%2Ch_200%2Cg_faces%2Fimages%2F20200324%2F7f9e4d23e19846a5a97f90e62d30db86.jpeg"
            },
            {
              title: "title33333",
              content: "content33333",
              price: "9999$",
              count: 1,
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587986422127&di=0368cf68e0d51cbc512508608ac6731e&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2832070009%2C2267584876%26fm%3D214%26gp%3D0.jpg"
            },
            {
              title: "title44444",
              content: "content44444",
              price: "10$",
              count: 4,
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587986435446&di=7e8e6830e8435ea62ecea10e135f1b95&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1786710545%2C564379847%26fm%3D214%26gp%3D0.jpg"
            }
          ]
        },
        {
          shopNo: "2223",
          shop: "BBBBB shop",
          shopItem: [
            {
              title: "ttttttt",
              content: "ccccccccc",
              price: "999999999$",
              count: 17,
              img:
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2410538485,1803277935&fm=11&gp=0.jpg"
            },
            {
              title: "HHHHH",
              content: "RRRRRRR",
              price: "1531$",
              count: 6,
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587985954876&di=06efaaac1031cb12ab1d59b4485c5070&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_lfill%2Cw_300%2Ch_200%2Cg_faces%2Fimages%2F20200324%2F7f9e4d23e19846a5a97f90e62d30db86.jpeg"
            },
            {
              title: "FFFF",
              content: "HHHHHHH",
              price: "234234$",
              count: 9,
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587986422127&di=0368cf68e0d51cbc512508608ac6731e&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2832070009%2C2267584876%26fm%3D214%26gp%3D0.jpg"
            },
            {
              title: "7777",
              content: "66666",
              price: "15$",
              count: 15,
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587986435446&di=7e8e6830e8435ea62ecea10e135f1b95&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1786710545%2C564379847%26fm%3D214%26gp%3D0.jpg"
            }
          ]
        },
        {
          shopNo: "1223",
          shop: "CCCC shop",
          shopItem: [
            {
              title: "title1111",
              content: "content11111",
              price: "155130$",
              count: 22,
              img:
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2410538485,1803277935&fm=11&gp=0.jpg"
            },
            {
              title: "title22222",
              content: "content2222",
              price: "136$",
              count: 81,
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587985954876&di=06efaaac1031cb12ab1d59b4485c5070&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_lfill%2Cw_300%2Ch_200%2Cg_faces%2Fimages%2F20200324%2F7f9e4d23e19846a5a97f90e62d30db86.jpeg"
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {},
  components: { CartListItem }
};
</script>
<style scoped>
.cart-top-title {
  margin-right: 5%;
  font-weight: 800;
  font-size: 1.5em;
}
.demo-list-wrap {
  width: 100%;
}
.mu-list {
  list-style: none;
}
</style>