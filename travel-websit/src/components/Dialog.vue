<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">登录</el-button>

    <el-dialog title="登录" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogVisible: false,
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    }
  },
  methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>
<style>
.el-dialog {
  width: 30%;
}
  .el-dialog__title {
    position: absolute;
    top: .266667rem /* 20/75 */;
  }
</style>