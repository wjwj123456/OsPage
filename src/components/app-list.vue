<template>
  <div>
    <el-table :data="list">
      <el-table-column prop="name"></el-table-column>
      <el-table-column prop="type"></el-table-column>
    </el-table>
  </div>
</template>
<script type="text/babel">
  export default {
    props: {},
    data() {
      return {
        list: []
      };
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="less" type="text/less">
</style>
