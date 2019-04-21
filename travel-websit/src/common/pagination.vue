<template>
  <div class="block">
   <el-pagination
    background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      layout="total, prev, pager, next"
      :page-size = "pageSize"
      :total="totalNum">
    </el-pagination> 
  </div>
</template>
<script>
export default {
  props:['pageSize','totalNum','lists',"from"],
  data() {
    return {
      currentPage: 1,
      // lists: null,
      list: null,
    }
  },
  watch: {
    lists(newVal,oldVal) {
      console.log(newVal, oldVal)
    }
  },
  methods: {
     handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
      var mtop;
      var wtop = document.body.scrollTop;
      this.list = this.lists.slice((val - 1) * this.pageSize,val * this.pageSize);
      this.$emit("getList",this.list);
      if (this.from == 'index') {
        mtop = document.getElementsByClassName('travels-record')[0].offsetTop;
      }
      
      if (this.from == 'photography') {
        mtop = document.getElementsByClassName('main-left')[0].offsetTop;
      }
      
      let distance = mtop-wtop;
      if (distance !== 0) {
        window.scrollTo({ 
          top: mtop, 
          behavior: "smooth" 
        });
      }
    }
  },
}
</script>
<style lang="less">
 .block {
    padding: .1rem 0;
    float: right;
  }
  .number.active {
    background-color: #ff9d00 !important;
  }
  .number:hover {
    color:  #000 !important;
  }
</style>