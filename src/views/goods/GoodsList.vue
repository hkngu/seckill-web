<template> 
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
    </el-card>
    <div class="table-container">
      <el-table ref="productRelationTable"
                :data="list"
                style="width: 100%;"
                v-loading="listLoading" border>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="商品名称" align="center">
          <template slot-scope="scope">{{scope.row.goodsName}}</template>
        </el-table-column>
        <el-table-column label="商品描述" width="140" align="center">
          <template slot-scope="scope">NO.{{scope.row.goodsDetail}}</template>
        </el-table-column>
        <el-table-column label="商品原价" width="100" align="center">
          <template slot-scope="scope">￥{{scope.row.goodsPrice}}</template>
        </el-table-column>
        <el-table-column label="剩余数量" width="100" align="center">
          <template slot-scope="scope">{{scope.row.goodsStock}}</template>
        </el-table-column>
        <el-table-column label="秒杀价格" width="100" align="center">
          <template slot-scope="scope">
            <p v-if="scope.row.seckillPrice!==null">
              ￥{{scope.row.seckillPrice}}
            </p>
          </template>
        </el-table-column>
        <el-table-column label="秒杀数量" width="100" align="center">
          <template slot-scope="scope">{{scope.row.seckillStock}}</template>
        </el-table-column>
        <el-table-column label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="text"
                       @click="">进入详情页面
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>



  </div>
</template>
<script>
    import {fetchList} from "@/api/goods";

    export default {
        name:'GoodsList',
        data() {
            return {
                list: [],
                listLoading: false,
            }
        },
        created(){
            this.getList();
        },
        methods:{
            getList(){
                this.listLoading = true;
                fetchList().then(response =>{
                    this.listLoading = false;
                    this.list = response.data;
                })
            }
        },

    }
</script>
<style scoped>
  .operate-container{
    margin-top: 0;
  }
  .input-width{
    width: 200px;
  }
</style>


