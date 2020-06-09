<template>
  <v-card class="mx-auto" height="100%" width="100%">
    <v-app-bar color="teal darken-3" dark>
      <v-row class="d-flex align-items-center">
        <v-col cols="2"
          ><v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon
        ></v-col>
        <v-col cols="6" offset="1">
          <v-toolbar-title
            ><v-container
              ><strong>系统管理</strong></v-container
            ></v-toolbar-title
          >
        </v-col>
      </v-row>
    </v-app-bar>

    <!-- 侧边栏组件 -->
    <!-- <v-navigation-drawer
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
              <v-icon>person</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>用户帐户管理</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-icon>person_add</v-icon>
              用户注册管理</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-icon>fastfood</v-icon>餐厅信息管理</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-icon>add_business</v-icon>餐厅注册管理</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->
    <v-container>
      <!-- 主屏组件 -->
      <v-window v-model="windowTab" style="height:80vh;overflow:auto;">
        <v-window-item :value="1">
          <!-- 统计信息页组件 -->
          <UserInfoDetail></UserInfoDetail>
        </v-window-item>
        <v-window-item :value="2">
          <!-- 订单详情页组件 -->
          <!-- <OrderInfoList></OrderInfoList> -->
        </v-window-item>
        <v-window-item :value="3">
          <!-- 餐品管理页组件 -->
          <!-- <DishOperate></DishOperate> -->
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
import UserInfoDetail from "@/components/Admin/UserInfoDetail.vue";
// import OrderInfoList from "@/components/Stuff/OrderInfoList.vue";
// import DishOperate from "@/components/Stuff/DishOperate.vue";
// import RestOption from "@/components/Stuff/RestOption.vue";
export default {
  name: "Admin",
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
  components: { UserInfoDetail }
};
</script>
<style lang="less" scoped>
</style>