<template>
  <div id="index">
    <swiper height="4.5355rem" :swiper="swiper" arrow="hover"/>
    <index-container/>
  </div>
</template>

<script>
import Swiper from '@/common/Swiper'
import IndexContainer from '@/components/IndexContainer/container'
import { getSwiper } from '@/api/data.js'
export default {
  components: {
    Swiper,
    IndexContainer
  },
  data() {
    return {
      swiper: [],
    }
  },
async created() {
  await getSwiper().then(res => {
      this.swiper = res.data.data.swiper;
    })
  },
}
</script>

<style>

</style>