<template>

<div class="main">
  <el-container>
  <el-aside width="200px">
    <!-- 左侧组件 -->
    <app-adside></app-adside>
  </el-aside>
  <el-container>
    <el-header>
      <!-- 头部组件 -->
      <app-header></app-header>
    </el-header>
    <el-main>
      <router-view>内容</router-view>
    </el-main>
  </el-container>
</el-container>
</div>
 
</template>
<script>
// 引入子组件的文件
import Header from "./subcom/header.vue";
import Adside from "./subcom/adside.vue";
export default {
  // 创建局部组件
   components:{
       appHeader:Header,
       appAdside:Adside
   }
}
</script>
<style lang="less" scoped>
.main{
  height: 100%;
  background: pink;
 
  .el-container .el-header{
    height: 50px !important;
    margin: 0px;
    padding: 0px !important;
    // background:rgb(138, 166, 243);
  }
  .el-container {
    height: 100%;
    
  }
  .el-aside{
    height:100%;
    background: rgb(7, 13, 54);
  }

  
}

</style>



