<template>
  <div>
    <el-table :data="list">
      <el-table-column prop="ip" label="IP"></el-table-column>
      <el-table-column prop="remotePort" label="远程访问端口"></el-table-column>
      <el-table-column prop="osType" label="操作系统"></el-table-column>
      <el-table-column inline-template label="内存">
        <span :class="" v-text="row.memory?(row.memory + ' GB'):'-'"></span>
      </el-table-column>
      <el-table-column prop="note" label="备注"></el-table-column>
      <el-table-column inline-template label="操作">
        <div>
          <el-button @click.native="edit(row.id)" type="primary" icon="edit" size="small"></el-button>
          <el-button @click.native="remove(row.id)" type="danger" icon="delete" size="small"></el-button>
          <el-button @click.native="showInfo(row.id)" type="info" icon="document" size="small"></el-button>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>
<script type="text/babel">
  import ElTable from '../../../node_modules/element-ui/packages/table/src/table';
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button';
  export default {
    components: { ElButton, ElTable }, props: {},
    data() {
      return {
        list: []
      };
    },
    mounted() {
      console.log(1234);
      this.loadData();
      console.log(this.list);

    },
    methods: {
      loadData(){
        this.$api.server.list.request().then(({ data }) => {
          this.list = data.data.list;
        });
      },
      edit(id) {
        this.$router.push({ path: '/server/edit/' + id });
      },
      remove(id) {

      },
      showInfo(id) {
        this.$router.push('/server/show/'+id);
      }
    }
  }
</script>
<style lang="less" type="text/less">
</style>
