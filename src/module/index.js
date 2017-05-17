/**
 * Created by wuhao on 2016/12/6.
 */
import 'element-ui/lib/theme-default/index.css';
import Element from 'element-ui';
import Vue from 'vue';
import App from '../components/app.vue';
import router from './router';
import Api from '../js/api_plugin';

Vue.use(Api);
Vue.use(Element);
export default new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
});
