<template>
  <div >
    <div style="height: 40px">
    </div>
    <div style="text-align: center;width: 100%; padding-left: 100px;margin: auto">

      <el-card style="width: 70%; margin: 10px">

        <el-button type="primary" @click="run2()">开始运行（后台程序运行需要10-15分钟，请耐心等待）</el-button>
        <el-button type="primary" @click="run()">显示结果</el-button>
      </el-card>

      <el-card style="width: 70%; margin: 10px">
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

      <el-card style="width: 70%; margin: 10px">
        <el-col :span="3.5" style="padding-left:0px;">
        <el-table
          :row-style="{height:'74px'}"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="kValue"
            label="K"
            width="180">
          </el-table-column>
          <el-table-column
            prop="eValue"
            label="Ea(kJ/mol)"
            width="180">
          </el-table-column>

        </el-table>
        </el-col>
        <el-col :span="3.5" style="padding-right:0px;">
        <el-table
          :data="tableData1"
          style="width: 100%">
        <el-table-column
          prop="ps"
          label="对应方程(K为方程的反应速率常数 Ea为方程的反应活化能)"
          width="450">
          <template   slot-scope="scope">
            <img :src="scope.row.ps"  min-width="50" height="50" />
          </template>
        </el-table-column>


          </el-table>
        </el-col>

        </el-card>
      <el-card style="width: 70%; margin: 10px">

        <el-button @click="handleClick()" type="primary" >各步反应动力学常数对数与绝对温度倒数关系图</el-button>
        <el-button @click="handleClick2()" type="primary" >反应动力学常数K2对数与温度倒数关系图</el-button>
        <el-button @click="handleClick3()" type="primary" >图例说明</el-button>

        <el-dialog title="" :visible.sync="dialogFormVisible" width="50%">
          <div>
            <el-image
              style="width: 100%;height: 100%"
              :src = "require('../assets/l.jpg')"
              fit = "scale-down"
            ></el-image>
          </div>
        </el-dialog>

        <el-dialog title="" :visible.sync="dialogFormVisible2" width="50%">
          <div>
            <el-image
              style="width: 100%;height: 100%"
              :src = "require('../assets/r.jpg')"
              fit = "scale-down"
            ></el-image>
          </div>
        </el-dialog>

        <el-dialog title="" :visible.sync="dialogFormVisible3" width="50%">
          <div>
            <el-image
              style="width: 100%;height: 100%"
              :src = "require('../assets/lr.png')"
              fit = "scale-down"
            ></el-image>
          </div>
        </el-dialog>

      </el-card>

    </div>
  </div>
</template>

<script>
import request from "../util/request";
export default {
  data() {
    return {
      dialogFormVisible2:false,
      dialogFormVisible:false,
      dialogFormVisible3:false,
      list: [
      {"title":"图1","url":"http://server.vaiwan.cn/media/0.png"},
      {"title":"图1","url":"http://server.vaiwan.cn/media/1.png"},
      {"title":"图1","url":"http://server.vaiwan.cn/media/2.png"},
      {"title":"图1","url":"http://server.vaiwan.cn/media/3.png"},
      {"title":"图1","url":"http://server.vaiwan.cn/media/4.png"},
      {"title":"图1","url":"http://server.vaiwan.cn/media/5.png"},
      {"title":"图1","url":"http://server.vaiwan.cn/media/6.png"},
      ],
      list1: [
        {"title":"图1","url":"http://server.vaiwan.cn/media/0.png"}
      ],
      tableData: [
      {"kValue":3292256062.3319407,"eValue":95763.31699725651,},
      {"kValue":17026448145390.867,"eValue":88422.77344932838},
      {"kValue":1623957393.1163824,"eValue":87383.9443650537},
      {"kValue":7516179236.089911,"eValue":94015.96441164656},
      {"kValue":236649.77956834293,"eValue":46086.35089734953},
      {"kValue":21.031099109026435,"eValue":33951.366251236715},
      {"kValue":45450.37377298935,"eValue":42824.11059165022},
      ],
      tableData1: [
        {"ps":require("../assets/img1.png")},
        {"ps":require("../assets/img2.png")},
        {"ps":require("../assets/img3.png")},
        {"ps":require("../assets/img4.png")},
        {"ps":require("../assets/img5.png")},
        {"ps":require("../assets/img6.png")},
        {"ps":require("../assets/img7.png")},


      ],

    }
  },
  methods: {
    handleClick(){

      this.dialogFormVisible=true

    },
    handleClick2(){

      this.dialogFormVisible2=true

    },
    handleClick3(){

      this.dialogFormVisible3=true

    },
    //数字指示器点击事件
    clickChange(index) {
      //参数index为图片索引
      this.oIndex = index;
      this.$refs.carousel.setActiveItem(index) //调动setActiveItem方法，动态切换图片
      this.articleTitle = this.list[index]["title"];
    },

    run() {
      this.list= [];
      this.tableData= [];
      request.post("api/return_datas/", this.fd).then(res=>{
        if(res.data.code===200) {
          this.list = res.data.picture;
          for(var i=0;i<7;i++)
          {
            this.list[i]["url"] = "http://server.vaiwan.cn/media/"+this.list[i]["url"];
            // this.list[i]["url"] = "http://127.0.0.1:8000/media/0.png";
          }

          this.tableData = res.data.KE;
        }
        else {
          this.$message({
            type: "error",
            message: "正在运行，请耐心等待！"
          })
        }


      })
    },
    run2() {
      this.list= [];
      this.tableData= [];
      request.post("api/get_datas/", this.fd).then(res=>{

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