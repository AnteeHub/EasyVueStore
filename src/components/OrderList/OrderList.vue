<template>
  <v-card>
    <v-container>
      <h1>订单详情</h1>
      <v-row justify="space-around">
        <!-- 开始时间 -->
        <v-col cols="6" sm="6" md="4">
          <v-menu
            ref="menuStart"
            v-model="menuStart"
            :close-on-content-click="false"
            :return-value.sync="dateStart"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateStart"
                label="开始时间"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="dateStart" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menuStart = false"
                >Cancel</v-btn
              >
              <v-btn text color="primary" @click="$refs.menuStart.save(dateStart)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
          <!-- 结束时间 --> </v-col
        ><v-col cols="6" sm="6" md="4">
          <v-menu
            ref="menuEnd"
            v-model="menuEnd"
            :close-on-content-click="false"
            :return-value.sync="dateEnd"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateEnd"
                label="结束时间"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="dateEnd" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menuEnd = false">取消</v-btn>
              <v-btn text color="primary" @click="$refs.menuEnd.save(dateEnd)"
                >确认时间</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col>
          <v-btn text block outlined color="info">
            查询订单
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <!-- 订单列表 -->
    <v-container>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, index) in listArr" :key="index">
          <v-expansion-panel-header justify="space-between" disable-icon-rotate
            ><template v-slot:actions>
              <v-icon :color="orderStatusSet(item.status).color">{{
                orderStatusSet(item.status).icon
              }}</v-icon>
            </template>
            <p class="text-left" style="max-width:25%;">
              金额:<span>{{ item.total || "暂无" }}</span>
            </p>
            <p class="text-center">
              时间:<span>{{ item.time || "暂无" }}</span>
            </p>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list>
              <v-list-item> 餐厅名:{{ item.restName || "暂无" }} </v-list-item>
              <v-list-item> 订单号:{{ item.orderId || "暂无" }} </v-list-item>
              <v-list-item>
                订单状态:{{ orderStatusSet(item.status).text }}
              </v-list-item>
            </v-list>
            <OrderListDetail>
              <template v-slot:cheader>
                <div>订单详情</div>
              </template>
              <template v-slot:ccontent>
                <v-simple-table :fixed-header="true" height="400">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">名称</th>
                        <th class="text-left">价格</th>
                        <th class="text-center">数量</th>
                        <th class="text-right">总价格</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(value, ind) in item.dishList" :key="ind">
                        <td class="text-left">
                          {{ value.dishName || "暂无" }}
                        </td>
                        <td class="text-left">
                          {{ value.dishPrice || "暂无" }}
                        </td>
                        <td class="text-center">
                          {{ value.dishCount || "暂无" }}
                        </td>
                        <td class="text-right">
                          {{ computedTotal(value.dishPrice, value.dishCount) }}
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
            </OrderListDetail>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-card>
</template>
<script>
import axios from "axios";
import Mock from "mockjs";
import OrderListDetail from "@/components/OrderList/OrderListDetail.vue";
// console.log(OrderItemSwiper);
const Random = Mock.Random;

let qr=Mock.mock({
  "success":true,
  orderId:()=>{
    return '158908229674410895';
  },
  "msg":"订单支付成功"
});
console.log(qr);


let dataArr = Mock.mock({
  "infoList|2-15": [
    {
      "day|1":["上午","下午"],
      time: function(){
        return Random.date();
      },
      total: () => {
        return Random.float(0, 100, 1, 2);
      },
      restName: () => {
        return Random.csentence(5, 10);
      },
      orderId: () => {
        return Random.string("number", 15);
      },
      "status|1-3": 1,
      "dishList|30-40": [
        {
          dishId: () => {
            return Random.string("number", 15);
          },
          dishName: () => {
            return Random.csentence(5, 10);
          },
          "dishCount|1-20": 5,
          dishPrice: () => {
            return Random.float(0, 100, 1, 2);
          }
        }
      ]
    }
  ]
});


export default {
  name: "OrderList",
  data() {
    return {
      dateStart: new Date().toISOString().substr(0, 10),
      dateEnd: new Date().toISOString().substr(0, 10),
      menuStart: false,
      menuEnd: false,
      value13: null,
      panel: "",
      listArr: dataArr.infoList
    };
  },
  methods: {
    toggle(panel) {
      this.panel = panel === this.panel ? "" : panel;
    },
    getOrderListByDate() {
      // console.log("fff");
      // alert("1111");
    },
    // 计算价格
    computedTotal(price, count) {
      if (!!price && !!count) {
        let result = parseFloat(price) * parseFloat(count);
        return result.toFixed(2);
      } else {
        return "暂无";
      }
    },
    orderStatusSet(status) {
      let result = status;

      let statusObj = [
        {
          icon: "access_time",
          text: "未支付",
          color: "info"
        },
        {
          icon: "done",
          text: "已支付",
          color: "success"
        },
        {
          icon: "cancel",
          text: "已关闭",
          color: "error"
        },
        {
          icon: "help",
          text: "暂无",
          color: "grey lighten-1"
        }
      ];

      if (!result || (result != 1 && result != 2 && result != 3)) {
        result = 4;
      }

      return statusObj[result-1];
    },
    orderStatusIcon(status) {
      let icon = [, "done", "cancel", "help"];
      let result = orderStatusSet(status);
      return icon[result];
    },
    orderStatusText(status) {
      let text = [, "已支付", "已关闭", "暂无"];
      let result = orderStatusSet(status);
      return text[result];
    }
  },
  computed: {},
  components: {
    OrderListDetail
  }
};
</script>

<style lang="less" scoped>
.auto-height {
  min-height: 100%;
  height: auto;
}
p {
  margin: 0;
  padding: 0;
  line-height: 2em;
}
</style>