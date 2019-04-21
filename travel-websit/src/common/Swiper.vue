<template>
  <div>
    <el-carousel indicator-position="none" :height="height" :arrow="arrow">
      <el-carousel-item v-for="(item,index) in swiper" :key="index">
        <img :src="item.img"/>
        <div class="date">
          <span class="day" v-if="item.date"> {{item.date}}</span>
          {{item.time}}
       </div>
        <h3>{{item.desc}}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
// import { getSwiper } from '@/api/data.js'
export default {
  props: ["height","swiper","arrow"],
  data() {
    return {
      // swiper: ''
    }
  },
  // created() {
  //   getSwiper().then(res => {
  //     this.swiper = res.data.data.swiper;
  //   })
  // }
}

</script>
<style>
  .el-carousel {
    margin-bottom: .17rem;
  }
  .el-carousel__item {
    font-size: 0.28rem /* 26/75 */;
    text-shadow: 0 1px 3px rgba(0,0,0,.9);
    color: #fff;
  }

  .el-carousel__item h3 {
    position: absolute;
    line-height: .346667rem;

    top: 0.5rem /* 40/75 */;
    left: 2.2rem /* 100/75 */;
  }
  
  .el-carousel__item .date {
   position: absolute;
    left: 2.2rem;
    top: .2rem;
  }

  .el-carousel__item .day {
   font-size: 0.35rem;
   line-height: 0.27rem;
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