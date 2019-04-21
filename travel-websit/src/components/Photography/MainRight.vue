<template>
  <div class="main-right">
    <div class="head">
      <h3>热门排行</h3>
    </div>
    <div class="right-body">
      <ul class="right-list">
        <li class="right-item">
          <router-link to="/index">
          <div class="img">
            <img src="http://www.cnzzzz.com/uploads/allimg/18/1-1P3211UZB57-lp.jpg"/>
          </div>
          <div class="desc">
            <p class="desc-content">90后女生徒步到西藏经历，很感</p>
            <p class="desc-content1">把一个女生的旅行日记放在网站</p>
          </div>
         
          </router-link>
        </li>

        <li class="right-item">
          <router-link to="/index">
          <div class="img">
            <img src="http://www.cnzzzz.com/uploads/allimg/18/1-1P3211UZB57-lp.jpg"/>
          </div>
          <div class="desc">
            <p class="desc-content">90后女生徒步到西藏经历，很感</p>
            <p class="desc-content1">把一个女生的旅行日记放在网站</p>
          </div>
         
          </router-link>
        </li>
        <li class="right-item">
          <router-link to="/index">
          <div class="img">
            <img src="http://www.cnzzzz.com/uploads/allimg/18/1-1P3211UZB57-lp.jpg"/>
          </div>
          <div class="desc">
            <p class="desc-content">90后女生徒步到西藏经历，很感</p>
            <p class="desc-content1">把一个女生的旅行日记放在网站</p>
          </div>
         
          </router-link>
        </li>
      </ul>

    <div class="head">
      <h3>精选推荐</h3>
    </div>
    <ul class="more-list">
      <li class="more-item">
        <img src="http://www.cnzzzz.com/uploads/19/1-1Z22121053W38.jpg"/>
        <p class="more-desc">波兰塔特拉国家公园美景</p>
      </li>
      <li class="more-item">
        <img src="http://www.cnzzzz.com/uploads/19/1-1Z22121053W38.jpg"/>
        <p class="more-desc">波兰塔特拉国家公园美景</p>
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
  .main-right {
    float: right;
    width: 2.5rem;
    height: auto;
    margin-top: 0.15rem;
    font-size: .11rem;
    border: 1px solid #ecebeb;
    padding: 0.1rem;
    box-sizing: border-box;

    .head {
      color: #666;
      
      h3 {
        margin-top: -0.1rem;
        width: 0.65rem;
        border-bottom: 1px solid #ff9d00;
      }
    }

    .right-item {
      margin: 0;
      padding: 0.08rem 0;
      border-bottom: 1px dashed #ccc;
      .img {
        display: inline-block;
        padding: 0.03rem;
        border: 1px solid #ccc;
        &:hover {
          border: 1px solid #ff9d00;
        }
      }
      img {
        width: 0.82rem;
        height: auto; 
      }
      .desc {
        float: right;
        width: 1.3rem;
      }
      .desc-content {
        color: #000;
        margin-bottom: 0.06rem;
        &:hover {
          color: #ff9d00;
        }
      }
      .desc-content1 {
        color: #999;
        font-size: .1rem; 
      }

      &:last-child {
        border: none;
        margin-bottom: .3rem;
      }
    }

    .more-item {
      width: 100%;
      height: auto;
      text-align: center;
      img {
        width: 100%;
      }
      .more-desc {
        padding: 0.05rem 0;
        font-size: .14rem;
        &:hover {
          color: #ff9d00;
        }
      }
    }
  }
</style>