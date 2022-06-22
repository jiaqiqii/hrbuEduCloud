import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// 引入vuex
import store from "./store"

// 引入VueRouter
import router from "./router"

// 引入axios
import axios from "./axios"


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
  Message,
  Cascader,
  Form,
  FormItem,
  Col,
  Avatar,
  Descriptions,
  Tag,
  DescriptionsItem,
  Radio,
  CheckboxGroup
  // DescriptionItem,
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
Vue.use(Cascader);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Col);
Vue.use(Avatar);
Vue.use(Descriptions);
Vue.use(Tag);
Vue.use(DescriptionsItem);
Vue.use(Radio);
Vue.use(CheckboxGroup);

Vue.prototype.$message = Message;

new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate(){
    // 添加全局事件总线
    Vue.prototype.$bus = this;

    Vue.prototype.$axios = axios;

  },
  
}).$mount('#app')
