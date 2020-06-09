<template>
  <v-app>
    <div id="app" class="page-container">
      <router-view @loginSucc="loginSuccess($event)" @goregister="goRegister()" />
      <v-dialog
      v-model="getMainModal"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="black"
        dark
      >
        <v-card-text>
          载入页面中,请稍候...
          <v-progress-linear
            indeterminate
            color="green"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    </div>
  </v-app>
</template>

<script>
import LoginMain from "@/components/LoginMain";
import Register from "@/components/RegisterPage";
import TabView from "@/components/TabView";

export default {
  name: "App",
  data() {
    return {
      
    };
  },
  methods: {
    loginSuccess(flag) {
      if (flag) {
        this.$router.push({ path: "/TabView" });
      }
    },
    goRegister() {
      this.$router.push({ path: "/Register" });
    },
    goLogin() {
      console.log("gologin");
      this.$router.push({ path: "/LoginMain" });
    }
  },
  computed:{
    getMainModal(){
      // console.log(this);
      // return this;
      // return this.$store.state.mainModal;
    },
    getLoginStatus(){
      console.log("islogin=",this.$store.state.isLogin)
      return this.$store.state.isLogin;
    }
  },
  created() {
    this.goLogin();
  },
  components: {
    // LoginMain,
    // Register,
    // TabView,
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  // margin: 0 auto;
  position: relative;
  height: 100%;
  width: 100%;
  // max-width: 1000px;
}
.page-container {
  padding: 0;
  margin: 0 auto;
  height: 100%;
  // max-width: 800px;
  .container {
    // height: 90%;
    // overflow: auto;
    // margin: 0 auto;
  }
}
</style>
