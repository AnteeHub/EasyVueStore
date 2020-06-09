import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Register from "@/components/RegisterPage"
import LoginMain from '@/components/LoginMain'
import ShopMain from '@/components/ShopList/ShopMain.vue'
import OrderList from '@/components/OrderList/OrderList.vue'
import StuffPage from '@/components/Stuff/StuffPage.vue'
import Admin from "@/components/Admin/Admin.vue";
import Profiles from '@/components/Profiles.vue'
import captchaInput from '@/components/register/CaptchaInput.vue'
import TabView from '@/components/TabView.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'App',
            component: App,
        }, {
            path: '/LoginMain',
            name: 'LoginMain',
            component: LoginMain
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register,
            captchaInput,
        },
        {
            path: '/StuffPage',
            name: 'StuffPage',
            component: StuffPage,
        },
        {
            path: '/Admin',
            name: 'Admini',
            component: Admin,
        },
        {
            path: '/TabView',
            name: 'TabView',
            component: TabView,
            children: [{
                    path: '/ShopMain',
                    name: 'ShopMain',
                    component: ShopMain
                },
                {
                    path: '/OrderList',
                    name: 'OrderList',
                    component: OrderList
                },
                {
                    path: '/Profiles',
                    name: 'Profiles',
                    component: Profiles,
                },
                // {
                //     path: '/RestList',
                //     name: 'RestList',
                //     component: RestList,
                // }
            ]
        },
    ]
})