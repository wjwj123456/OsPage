/**
 * Created by wuhao on 2017/4/28.
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
  path: '/server/list',
  component: resolve => {
    System.import('../components/server/server-list.vue').then(comp => resolve(comp));
  }
},
  {
  path: '/server/add',
  component: resolve => {
    System.import('../components/server/server-edit.vue').then(comp => resolve(comp));
  }
},
  {
  path: '/server/edit/:id',
  component: resolve => {
    System.import('../components/server/server-edit.vue').then(comp => resolve(comp));
  }
},
  {
  path: '/server/show/:id',
  component: resolve => {
    System.import('../components/server/server-show.vue').then(comp => resolve(comp));
  },
},
  {
    path: '/user/register',
    component: resolve => {
      System.import('../components/user/register.vue').then(comp => resolve(comp));
    }
  }
  ];

export default new Router({
  routes
});
