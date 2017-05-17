<template>
  <div>
    <el-row>
      <el-col :span="labelCols">IP</el-col>
      <el-col :span="contentCols" v-text="server.ip"></el-col>
    </el-row>
    <el-row>
      <el-col :span="labelCols">备注</el-col>
      <el-col :span="contentCols" v-text="server.note"></el-col>
    </el-row>
    <el-row>
      <el-col :span="labelCols">远程访问端口</el-col>
      <el-col :span="contentCols" v-text="server.remotePort"></el-col>
    </el-row>
    <el-row>
      <el-col :span="labelCols">内存</el-col>
      <el-col :span="contentCols" v-text="server.memory + ' GB'"></el-col>
    </el-row>
    <el-table :data="accounts">
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="realPassword" label="密码"></el-table-column>
    </el-table>
  </div>
</template>
<script type="text/babel">
  export default {
    props: {},
    data() {
      return {
        server: {
          memory: 0
        },
        labelCols: 6,
        contentCols: 18,
        accounts:[]
      };
    },
    mounted() {
      this.$api.server.show.request([this.$route.params.id])
        .then(({ data }) => {
          this.server = data.data.server;
          this.accounts = data.data.accounts;
        });
    },
    methods: {}
  }
</script>
<style lang="less" type="text/less">
</style>
