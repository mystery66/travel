<template>
  <div class="navBar">
    <el-menu 
      :default-active="activeIndex" 
      class="el-menu-demo" 
      mode="horizontal" 
      @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">景点大全</el-menu-item>
      <el-menu-item index="3" >美食</el-menu-item>
      <el-menu-item index="4" >旅游摄影</el-menu-item>
      <el-menu-item index="5">旅游攻略</el-menu-item>
     
    </el-menu>
    <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input">
  </el-input>
  <div class="login">
    <span class="toLogin" @click="toLogin">登录</span>&nbsp;|&nbsp;
    <span class="register" @click="toRegister">注册</span>
  </div>
  </div>
 
</template>

<script>
import DiaLog from './Dialog' 
export default {
  name: 'NavBar',
  components: {
    DiaLog
  },
  data () {
    return {
      selected: '',
      activeIndex: '1',
      input: '',
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
      case '1':
      this.selected = '首页';
      break;
        case '2':
      this.selected = '景点大全';
      break;
        case '3':
      this.selected = '美食';
      break;
        case '4':
      this.selected = '旅游摄影';
      break;
      case '5':
      this.selected = '旅游攻略';
      break;
      }
      this.$router.push({
        name: this.selected
      })
    },

    toLogin() {

    },

    toRegister() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.navBar {
  position: relative;
  padding-left: 20% ;
  height: 61px;
  border-bottom: solid 1px #e6e6e6;
}
.el-menu.el-menu--horizontal {
    border-bottom: 0;
}
.el-input {
  position: absolute;
  top: 0;
  right: 30%;
  line-height: 61px;
  width: 15%;
}
.login {
  position: absolute;
  top: 0;
  right: 15%;
  height: 100%;
  line-height: 61px;
  font-size: 14px;
  border: 0;
}
.el-input__inner {
  height: 30px !important;
}
.toLogin:hover,.register:hover {
  color: #409EFF;
}
</style>
