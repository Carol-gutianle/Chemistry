<template>
  <div >
    <div style="height: 40px">
    </div>
    <div style="text-align: center;width: 100%; padding-left: 100px;margin: auto">

      <el-card style="width: 60%; margin: 10px">
      <el-button type="primary" @click="run()">开始运行</el-button>
      </el-card>

      <el-card style="width: 60%; margin: 10px">
        <el-carousel
          width="100%"
          height="600px"
          :initial-index="oIndex"
          indicator-position="outside"
          @change="handleChange"
          ref="carousel">
          <el-carousel-item v-for="item in list" :key="item.articleId" class="carousel-item">
            <img :src="item.url" class="carousel-img"  @click="navToPath(item.articleId)">
          </el-carousel-item>
        </el-carousel>
        <div class="indicator">
          <div class="desc"></div>
        </div>
      </el-card>

      <el-card style="width: 60%; margin: 10px">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="kValue"
            label="k"
            width="180">
          </el-table-column>
          <el-table-column
            prop="eValue"
            label="e"
            width="180">
          </el-table-column>
        </el-table>
      </el-card>

    </div>
  </div>
</template>

<script>
import request from "../util/request";
export default {
  data() {
    return {
      list: [],
      tableData: []
    }
  },
  methods: {
    //数字指示器点击事件
    clickChange(index) {
      //参数index为图片索引
      this.oIndex = index;
      this.$refs.carousel.setActiveItem(index) //调动setActiveItem方法，动态切换图片
      this.articleTitle = this.list[index]["title"];
    },

    run() {
      request.post("api/return_datas/", this.fd).then(res=>{
           for(var i=0;i<7;i++)
           {
                res.data.picture[i]["url"] = require(res.data.picture[i]["url"])
           }
           this.list = res.data.picture;
           this.tableData = res.data.KE;
      })
    }

  }

}
</script>

<style scoped>
.carousel-item {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
}
.carousel-img {
  max-width: 100%;
  max-height: 100%;
}
</style>

