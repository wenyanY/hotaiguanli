<template>
  
    <div class="login">
      <div class="box">                         
                                                                <!-- label-position设置表单的位置有三个值：left/right/top -->
        <el-form :model="ruleForm2" status-icon :rules="rules2" label-position="top" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名"  prop="uname">
                <el-input type="text" v-model="ruleForm2.uname" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="upwd">
                <el-input type="password" v-model="ruleForm2.upwd" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')" >提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
      </div>
  </div>
  
</template>
<script>
export default {
   data() {
    
      // var validatePass = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入用户名'));
      //   } else {
      //     if (this.ruleForm2.uname !== '') {
      //       this.$refs.ruleForm2.validateField('uname');
      //     }
      //     callback();
      //   }
      // };
     

      return {
        ruleForm2:{
          uname:'',
          upwd:''
        }
      ,
        rules2: {
          uname: [
            { required: true, message: '请输入用户名称', trigger: 'blur' }
          ],
          upwd: [
            { required:true,message:'请输入密码',trigger: 'blur' }
          ],
       
        }
      };
    },
    methods: {
            log(){
              this.$http.post(this.$api.login,this.ruleForm2).then((res)=>{
                if(res.data.status==1){this.$alert(res.data.message)}
                else{
                var  username=res.data.message.uname;
                localStorage.setItem('uname',username)
              this.$router.push({name:"admin"})
                  this.$message({
                    message: '恭喜你，登录成功',
                    type: 'success'
                  });
              }
              
              })
            },


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.log()
          } else {
            alert('账号和密码不合格');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped lang="less">
  .login{
    height: 100%;
    position: relative;
    background:#267cb7;
    .box{
      width: 400px;
      height: 300px;
      margin: 0 auto;
      position: relative;
      top:50%;
      transform: translateY(-50%);
      border:1px solid rgb(230, 227, 227);
      border-radius: 5px;
      padding: 10px 20px;
      input{
        color:aliceblue;
      }
     

    }
  }

</style>
