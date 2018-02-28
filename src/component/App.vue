<template>
  <div>{{msg}}
  <router-view></router-view>
  </div>
</template>
<script>
export default {
   data(){
       return{
msg:'首页测试'
       }
   },
   mounted(){
     this.$http.post(this.$api.login,{
    "uname":"admin",
   "upwd":"123456"
    }).then(() => {console.log('登陆')})
     console.log(this.$api.login);
    
   }
}
</script>
<style>

</style>


