<template>
  <div class="photography">
    <div class="main">
        <main-left :pic="pic"/>
        <main-right/>
    </div>
  </div>
</template>
<script>
import MainLeft from '@/components/Photography/MainLeft'
import MainRight from '@/components/Photography/MainRight'
import { getPhotography } from '@/api/data.js'
export default {
  components: {
    MainLeft,
    MainRight
  },

  data() {
    return {
      pic: null,
      rank: null,
      more: null
    }
  },

async created() {
  await getPhotography().then(res => {
      this.pic = res.data.data.pic;
    })
  },
}
</script>
<style lang="less">
  .photography {
    padding: 0 2rem;
    .head {
      color: #ff9d00;
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

    .main {
      display: flex;
    }
  }
</style>