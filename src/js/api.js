/**
 * Created by 吴昊 on 2016/12/5.
 */
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';
const apiHelper = require('aegis-api-helper');
const apiObj = {
  server: {
    list: {
      url: '/server/list'
    },
    get: {
      url: '/server',
      method: 'get'
    },
    save: {
      url: '/server',
      method: 'post',
      formData: true
    },
    show: {
      url: '/server/show',
      method: 'get'
    }
  },
   user: {
      register:{
        url:'/user/register',
        method:'get',

      }

   }

};
const $apiProxy = apiHelper.define(apiObj, {
  headers: { common: {} }
});
module.exports.api = $apiProxy;
