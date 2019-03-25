<template>
  <div class="record-content">
        <div class="record-item" v-for="(item,index) in list" :key="index">
          <div class="left record-img">
            <router-link to='/strategy'>
            <img :src="item.img"/>
          </router-link>
          </div>
          <div class="right record-wrapper">
            <router-link to='/strategy'>
              <div class="record-desc">
                <h3>{{item.head}}</h3>
                <span>{{item.desc}}</span>
              </div>
            </router-link>
            <div class="record-bottom">
              <span class="record-place">
                <i class="icon iconfont icon-weizhi"></i>
                {{item.place}}，by
              </span>
              <span class="record-user">
                <img :src="item.userAvater"/>
                {{item.userName}}
              </span>
              <span class="record-view">
                <i class="icon iconfont icon-view"></i>
               {{item.view}}/{{item.articleNum}}
              </span>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  props: ['list'],
}
</script>
<style lang="less">
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