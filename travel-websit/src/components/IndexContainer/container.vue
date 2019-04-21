<template>
  <div class="container">
    <div class="strategy-recommendation">
      <left-slide></left-slide>
    </div>
    <div class="travels-record">
      <a herf="#travels-record">
        <right-slide :record="record"></right-slide>
      </a>
      <pagination
        from="index" 
        :pageSize="pageSize" 
        :totalNum="totalNum"
        :lists = "records" 
        v-on:getList="getList">
      </pagination>
      
    </div>
    
  </div>
</template>
<script>
import LeftSlide from'./leftSlide';
import RightSlide from './rightSlide';
import Pagination from '@/common/pagination'
import { getRecord } from '@/api/data.js';
import { getRecommend } from '@/api/data.js';
export default {
  components: {
    LeftSlide,
    RightSlide,
    Pagination
  },
  data() {
    return {
      records: [],
      record: [],
      recommend: null,
      totalNum: 0,
      pageSize: 6,
    }
  },
  async created() {
    await getRecord().then(res => {
      this.records = res.data.data.record;
      this.totalNum = this.records.length;
      this.record = this.records.slice(0,this.pageSize);
    })
  },
  methods: {
    getList(list) {
      this.record = list;
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
 
  
</style>