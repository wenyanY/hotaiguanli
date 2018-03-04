<template>
  <div>
     <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!-- 商品管理 -->
      <el-submenu  v-for='item in menu' :key="item.title" :index='item.title'>
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>{{item.title}}</span>
        </template>

          <el-menu-item class="el-icon-document" v-for='subitem in item.chidren' :key="subitem.title" :index='subitem.title + item.title' >
            <router-link :to="subitem.path">{{ subitem.title }}</router-link>
            
           </el-menu-item>
      </el-submenu>
 
    </el-menu>
  </div>
</template>
<script>
export default {
  data(){
    return{
      menu:[
        {
          title:'商品管理',
          chidren:[
             {title:'内容管理',path:'/admin/goods/list'},
             {title:'类别管理',path:'/admin/goods/detail'},
             {title:'评理管理',path:'/admin/comment'}
          ]
          
          
          },
           {
                  title:'订单管理',
                  chidren:[
                    {title:'内容管理',path:'/admin/a'},
                    {title:'类别管理',path:'/admin/b'},
                    {title:'评理管理',path:'/admin/c'}
                  ]
                  
          
          },
      ]
    }
  }
}
</script>

