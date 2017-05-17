<template>
  <el-form label-width="200px" class="edit-form">
    <el-form-item label="服务器类型" required>
      <el-select v-model="form.type">
        <el-option v-for="item in typeList"
                   :key="item.value"
                   :value="item.value"
                   :label="item.label"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="服务器IP" required>
      <el-input v-model="form.ip"></el-input>
    </el-form-item>
    <el-form-item label="远程访问端口" required>
      <el-input-number v-model="form.remotePort"></el-input-number>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="form.note" type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="CPU">
      <el-input v-model="form.cpu"></el-input>
    </el-form-item>
    <el-form-item label="硬盘">
      <el-input v-model="form.hardDisk"></el-input>
    </el-form-item>
    <el-form-item label="内存">
      <el-input-number v-model="form.memory">
      </el-input-number>
      <span>GB</span>
    </el-form-item>
    <el-form-item>
      <el-button @click.native="save" type="primary">保存</el-button>
      <el-button @click.native="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script type="text/babel">
  import ElInputNumber from '../../../node_modules/element-ui/packages/input-number/src/input-number';
  import ElFormItem from '../../../node_modules/element-ui/packages/form/src/form-item';
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button';
  export default {
    components: { ElButton, ElFormItem, ElInputNumber }, data() {
      return {
        form: {
          hardDisk: '',
          type: 'managed_server',
          ip: '',
          remotePort: 22,
          note: '',
          cpu: '',
          memory: 0,

        },
        typeList: [
          { label: '托管服务器', value: 'managed_server' },
          { label: '云服务器', value: 'cloud_server' },
          { label: '虚拟空间', value: 'virtual_space' }
        ],

      };
    },
    mounted() {
      if (this.$route.params && this.$route.params.id) {
        this.$api.server.get.request([this.$route.params.id])
          .then(({ data }) => {
            this.form = data.data;
          });
      }
    },
    methods: {
      save() {
        this.$api.server.save.request(this.form).then(({ data }) => {

        });
      },
      cancel() {
        this.$router.go(-1);
      }
    }
  }
</script>
<style lang="less" type="text/less">
  .edit-form {
    width: 800px;
  }
</style>
