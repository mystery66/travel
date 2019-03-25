<template>
  <div class="recommend">
    <div class="hd-title">
      <h2>旅游攻略推荐</h2>
      <router-link to="/strategy"><span>更多>></span></router-link>
    </div>
    <div class="hd-body">
      <div class="recommend-item">
        <router-link to="/strategy">
          <img src="https://b2-q.mafengwo.net/s10/M00/BF/FB/wKgBZ1oSmXOAanzfABeSVYJZ1X483.jpeg?imageMogr2%2Fthumbnail%2F%21260x139r%2Fgravity%2FCenter%2Fcrop%2F%21260x139%2Fquality%2F100"></img>
          <span class="mark">自由行攻略</span>
          <h3>墨尔本自驾游全攻略（市区+大洋路+企鹅岛经典路线）</h3>
        </router-link>
      </div>
      <div class="recommend-item">
        <router-link to="/strategy">
          <img src="https://b2-q.mafengwo.net/s10/M00/BF/FB/wKgBZ1oSmXOAanzfABeSVYJZ1X483.jpeg?imageMogr2%2Fthumbnail%2F%21260x139r%2Fgravity%2FCenter%2Fcrop%2F%21260x139%2Fquality%2F100"></img>
          <span class="mark">自由行攻略</span>
          <h3>墨尔本自驾游全攻略（市区+大洋路+企鹅岛经典路线）</h3>
        </router-link>
      </div>
      <div class="recommend-item">
        <router-link to="/strategy">
          <img src="https://b2-q.mafengwo.net/s10/M00/BF/FB/wKgBZ1oSmXOAanzfABeSVYJZ1X483.jpeg?imageMogr2%2Fthumbnail%2F%21260x139r%2Fgravity%2FCenter%2Fcrop%2F%21260x139%2Fquality%2F100"></img>
          <span class="mark">自由行攻略</span>
          <h3>墨尔本自驾游全攻略（市区+大洋路+企鹅岛经典路线）</h3>
        </router-link>
      </div>
      <div class="recommend-item">
        <router-link to="/strategy">
          <img src="https://b2-q.mafengwo.net/s10/M00/BF/FB/wKgBZ1oSmXOAanzfABeSVYJZ1X483.jpeg?imageMogr2%2Fthumbnail%2F%21260x139r%2Fgravity%2FCenter%2Fcrop%2F%21260x139%2Fquality%2F100"></img>
          <span class="mark">自由行攻略</span>
          <h3>墨尔本自驾游全攻略（市区+大洋路+企鹅岛经典路线）</h3>
        </router-link>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style>

  .hd-title {
    display: flex;
    justify-content: space-between;
    height: .466667rem /* 35/75 */;
    line-height: .466667rem;
    margin-bottom: .16rem /* 12/75 */;
  }
  .hd-title h2 {
    font-size: .2rem /* 18/75 */;
    color: #333;
    font-weight: normal;
  }
  .hd-title span{
    color: #999;
    font-size: .14rem;
  }
   .hd-title span:hover {
     color: #409EFF;
   }
  
    .hd-body img {
      width: 2.3122rem;
      height: auto;
   }
   .recommend-item {
     position: relative;
   }
   .recommend-item .mark {
    position: absolute;
    left: 0;
    top: 0.1rem;
    padding: 0 0.09rem;
    color: #fff;
    line-height: .2rem;
    background-color: #ff6262;
    font-size: 0.1rem;
   }

   .recommend-item .mark:after {
    content: '';
    position: absolute;
    top: 0;
    right: -0.05rem;
    border-top: 0.1rem solid #ff6262;
    border-bottom: 0.1rem solid #ff6262;
    border-right: 0.05rem dashed transparent;
}
.recommend-item h3 {
  margin: .1rem 0;
  width:  2.3122rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.recommend-item h3:hover {
  color: #409EFF;
}
</style>