<template>
  <div class="main-left">
    <div class="head">
      <h3>摄影图片鉴赏</h3>
    </div>
    <ul class="item-list">
      <li v-for="(item,index) in list" :key="index">
        <router-link to="/photography">
          <img class="pic" :src="item.img"/>
          <p class="title">{{item.title}}</p>
        </router-link/>
        <div class="item-desc">
          <span class="tags">Tags: {{item.tags}}</span>
          <span class="date">{{item.date}}</span>
        </div>
      </li>
    </ul>
    <pagination
      from="photography"
      :pageSize="pageSize" 
      :totalNum="totalNum"
      :lists = "pic" 
      v-on:getList="getList">
    </pagination>
  </div>
</template>
<script>
import Pagination from "@/common/pagination"
export default {
  props: {
    "pic": Array
  },
  components: {
    Pagination
  },

  data() {
    return {
      pageSize: 8,
      totalNum: 0,
      list: []
      
    }
  },
  watch: {
    pic(newVal,oldVal) {
      this.pic = newVal;
      console.log(this.pic)
      this.totalNum = this.pic.length;
      // console.log(this.totalNum)
      this.list = this.pic.slice(0,this.pageSize);
    }
  },
  // computed: {
  //   list: {
  //     get() {
  //       console.log(this.pic.length);
  //     let list  = 0;
  //     this.totalNum = this.pic.length;
  //     console.log(this.totalNum)
  //     list = this.pic.slice(0,this.pageSize);
  //     return list;
  //     },
  //     set() {

  //     }
  //   }
  // },

  methods: {
    getList(list) {
      this.list = list;
      console.log(this.list);
      console.log(111)
    }
  },
}
</script>
<style lang="less">
  .main-left {
    font-size: 0.13rem;
    width: 71.5%;
    // box-sizing: border-box;
    margin-right: 0.1rem;
    .head {
      color: #ff9d00;
      width: 97.8%;
      margin-bottom: 0.15rem;
      border-bottom: 1px solid  #ecebeb; 
      h3 {
        width: 0.96rem;
        font-size: 0.16rem;
        line-height: .32rem;
        height: .32rem;
        padding: 0 0.05rem;
        margin-top: 0.15rem;
        border-bottom: 2px solid #ff9d00;
      }
    }
  }
  .item-list {
    position: relative;
    box-sizing: border-box;
    li {
      display: inline-block;
      border: 1px solid #e6e4e4;
      margin: 0 0.07rem 0.2rem 0;
      &:hover {
        border: 1px solid #ff9d00;
      }
      
      &:nth-child(3) {
        margin-right: 0;
      }
      .pic {
        margin: 0.03rem;
        width: 2.1rem;
        height: 1.86rem;
      }

      .title {
        text-align: center;
        padding: 0.03rem 0;
        font-size: 0.13rem;
        border-bottom: 1px solid #e6e4e4;
        font-weight: bold;
        &:hover {
          background-color: #ff9d00;
          color: #fff;
        }
      }

      .item-desc {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.03rem 0.12rem;
      }

      .tags {
        
      }
      .date {
        color: #a1a1a1;
        font-size: 0.12rem;
      }
    }
  }
</style>