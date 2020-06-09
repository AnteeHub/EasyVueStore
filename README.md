# 基于Vue的自助点餐系统（前端部分）
###### 作者：汤鸿程


## 相关说明

初次运行需要部署node环境并安装依赖项

原始项目由前端和后端两部分构建，后端部分主要为前端部分提供数据api接口。本项目仅包含最小版本的前端视图逻辑。

项目通过Mock.js来拦截Axios的请求并模拟数据返回，返回结果为在Mock中自行设置的假数据。Axios部分可以通过类ajax库进行替换。

同样因为缺少后端服务，所以这一版本删掉了与数据请求校验、个人信息页面请求、模拟二维码支付过程的一些方法，仅留下假数据接口。


## 项目依赖库
建议在项目环境下直接使用npm intall完成依赖项的安装
- Node.js
- NPM
- Vue.2.6+版本
- Vuex
- Vuetify UI框架
- MockJs
- Axios
- Vue-qr

## 文件目录
```
.
├── README.md                                   项目说明文件
├── package.json                                项目node相关的配置文件
└── src                                         项目源代码
    ├── assets                                  静态文件目录
    ├── main.js                                 Vue主文件入口，挂载了Vue的主方法
    ├── App.vue                                 Vue组件的入口，挂载了Vue.app的主组件
    ├── plugins                                 包含Vuetify的挂载目录
    ├── store                                   Vuex的挂载目录（相关方法已经省略）
    ├── router                                  vue router的挂载目录
    └── components                              Vue组件目录
        ├── CartList                            购物车相关组件
        ├── OrderList                           订单页相关组件
        ├── Profiles                            个人页相关组件
        ├── register                            登录页相关组件
        ├── ShopList                            点餐页相关组件
        ├── LoginMain.vue                       登录页面
        ├── RegisterPage.vue                    注册页面
        └── TabView.vue                         底部导航页面父组件

```

## Build Setup

``` bash
# 按照设置自动下载所有依赖项
npm install

# 服务器默认运行于 localhost:8080
npm run dev

# 最小版本编译
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```





###### 其他参考文档可见

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
