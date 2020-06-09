<template>
  <v-container>
    <v-card style="padding:20px;" class="page-container">
      <v-container>
        <v-card-title class="d-flex justify-space-around">
          <v-btn icon large @click="backToIndex">
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <h2>用户注册</h2>
        </v-card-title>
      </v-container>
      <v-form ref="form" :model="registerForm" :lazy-validation="lazy">
        <!-- 学工号 -->
        <v-col cols="12">
          <v-text-field
            v-model="registerForm.pid"
            label="学号/工号"
            hint="输入学号或者工号"
            persistent-hint
            required
            prepend-icon="person_pin"
            class="title"
            :rules="validateRules.pidRules"
          ></v-text-field>
        </v-col>

        <!-- 用户类型 -->
        <v-col cols="12">
          <v-select
            v-model="registerForm.type"
            :items="typeSelect"
            hint="选择您想注册的用户类型"
            persistent-hint
            required
            menu-props="auto"
            prepend-icon="map"
            single-line
            :rules="validateRules.typeRules"
          ></v-select>
        </v-col>

        <!-- 用户名 -->
        <v-col cols="12">
          <v-text-field
            v-model="registerForm.username"
            label="用户名"
            hint="用户名可以使用英文、数字的组合"
            persistent-hint
            required
            prepend-icon="person_pin"
            class="title"
            :rules="validateRules.usernameRules"
          ></v-text-field>
        </v-col>

        <!-- 密码 -->
        <v-col cols="12">
          <v-text-field
            v-model="registerForm.password"
            :rules="validateRules.passwordRules"
            label="密码"
            hint="密码长度不能少于3位"
            persistent-hint
            required
            prepend-icon="lock"
            :append-icon="visibility ? 'visibility_off' : 'visibility'"
            @click:append="() => (visibility = !visibility)"
            @blur="passwordBlur"
            :type="visibility ? 'text' : 'password'"
            class="title"
          ></v-text-field>
        </v-col>

        <!-- 确认密码 -->
        <v-col cols="12">
          <v-text-field
            v-model="registerForm.confirmpwd"
            :rules="validateRules.confirmpwdRules"
            ref="confirmpwd"
            label="确认密码"
            hint="重复输入一遍之前设置的密码"
            persistent-hint
            required
            prepend-icon="lock"
            :append-icon="visibility ? 'visibility_off' : 'visibility'"
            @click:append="() => (visibility = !visibility)"
            @blur="passwordBlur"
            :type="visibility ? 'text' : 'password'"
            class="title"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="registerForm.tel"
            :rules="validateRules.phoneRules"
            label="手机号"
            hint="仅支持中国大陆的11位手机号"
            persistent-hint
            required
            prepend-icon="smartphone"
            class="title"
          ></v-text-field>
        </v-col>
        <v-col span="12">
          <v-checkbox v-model="registerForm.isAgree" :rules="validateRules.argeeRules">
            <template v-slot:label>
              <div>
                我已阅读并同意遵守
                <v-btn
                  text
                  depressed
                  color="info"
                  @click="openUserDialog"
                  class="text-button subtitle-1"
                >《用户协议》</v-btn>
              </div>
            </template>
          </v-checkbox>
        </v-col>
        <v-container>
          <v-row>
            <v-col span="6">
              <v-btn block @click="reset">重置</v-btn>
            </v-col>
            <v-col span="6">
              <v-btn block color="success" @click="submit">注册提交</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-dialog v-model="userDialog" persistent max-width="80%">
        <v-card>
          <v-card-title class="headline">《用户协议》</v-card-title>
          <v-card-text>
            <div class="dialog-text">
              <h5>用户协议内容:</h5>
              <p>1.协议内容1</p>
              <p>2.协议内容2</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="closeUserDialog">关闭</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
import Mock from "mockjs";
const Random = Mock.Random;

// mock.js 调试
// 实例代码
let checkUserName = function(options) {
  let data = JSON.parse(options.body);
  console.log(data);
  if (data.username != "thc") {
    return {
      data: "姓名校验通过!",
      success: true
    };
  } else {
    return {
      success: false,
      data: "存在重复姓名!"
    };
  }
};

