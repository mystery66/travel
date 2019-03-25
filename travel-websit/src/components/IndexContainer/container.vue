<template>
  <div class="container">
    <div class="strategy-recommendation">
      <left-slide></left-slide>
    </div>
    <div class="travels-record">
      <a herf="#travels-record">
        <right-slide :record="record"></right-slide>
      </a>
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
    </div>
    
  </div>
</template>
<script>
import LeftSlide from'./leftSlide';
import RightSlide from './rightSlide';
import { getRecord } from '@/api/data.js';
import { getRecommend } from '@/api/data.js';
export default {
  components: {
    LeftSlide,
    RightSlide
  },
  data() {
    return {
      records: [],
      record: [],
      recommend: null,
      currentPage: 1,
      totalNum: 0,
      pageSize: 6,
    }
  },
  created() {
    getRecord().then(res => {
      this.records = res.data.data.record;
      this.totalNum = this.records.length;
      this.record = this.records.slice(0,this.pageSize);
     
    })
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
      this.record = this.records.slice((val - 1) * this.pageSize,val * this.pageSize);
      window.location.hash = "#travels-record";
    }
  },
}
</script>
<style>
  .container {
    display: flex;
    justify-content: space-between;
    font-size: 0.16rem;
    padding: 0 2.2rem;
  }
  .strategy-recommendation {
    width: 2.3122rem;
  }
  .travels-record {
    width: 6.225rem;
  }
  .block {
    padding: .1rem 0;
    float: right;
  }
  .number.active {
    background-color: #ff9d00 !important;
  }
  .number:hover {
    color:  #ff9d00 !important;
  }
</style>