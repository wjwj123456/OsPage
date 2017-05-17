<template>
  <div>
    <div id="banner"></div>
    <div id="main-content-wrap">
      <div id="main-content">
        <h>kkk</h>
        <left-nav id="left-nav"></left-nav>
        <div id="content-container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  import LeftNav from './server/left-nav.vue';

  export default {
    components: {
      LeftNav
    },
    data(){
      return {};
    },
    mounted(){
    },
    methods: {}
  }
</script>
<style lang="less" type="text/less">
  @nav-width: 285px;
  body {
    overflow: hidden;
  }

  div {
    box-sizing: border-box;
  }

  #banner {
    height: 85px;

  }

  #left-nav {
    width: @nav-width;
    position: absolute;
    z-index: 1;
  }

  #content-container {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: absolute;
    top: 0;
    z-index: 0;
    padding-left: @nav-width+10px;
    padding-right: 20px;
  }

  #main-content {
    position: relative;
    height: 100%;
  }

  #main-content-wrap {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding-top: 85px;
  }
</style>
