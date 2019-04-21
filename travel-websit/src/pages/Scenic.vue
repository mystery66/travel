<template>
  <div id="scenic">
    <div class="scenic-head">
      <scenic></scenic>
    <div class="banner">
      <swiper height="3.28rem" :swiper="banner" arrow="never"/>
    </div>
    </div>
   
   
  </div>
</template>

<script>
import Scenic from '@/components/Scenic/Scenic'
import Swiper from '@/common/Swiper'
import { getBanner } from '@/api/data.js'
export default {
  components: {
    Scenic,
    Swiper
  },
  data() {
    return {
     banner: null,
    }
  },
  created() {
    getBanner().then((res) => {
      this.banner = res.data.data.banner;
    })
  },
}
</script>

<style lang="less" scoped>
  #scenic{
    position: relative;
    padding: 0 2.2rem;
    margin-top: .3rem;

    .scenic-head {
      display: flex;
      justify-content: space-between;
    }
  }
  .banner {
    // display: inline-block;
    width: 6.75rem; 
  //  float: right;
  }
</style>