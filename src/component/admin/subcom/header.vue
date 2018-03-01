<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content bg-purple">
        <span class="el-icon-menu left-icon"></span>
      </div>
    </el-col>
    <el-col :span="12" class="hdaer-login" >
      <div class="grid-content bg-purple-light">
        <span>你好！{{uname}}</span>
        <!-- 下拉菜单 -->
        <el-dropdown :hide-on-click="false"  @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-caret-bottom el-icon--right icon"></i>
            功能
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a" >修改密码</el-dropdown-item>
            <el-dropdown-item command="b">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data(){
    return{
      uname:localStorage.getItem('uname')
    }
  },
   methods:{
    //  请求退出
      outlog(){
        this.$http.get(this.$api.logout).then((res)=>{
          console.log(res);
              if (res.data.status==0) {
              this.$confirm('确定要退出吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({name:"login"})
          this.$message({
            type: 'success',
            message:'退出成功',
            
            

          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
              }
        })
      },
      // 点击选中的那一项
      handleCommand(command) {
       if (command=='b') {
        this.outlog()
       }
      }
    }
};
</script>

<style lang="less" scoped>
.el-row {
  margin: 0px;
  background: #000;
  padding: 0px;
  padding: 0px 20px;
  .left-icon{
    color:aliceblue;
    display:block;
       font-size: 30px !important;
       height: 50px;
       width: 50px;
       line-height: 50px;
       cursor: pointer;
       border-right:1px solid rgb(105, 104, 104);

  }
 .hdaer-login{
text-align: right;
  font-size:14px;
  height: 50px;
  line-height: 50px;
  color: aliceblue;
 
  .el-dropdown{
 border-left:1px solid rgb(134, 133, 133);
 color: aliceblue;
 cursor: pointer;
  }
  .icon{
    color: rgb(214, 221, 230);
  }
  }

  height: 100%;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

</style>

