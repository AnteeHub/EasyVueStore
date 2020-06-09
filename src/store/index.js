import Vue from 'Vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    strict: true,
    state: {
        // bought items
        cart: [],
        // ajax loader
        showLoader: false,
        // selected product
        product: {},
        // all products
        products: [{
            name: '1',
        }],
        // all manufacturers
        manufacturers: [],
        // 修改主模态框
        mainModal: false,
        isLogin: false,
        shopList: [{
            // ? 调试假数据实例
            // "infoList": [
            //   {
            //     "cateen": "自助餐厅",
            //     "queue": 5,
            //     "status": 1,
            //     "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337933&di=656ce8062459aea72d37322a05213e12&imgtype=0&src=http%3A%2F%2Fpic30.nipic.com%2F20130614%2F5808209_104031361176_2.jpg",
            //     "restAddr": "自助餐厅 四楼 117",
            //     "restName": "餐厅编号82264883",
            //     "restId": "8015234540",
            //     "dishList":[

            //     ],
            //   },
            //   {
            //     "cateen": "老二食堂",
            //     "queue": 11,
            //     "status": 2,
            //     "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337933&di=1432aba5cc2b5df7fa18f13b4064c857&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FYZvA2MwzrmkKH11FylbWsb2IQmXsJypXlhaxz_16A8yAABOhhsVlHNcTg9s0TLEuTK-l1dfmC-sNXFHV2eRvcw.jpg",
            //     "restAddr": "老二食堂 一楼 841",
            //     "restName": "餐厅编号80733676",
            //     "restId": "4463093532"
            //   },
            //   {
            //     "cateen": "教师餐厅",
            //     "queue": 48,
            //     "status": 2,
            //     "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337933&di=3093ae3ac75630098d16e573f8f13753&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140617%2F0042040789210938_b.jpg",
            //     "restAddr": "教师餐厅 七楼 258",
            //     "restName": "餐厅编号62552302",
            //     "restId": "2006478010"
            //   },
            //   {
            //     "cateen": "自助餐厅",
            //     "queue": 40,
            //     "status": 1,
            //     "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337931&di=15c3609763c92f67232c1c592c5d9464&imgtype=0&src=http%3A%2F%2Fimg1.soufunimg.com%2Fviewimage%2Fzxb%2F2013_05%2F02%2F94%2F56%2Fpic%2F007725966400%2F640x1500.jpg",
            //     "restAddr": "自助餐厅 三楼 392",
            //     "restName": "餐厅编号61228132",
            //     "restId": "9324462438"
            //   },
            //   {
            //     "cateen": "老二食堂",
            //     "queue": 13,
            //     "status": 1,
            //     "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337932&di=a8e6757b4f1b9e74db9c784331a2c525&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F03%2F45%2F16pic_345124_b.jpg",
            //     "restAddr": "老二食堂 五楼 365",
            //     "restName": "餐厅编号46735772",
            //     "restId": "1508406747"
            //   },
            //   {
            //     "cateen": "老一食堂",
            //     "queue": 42,
            //     "status": 2,
            //     "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337932&di=e5a27e56751def4fccc5fc8e534bc638&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd1%2F1611%2F77%2F69cb670f9cdadcb5.jpg_r_680x453x95_54bcbac0.jpg",
            //     "restAddr": "老一食堂 二楼 361",
            //     "restName": "餐厅编号71750013",
            //     "restId": "4376126845"
            //   },
            //   {
            //     "cateen": "老二食堂",
            //     "queue": 30,
            //     "status": 1,
            //     "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591069337933&di=35b704f6ca0afccf0a9ba1320dad6045&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20141013%2Fguibinxiuxishicanting_3216123.jpg",
            //     "restAddr": "老二食堂 二楼 152",
            //     "restName": "餐厅编号60182259",
            //     "restId": "8417161583"
            //   }
            // ]
        }]
    },
    // CART方法 
    mutations: {
        ADD_TO_CART(state, payload) {
            const { product } = payload;
            state.cart.push(product)
        },
        REMOVE_FROM_CART(state, payload) {
            const { productId } = payload
            state.cart = state.cart.filter(product => product._id !== productId)
        }
    }
})

export default store;