Mock.setup({
  timeout: 5000
});

Mock.mock(/getName/, "post", checkUserName);
export default {
  data() {
    return {
      usernameAvaliable: false,
      visibility: false,
      validating: false,
      regSucc: false,
      lazy: true,
      userDialog: false,
      // 用户选项
      typeSelect: [
        { text: "普通用户", value: 1 },
        { text: "餐厅管理", value: 2 },
        { text: "管理员", value: 3 }
      ],
      // 验证规则集
      validateRules: {
        pidRules: [
          val => !!val || "学号、工号不能为空",
          val => (!!val && val.length == 10) || "学号、工号格式有误!"
        ],
        typeRules: [val => !!val || "必须选择一个帐户类型"],
        usernameRules: [
          val => !!val || "用户名不能为空",
          val => !/[^A-Za-z0-9]/.test(val) || "用户名只能包含英文字母和数字",
          val => (!!val && val.length >= 3) || "用户名最小长度为3"
        ],
        passwordRules: [
          val => !!val || "密码不能为空",
          val => (!!val && val.length) >= 3 || "密码长度必须大于2位"
        ],
        confirmpwdRules: [
          val => !!val || "确认密码不能为空",
          val =>
            (!!val && val == this.registerForm.password) ||
            "两次输入的密码不一致!"
        ],
        phoneRules: [
          val => !!val || "手机号不能为空",
          val => /^[1][0-9]{10}$/.test(val) || "请输入有效的手机号码!"
        ],
        argeeRules: [val => !!val || "必须同意用户协议"]
      },

      registerForm: {
        pid: "",
        type: "",
        username: "",
        password: "",
        comfirmpwd: "",
        tel: "",
        captcha: "",
        isAgree: false
      }
    };
  },
  methods: {
    // 监测用户名
    checkUserName() {
      val => {
            let result = false;
            if (!!val) {
              (async () => {
                let hasName;
                let axiosObj = {
                  method: "axios",
                  type: "userName",
                  username: val
                };
                let a = await axios
                  .post("http://www.fake.com/getName", axiosObj)
                  // .then(response => {
                  //   // 请求成功处理

                  //   // todo:判断是否有重复
                  //   result = response.data.success;
                  //   console.log(response.data);
                  // })
                  // .catch(error => {
                  //   // 请求失败处理
                  //   console.log(error);
                  // })
                  .then(
                    resolve => {
                      return Promise.resolve(resolve.data);
                    },
                    reject => {
                      return Promise.resolve(resolve.data);
                    }
                    // return (!!val && result) || "用户名重复,请重新输入222";
                  );
                console.log("a=", a);
                return a.success;
              })();
            }
          }
    },

    // 关闭模态框
    closeUserDialog() {
      this.userDialog = false;
    },
    // 打开模态框
    openUserDialog() {
      this.userDialog = true;
    },
    // 输入密码失焦检测
    passwordBlur() {
      console.log("comfirm=", this.registerForm.confirmpwd);
      if (!!this.registerForm.confirmpwd) {
        this.$refs.confirmpwd.validate(); //使用validate()方法仅校验调用该方法的comfirm组件
      } else {
        //这里的comfirm是绑定在this对象中$refs属性里的
        return;
      }
    },
    //提交表单
    submit() {
      var result = this.validate();
      console.log(result);
    },
    // 重置表单
    reset() {
      this.$refs.form.reset();
      this.registerForm = {
        pid: "",
        type: "",
        username: "",
        password: "",
        comfirmpwd: "",
        tel: "",
        captcha: "",
        isAgree: false
      };
    },
    // 强制验证表单
    validate() {
      return this.$refs.form.validate();
    },
    //向父组件返回是否注册成功
    registerSucc() {
      this.$emit("regSuc", this.regSucc);
    },
    // 跳转登录页
    backToIndex() {
      this.$router.back(-1);
    }
  },
  components: {}
};
</script>
<style scoped>
.container {
  padding: 0;
}
.text-button {
  margin-bottom: 4px;
  text-align: left;
}
.dialog-text {
  text-align: left;
}
</style>
