<template>

  <div>
<app-header></app-header>
<app-adside></app-adside>

<router-view></router-view>

  </div>
 
</template>
<script>
import Header from "./subcom/header.vue";
import Adside from "./subcom/adside.vue";
export default {
   components:{
       appHeader:Header,
       appAdside:Adside
   }
}
</script>


