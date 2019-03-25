<template>
  <div class="travels-record" id="travels-record">
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="热门游记" name="first">
      <list :list="record"></list>
    </el-tab-pane>
    <el-tab-pane label="最新发表" name="second">
      <list :list="record"></list>
    </el-tab-pane>
  </el-tabs>
  
  </div>
</template>
<script>
import List from '@/common/List'
export default {
  props: ['record'],
  components: {
    List
  },

  data() {
    return {
      activeName: 'first',
    }
  },

  methods: {
    handleClick() {
    },
  },
}
</script>
<style lang="less">
  .el-tabs__item {
    font-size: 0.19rem;
    height: .466667rem;
    line-height: .466667rem;
  }

  .el-tabs__header {
    margin-bottom: .02rem;
  }
  
  .el-tabs__active-bar {
  }
  .record-item {
    padding: 0.15rem 0;
    height: 1.5rem;
    &:hover {
      background: #e8e8e8;
      h3 {
        color: #ff9d00;
      }
    }
  }
  .left.record-img {
    width: 2.2rem;
    float: left;
    img {
      width: 100%;
    }
  }
  .right.record-wrapper {
    float: right;
    width: 3.8rem;
  }
  .record-desc h3 {
    margin-bottom: .18rem;
  }
  .record-desc span {
    display: inline-block;
    font-size: 0.12rem;
    margin-bottom: .24rem;
  }
  .iconfont {
    font-size: 0.13rem;
  }
  .record-bottom {
    font-size: 0.12rem;
    span {
      display: inline-block;
      margin-right: 0.1rem;
    }
    .record-user {
       color: #ff9d00;
       img {
        border-radius: 50%;
      }
    }
  }
</style>