<template>
  <div class="navigation">
    <!-- 嵌套导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
<!-- 新增 全选 删除 -->
    <div class="addList">
       <el-button size="small" >  <span class="el-icon-plus"> </span>  新增</el-button>
       <el-button size="small"> <span class="el-icon-check"> </span> 全选</el-button>
       <el-button size="small"> <span class="el-icon-delete"> </span> 删除</el-button>
       <!-- 搜索 -->
       <!-- <div class="demo-input-size"> -->
        <el-input size="min" placeholder="请输入内容"  suffix-icon="el-icon-search"  v-model="apiQuery.searchvalue" @blur="search" > </el-input>
        <!-- <div> -->
    </div>
    <!-- 表格内容数据 -->

                                  <!-- data是配置数据的 -->
  <el-table ref="multipleTable"  :data="tableData3" tooltip-effect="dark" style="width: 100%"  @selection-change="handleSelectionChange">
          <el-table-column  type="selection" width="55"> </el-table-column>

          <el-table-column label="标题" width="400" >
          <!--渲染列表数据有两种 1. template自定义模板,里面还可以嵌套点击路由跳转 -->
             <template slot-scope="scope" >
               <router-link :to='{name:"Detail"}' style="color: #000"> {{ scope.row.title }}</router-link> 
              </template>
          </el-table-column>1
              <!-- 2.不需要跳转就用prop属性就可以渲染到页面 -->
          <el-table-column prop="categoryname" label='所属类别'  width="120"></el-table-column>

         <el-table-column prop="stock_quantity"  label="库存"  > </el-table-column>

         <el-table-column prop="market_price" label="市场价" > </el-table-column>

         <el-table-column prop="sell_price" label='销售价' > </el-table-column>

         <el-table-column prop="address" label='属性'  >
               <template slot-scope="scope">三个图标</template>
           
            </el-table-column>

         <el-table-column  label='操作' >
             <template slot-scope="scope" >
               <router-link :to='{name:"Detail"}' style="color:#000">修改</router-link>
               
              </template>
           
            </el-table-column>

  </el-table>

  </div>
</template>
<script>
export default {
  data() {
      return {
        // 分页和搜索的参数
      apiQuery:{
        pageIndex:1,
        pageSize:10,
        searchvalue:''
      },

            // 数据
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {

        // 获取到焦点的时候再执行请求数据
        search(){
          this.getGoodsData()
        },



      // 获取数据
      getGoodsData(){
        // 拼接参数路径
        // let api = `${this.$api.gsList}?pageIndex=${this.apiQuery.pageIndex}&pageSize=${this.apiQuery.pageSize}&searchvalue=${this.apiQuery.searchvalue}`
        var api=this.$api.gsList+`?pageIndex=${this.apiQuery.pageIndex}&pageSize=${this.apiQuery.pageSize}&searchvalue=${this.apiQuery.searchvalue}`
        this.$http.get(api).then((res)=>{
          if (res.data.status==0) {
            // 把获取到的数据覆盖掉固定的数据
              this.tableData3=res.data.message;
          }
        })
      },


      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
     // 当页码加载完毕就调用请求执行数据
    created(){
      this.getGoodsData()
    }
}
</script>
<style lang="less" scoped>
.navigation{
  // background: rgb(211, 206, 206);
  padding: 10px;
  font-size:18px;
  
}
.el-breadcrumb{
  border-bottom:1px solid #ccc;
  padding-bottom:15px;
  margin-bottom: 10px;
}
.addList{
  padding: 20px;
  border:1px solid rgb(230, 214, 214);
  background: #fafafa;
  border-radius: 10px;
  span{
    font-size: 18px;
    font-weight: 800;
  }
}
.el-input{
  width: 200px;
  float: right;
}
</style>


