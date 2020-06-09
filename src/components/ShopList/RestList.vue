<template>
  <v-card-text>
    <v-row>
      <v-autocomplete
        v-model="autoComplete"
        :items="items"
        outlined
        dense
        chips
        small-chips
        label="查找餐厅"
        :color="autoCmpColor"
      ></v-autocomplete>
      <v-btn icon large tile :color="autoCmpColor">
        <v-icon>
          search
        </v-icon>
      </v-btn>
    </v-row>
    <v-container>
      <div v-if="!items.length">暂无内容</div>
      <v-carousel
        hide-delimiters
        progress
        :cycle="false"
        height="auto"
        v-if="items.length"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <div>
            <h4>
              餐厅详情列表:
              <strong>{{ i + 1 + "/" + items.length }}</strong>
            </h4>
            <ShopCard>
              <template v-slot:img>
                <v-img :src="item.img" height="150"></v-img>
                <!-- <v-sheet height="150" color="yellow"></v-sheet> -->
              </template>
              <template v-slot:title>
                <div class="text-center" style="width:100%;">
                  {{ item.restName || "暂无信息" }}
                </div>
              </template>
              <template v-slot:addr>
                <div class="text-center" style="width:100%;">
                  地址：{{ item.restAddr || "暂无信息" }}
                </div>
              </template>
              <template v-slot:info-1-value>
                {{ item.queue || "暂无信息" }}
              </template>
              <template v-slot:info-2-value>
                <span>{{
                  getRestStatus(item.status).text || "暂无信息2"
                }}</span>
              </template>
              <template v-slot:useableOverlays>
                <v-overlay :value="item.status==1" absolute color="#000">
                  <v-col cols="12">
                    <v-card>餐厅暂时不提供服务</v-card>
                  </v-col>
                </v-overlay>
              </template>
            </ShopCard>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-card-text>
</template>
<script>
import ShopCard from "@/components/ShopList/ShopCard.vue";
import Mock from "mockjs";
const Random = Mock.Random;
let dataArr = Mock.mock({
  "infoList|5-20": [
    {
      "cateen|1": [
        "老一食堂",
        "新一食堂",
        "老二食堂",
        "新二食堂",
        "自助餐厅",
        "教师餐厅",
        "圆顶食堂"
      ],
      restAddr: function() {
        return (
          this.cateen +
          " " +
          Random.cword("一二三四五") +
          "楼 " +
          Random.string("number", 3)
        );
      },
      restName: () => {
        return "餐厅编号" + Random.string("number", 8);
      },
      restId: () => {
        return Random.string("number", 10);
      },
      "queue|0-50": 0,
      "status|1-3": 1,
      "img|1": [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337933&di=e773572a28ab8627183eabf556abb19d&imgtype=0&src=http%3A%2F%2Fbjcache.leju.com%2Fzxjiaju%2Fzx_pic%2F20180509%2Fa0%2F67%2Fa670d844ebf06b368575a111aee6397c.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337933&di=1432aba5cc2b5df7fa18f13b4064c857&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FYZvA2MwzrmkKH11FylbWsb2IQmXsJypXlhaxz_16A8yAABOhhsVlHNcTg9s0TLEuTK-l1dfmC-sNXFHV2eRvcw.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337933&di=3093ae3ac75630098d16e573f8f13753&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140617%2F0042040789210938_b.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337933&di=656ce8062459aea72d37322a05213e12&imgtype=0&src=http%3A%2F%2Fpic30.nipic.com%2F20130614%2F5808209_104031361176_2.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337933&di=5ec2a453282251fb8f1ba3b67939be65&imgtype=0&src=http%3A%2F%2Fpic1.shejiben.com%2Fcase%2F2015%2F07%2F27%2F20150727162042-5a633f0a.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337933&di=1a7b281ebdb52d4fd7883245894baa80&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2Fxgt%2Fs%2F00%2F14632422591860729.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337933&di=35b704f6ca0afccf0a9ba1320dad6045&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20141013%2Fguibinxiuxishicanting_3216123.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337932&di=e5a27e56751def4fccc5fc8e534bc638&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd1%2F1611%2F77%2F69cb670f9cdadcb5.jpg_r_680x453x95_54bcbac0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337932&di=bb742fdf2a2b615dce2c936e005eae19&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20160328%2Fwuxingjijiudianzhongcanting_6063506.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337932&di=a8e6757b4f1b9e74db9c784331a2c525&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F03%2F45%2F16pic_345124_b.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337931&di=15c3609763c92f67232c1c592c5d9464&imgtype=0&src=http%3A%2F%2Fimg1.soufunimg.com%2Fviewimage%2Fzxb%2F2013_05%2F02%2F94%2F56%2Fpic%2F007725966400%2F640x1500.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337930&di=b9d0cfc68ac3553aa602441d42d29e42&imgtype=0&src=http%3A%2F%2Fwww.myvacation.cn%2Fattchment%2Fuploadimg%2F20100419%2F12716657778614375.jpg"
      ]
    }
  ]
});
export default {
  name: "RestList",
  data() {
    return {
      autoComplete: ["111", "222"],
      items: dataArr.infoList
    };
  },
  props: ["autoCmpColor"],
  methods: {
    getRestStatus(status) {
      let setStatus = parseInt(status);
      let result = [
        {
          text: "休息中",
          color: "grey lighten-1"
        },
        {
          text: "营业中",
          color: "success"
        },
        {
          text: "暂无信息",
          color: "grey darken-4"
        }
      ];
      if (setStatus < 1 || setStatus > 3) {
        setStatus = 3;
      }
      return result[setStatus - 1];
    }
  },
  components: {
    ShopCard
  }
};
</script>