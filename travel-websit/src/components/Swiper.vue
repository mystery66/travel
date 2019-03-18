<template>
  <div>
    <el-carousel indicator-position="none" height="510px">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img :src="item"/>
        <h3>雨季美娜多跳海➕潜水日记，一只单身🐶的海岛游</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs:[
        'https://n3-q.mafengwo.net/s13/M00/B2/3C/wKgEaVyLscaAZK3pAAXfkQND8JA82.jpeg?imageMogr2%2Finterlace%2F1',
        'https://p1-q.mafengwo.net/s13/M00/CC/21/wKgEaVyM-nqAYhvdAAiiUlk6bNg71.jpeg?imageMogr2%2Finterlace%2F1',
        'https://n4-q.mafengwo.net/s13/M00/76/06/wKgEaVyKYDeAf4HoAAWB_57uhXg90.jpeg?imageMogr2%2Finterlace%2F1',
        'https://b2-q.mafengwo.net/s13/M00/70/6F/wKgEaVyJCpmALHttAAf6RckElkM74.jpeg?imageMogr2%2Finterlace%2F1',
        'https://p1-q.mafengwo.net/s13/M00/CC/21/wKgEaVyM-nqAYhvdAAiiUlk6bNg71.jpeg?imageMogr2%2Finterlace%2F1',
      ]
    }
  },
  created() {
    
  },
}
</script>
<style scoped>
    .el-carousel__item h3 {
      position: absolute;
      color: #fff;
      font-size: 20px;
      line-height: 300px;
      top: -.533333rem /* 40/75 */;
      left: 1.333333rem /* 100/75 */;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img {
    max-width: 100%;
    height: auto;
  }
</style>