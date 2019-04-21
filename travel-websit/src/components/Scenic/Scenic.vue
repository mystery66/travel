<template>
  <div class="scenic">
    <el-menu default-active="1-4-1" 
      class="el-menu-vertical-demo" 
      @open="handleOpen"
      @close="handleClose" 
      :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <p class="choose">海外冬季景点精选</p>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">1.北海道  在皑皑白雪中泡温泉</el-menu-item>
          <el-menu-item index="1-2">2.冰岛  在皑皑白雪中泡温泉</el-menu-item>
          <el-menu-item index="1-3">1.澳大利亚  在皑皑白雪中泡温泉</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
        <p class="choose">国内冬季景点精选</p>
        <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">1.漠河  至寒圣地的极光约会</el-menu-item>
          <el-menu-item index="1-2">2.黄山 银装素裹秒杀菲林季</el-menu-item>
          <el-menu-item index="1-3">3.海螺沟  冰川温泉的童话世界</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <p class="choose">奔向海岛</p>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">1.象岛 腻了普吉，来象岛玩个深度</el-menu-item>
          <el-menu-item index="1-2">2.巴厘岛 巴厘岛免签啦</el-menu-item>
          <el-menu-item index="1-3">3.毛里求斯 印度洋上的海上明珠</el-menu-item>
        </el-menu-item-group>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <p class="choose">主题推荐</p>
         
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">敬请期待！！！</el-menu-item>
          
        </el-menu-item-group>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
      return {
        isCollapse: true
      }
      },
      methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="less" scoped> 
  .scenic {
    color: #666;
    .el-submenu__title {
      padding: 0 0.2rem !important;
    }

    .el-menu-item-group {
      border: solid 1px #e6e6e6;
    }
    
    .el-menu-item-group__title {
      padding: 0 !important;
    }
    .el-menu-item.is-active {
    color: #ff9d00 !important;
}
  }
  .el-menu--collapse {
    width: 2rem;
    border: solid 1px #e6e6e6;
  }
  .el-submenu__title {
     border-bottom: solid 1px #e6e6e6 !important;
  }
  .is-opened:hover {
    .choose {
      color: #ff9d00;
      &:after {
        border-top: 1px solid  #ff9d00;
        border-right: 1px solid  #ff9d00;
      }
    }
  }
  .choose {
    &:after {
      content: '';
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      width: 0.06rem;
      height: .06rem;
      border-top: 1px solid #909399;
      border-right: 1px solid #909399;
      transform: rotate(45deg);
    }
  }
 
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>