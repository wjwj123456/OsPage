<template>
  <el-row>
    <el-col>
      <el-menu default-active="2" id="app-nav">
        <el-submenu index="1">
          <template slot="title" @click="$router.push('/server/list')"><i class="el-icon-message"></i>
            <span>服务器管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" :route="{path:'/server/list'}"> 服务器列表</el-menu-item>
            <el-menu-item index="1-2" :route="{path:'/server/add'}">添加服务器</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script type="text/babel">
  export default {
    props: {},
    data() {
      return {};
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="less" type="text/less">
  #app-nav {
    a {
      text-decoration: none;
      color: black;
      display: block;
    }
  }
</style>
