import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入vuex
import store from "./store"

// 引入VueRouter
import router from "./router"

import { 
  Input, 
  Button, 
  Row, 
  Select, 
  Option, 
  DatePicker, 
  Table, 
  TableColumn,
  Pagination,
  Checkbox,
} from 'element-ui';
Vue.use(Input);
Vue.use(Button);
Vue.use(Row);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Checkbox);

new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate(){
    // 添加全局事件总线
    Vue.prototype.$bus = this
  },
  
}).$mount('#app')
