<template>
  <v-container>
    <v-card class="page-container">
      <v-card-title class="d-flex justify-center"
        >自助点餐应用登录</v-card-title
      >
      <v-card-subtitle>V.1.0版本 作者：汤鸿程</v-card-subtitle>
      <v-form v-model="valid" ref="loginForm">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="loginForm.username"
                :rules="nameRules"
                label="用户名"
                required
                prepend-icon="person_pin"
                class="title"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="loginForm.password"
                :rules="passwordRules"
                label="密码"
                required
                prepend-icon="lock"
                :append-icon="visibility ? 'visibility_off' : 'visibility'"
                @click:append="() => (visibility = !visibility)"
                :type="visibility ? 'text' : 'password'"
                class="title"
              ></v-text-field>
            </v-col>
            <!-- <v-container>
              <v-row class="justify-center">
                <v-col span="4" offset="1" class="align-self-center">
                  <v-checkbox
                    v-model="loginForm.rememberPwd"
                    label="记住密码"
                  ></v-checkbox>
                </v-col>
                <v-col span="4" class="align-self-center">
                  <v-btn
                    text
                    large
                    color="primary"
                    class="font-weight-bold subtitle-1"
                  >
                    <span style="padding-bottom:6px;">忘记密码</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container> -->
            <v-container>
              <v-row>
                <v-col span="6">
                  <v-btn block color="success" @click="goRegister">注册</v-btn>
                </v-col>
                <v-col span="6">
                  <v-btn block color="primary" @click="submit">
                    登录
                    <v-icon right dark>send</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-row>
        </v-container>
      </v-form>

      <v-snackbar
        class="snack-container"
        v-model="snackSet.show"
        :color="snackSet.color"
      >
        <!-- <v-icon>{{ snackOpt.success.icon }}</v-icon> -->
        <span class="title">{{ snackSet.text }}</span>
        <v-btn text @click="snackSet.show = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-snackbar>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
import Mock from "mockjs";
import RegisterPageVue from "./RegisterPage.vue";
const Random = Mock.Random;

const snackOpt = {
  success: {
    color: "success",
    icon: "check_circle"
  },
  warning: {
    color: "warning",
    icon: "warning"
  },
  info: {
    color: "info",
    icon: "info"
  },
  error: {
    color: "error",
    icon: "error"
  },
  text: "登录成功"
};

// mock.js 调试
const checklogin = function(options) {
  let data = JSON.parse(options.body);
  console.log(data);
  if (data.username == "thc" && data.password == "123") {
    return {
      data: "登录成功.",
      success: true
    };
  } else {
    return {
      success: false,
      data: "用户名或密码错误!"
    };
  }
};

Mock.setup({
  timeout: "400-1000"
});

Mock.mock(/login/, "post", checklogin);
export default {
  data() {
    return {
      atype: "warning",
      snackSet: {
        show: false,
        text: "!",
        icon: "error",
        color: "error"
      },
      snackOpt: snackOpt,
      visibility: false,
      submitAlert: false,
      isLogin: false,
      // 初始化表单内容
      loginForm: {
        username: "",
        password: "",
        rememberPwd: false
      },
      valid: false,
      // 验证规则集
      nameRules: [
        v => !!v || "用户名不能为空!",
        v => (v && v.length >= 3) || "用户名长度不能小于3",
        v => !/[^A-Za-z0-9]/.test(v) || "用户名包含非法字符!"
      ],
      passwordRules: [v => !!v || "密码不能为空!"],
      select: null
    }; //end of data
  },
  methods: {
    toggleAlert() {
      this.submitAlert = !this.submitAlert;
    },
    showAlert() {
      this.submitAlert = true;
      setTimeout(() => {
        this.submitAlert = false;
      }, 3000);
    },
    submit() {
      let result = this.$refs.loginForm.validate();
      console.log(this.loginForm)
      console.log(this.loginForm.username)
      console.log(this.loginForm.password)
      console.log(result);

      if (this.loginForm.username == "thc" && this.loginForm.password == "123") {
        this.snackSet = {
          show: true,
          text: "登录成功!",
          icon: "check_circle",
          color: "success"
        };
      } else {
        this.snackSet = {
          show: true,
          text: "用户名或密码错误!",
          icon: "error",
          color: "error"
        };
        return;
      }

      setTimeout(() => {
        this.isLogin = true;
        this.goLoginSuceess();
      }, 1000);

      // this.$refs.form
      //   .validate()
      //   .then(result => {
      //     //使用validate()方法校验整个form对象
      //     console.log("form valid: ", result);
      //     if (!result) {
      //       throw result;
      //     }
      //   })
      //   .then(result => {
      //     console.log("1111");
      //     axios
      //       .post("http://www.fake/com/login", {
      //         username: this.validateForm.username,
      //         password: this.validateForm.password,
      //         type: "login"
      //       })
      //       .then(resonse => {
      //         let data = resonse.data;
      //         console.log(resonse.data);
      //         // 登录成功
      //         if (resonse.data.success) {
      //           this.alertProps = {
      //             alertOptions: alertOpt.success,
      //             content: data.data
      //           };
      //           this.isLogin = true;
      //         }
      //         // 登录失败
      //         else {
      //           this.alertProps = {
      //             alertOptions: alertOpt.error,
      //             content: data.data
      //           };
      //         }
      //         this.showAlert();
      //         console.log("登录" + this.isLogin);
      //         setTimeout(() => {
      //           console.log(1111);
      //           this.goLoginSuceess();
      //         }, 1000);
      //       })
      //       .catch(error => {
      //         console.log(error);
      //         this.alertProps = {
      //           alertOptions: alertOpt.error,
      //           content: error
      //         };
      //         console.log(alertOpt.error);
      //         this.showAlert();
      //       });
      //   })
      //   .catch(error => {
      //     console.log("error");
      //   });
    },
    // 跳转注册页面
    goRegister() {
      this.$emit("goregister", true);
    },
    // 登录成功向父组件返回消息
    goLoginSuceess() {
      this.$emit("loginSucc", this.isLogin);
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.page-container {
  padding: 20px;
  height: 100vh;
}
.snack-container {
  padding: 20px;
}
</style>
