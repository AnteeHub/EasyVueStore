<template>
  <v-container>
    <v-card-title>用户帐户管理
      <v-spacer></v-spacer>
      <v-btn outlined text>
        刷新
      </v-btn></v-card-title
    >
    <v-container>
      <v-simple-table :fixed-header="true" height="70%">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">用户编号</th>
              <th class="text-left">用户名</th>
              <th class="text-left">手机号</th>
              <th class="text-left">学号/工号</th>
              <th class="text-left">帐户类型</th>
              <th class="text-center">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, ind) in item.infoList" :key="ind">
              <td class="text-left">
                {{ value.userid || "暂无" }}
              </td>
              <td class="text-left">
                {{ value.account || "暂无" }}
              </td>
              <td class="text-left">
                {{ value.phone || "暂无" }}
              </td>
              <td class="text-left">
                {{ value.pid || "暂无" }}
              </td>
              <td class="text-left">
                {{ getUserType(value.type) || "暂无" }}
              </td>
              <td class="text-center">
                <v-btn color="error">
                  <v-icon>delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-container>
</template>
<script>
import OrderListDetail from "@/components/OrderList/OrderListDetail.vue";
import Mock from "mockjs";
const Random = Mock.Random;
let dataArr = Mock.mock({
  "infoList|16-35": [
    {
      userid: () => {
        return Random.string("number", 10);
      },
      account: () => {
        return Random.word(3, 10);
      },
      phone: () => {
        return "1" + Random.string("number", 10);
      },
      pid: () => {
        return "1" + Random.string("number", 9);
      },
      "type|1-3": 1
    }
  ]
});
export default {
  name: "StasticPage",
  data() {
    return {
      item: dataArr
    };
  },
  methods: {
    getUserType(type) {
      let result = parseInt(type);
      let userString = ["普通用户", "点餐管理", "系统管理员", "暂无"];
      if (result < 1 || result > 3) {
        result = 3;
      }
      return userString[result - 1];
    }
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