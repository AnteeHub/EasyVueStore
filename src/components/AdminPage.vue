<template>
  <mu-container>
    <mu-row class="page-container">
      <mu-col span="3" class="left-panel-container">
        <div class="left-panel">
          <div class="left-panel-header">
            <div>
              <h1>后台管理页</h1>
              <mu-avatar :size="100">
                <img src="../assets/logo.png" />
              </mu-avatar>
              <h2>店铺名1111</h2>
              <p>当前状态:11111</p>
            </div>
          </div>
          <mu-list>
            <mu-list-item button :ripple="false">
              <mu-list-item-action>
                <mu-icon value="inbox"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>消费统计</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false">
              <mu-list-item-action>
                <mu-icon value="grade"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>订单列表</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false">
              <mu-list-item-action>
                <mu-icon value="send"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>菜单管理</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false">
              <mu-list-item-action>
                <mu-icon value="drafts"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>餐厅信息</mu-list-item-title>
            </mu-list-item>
          </mu-list>
          <mu-divider></mu-divider>
          <mu-container>
            <h4>时间</h4>
            <p>2020年12月12日 12:12:12</p>
          </mu-container>
        </div>
      </mu-col>
      <mu-col span="9" class="right-panel-container">
        <div class="right-panel">
          <header class="right-panel-header">
            <h1>消费统计</h1>
          </header>
          <mu-row gutter class="right-panel-content">
            <mu-col
              justify-content="center"
              align-items="center"
              class="card-wrapper"
              span="12"
              sm="6"
            >
              <dic class="card-info">
                <h2 class="card-info-title">当日订单</h2>
                <p>
                  <span>当前订单:</span>
                  <span>100</span>
                </p>
                <p>
                  <span>今日订单:</span>
                  <span>500</span>
                </p>
              </dic>
            </mu-col>
            <mu-col
              justify-content="center"
              align-items="center"
              class="card-wrapper"
              span="12"
              sm="6"
            >
              <div class="card-info">
                <h2 class="card-info-title">月度消费</h2>
                <p>
                  <span>当前订单:</span>
                  <span>100</span>
                </p>
                <p>
                  <span>今日订单:</span>
                  <span>500</span>
                </p>
              </div>
            </mu-col>
            <mu-col
              justify-content="center"
              align-items="center"
              class="card-wrapper"
              span="12"
              sm="6"
            >
              <div class="card-info">
                <h2 class="card-info-title">月度消费</h2>
                <p>
                  <span>当前订单:</span>
                  <span>100</span>
                </p>
                <p>
                  <span>今日订单:</span>
                  <span>500</span>
                </p>
              </div>
            </mu-col>
            <mu-col
              justify-content="center"
              align-items="center"
              class="card-wrapper"
              span="12"
              sm="6"
            >
              <div class="card-info">
                <p>
                  <span>当前订单:</span>
                  <span>100</span>
                </p>
                <p>
                  <span>今日订单:</span>
                  <span>500</span>
                </p>
              </div>
            </mu-col>
          </mu-row>
        </div>
      </mu-col>
    </mu-row>
  </mu-container>
</template>


<script>
export default {
  name: "adminPage",
  data: () => {
    return {};
  }
};
</script>


<style lang="less" scoped>
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}

.page-container {
  height: 100%;
  width: 100%;
  background-color: #f7f6fe;
}

.left-panel-container,
.right-panel-container {
  height: 100%;
}
.left-panel {
  border-radius: 0 20px 20px 0;
  background-color: #ff9f24;
  // border:2px solid blue;
  color: #f7f6fe;
  height: 100%;
}

.mu-item,
.mu-item * {
  color: #f7f6fe;
}

.right-panel {
  height: 100%;
  color: #1e223d;
}

.right-panel-header {
  height: 5%;
}

.right-panel-content {
  padding: 10px;
  height: 95%;
}
.card-wrapper {
  // margin-top:10px;
  height: 40%;
}

.card-info {
  border-radius: 10px;
  background-color: #fff;
  width: 85%;
  margin: 0 auto;
  height: 100%;
  // padding:5%;
  display: block;
  color: #1e223d;
}

.page-header {
  position: fixed;
  top: 0;
  left: 50%;
}
</style>