<template>
  <v-card class="mx-auto" height="100%" width="100%">
    <v-app-bar color="deep-purple accent-4" dark>
      <v-row class="d-flex align-items-center">
        <v-col cols="2"
          ><v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon
        ></v-col>
        <v-col cols="6" offset="1">
          <v-toolbar-title
            ><v-container
              ><strong>餐厅管理</strong></v-container
            ></v-toolbar-title
          >
        </v-col>
      </v-row>
    </v-app-bar>

    <!-- 侧边栏组件 -->
    <v-navigation-drawer
      v-model="drawer"
      :mobile-break-point="1000"
      absolute
      :bottom="false"
      temporary>
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>addchart</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>餐厅统计</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-icon>list</v-icon>
              订单管理</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-icon>fastfood</v-icon>餐品管理</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-icon>tune</v-icon>餐厅设置</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container>
      <!-- 主屏组件 -->
      <v-window v-model="windowTab">
        <v-window-item :value="1">
          <!-- 统计信息页组件 -->
          <StasticPage></StasticPage>
        </v-window-item>
        <v-window-item :value="2">
          <!-- 订单详情页组件 -->
          <OrderInfoList></OrderInfoList>
        </v-window-item>
        <v-window-item :value="3">
          <!-- 餐品管理页组件 -->
          <DishOperate></DishOperate>
        </v-window-item>
        <v-window-item :value="4">
          <!-- 餐厅管理页组件 -->
          <RestOption></RestOption>
        </v-window-item>
      </v-window>
    </v-container>
  </v-card>
</template>
<script>
import StasticPage from "@/components/Stuff/StasticPage.vue";
// import OrderInfoList from "@/components/Stuff/OrderInfoList.vue";
// import DishOperate from "@/components/Stuff/DishOperate.vue";
// import RestOption from "@/components/Stuff/RestOption.vue";
export default {
  name: "StuffPage",
  data: () => ({
    drawer: false,
    group: null,
    windowTab: 1
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  },
  components: { StasticPage}
};
</script>
<style lang="less" scoped>
</style>