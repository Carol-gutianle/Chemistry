<template>
  <div >
    <div style="height: 40px">
    </div>
    <div style="text-align: center;width: 100%; padding-left: 400px;margin: auto">
      <el-card style="width: 40%; margin: 10px">
        <p>上传数据</p>
            <el-upload
              class="upload-demo"
              ref="upload"
              action="/cdata_post"
              :http-request="httprequest"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              multiple
              :file-list="fileList"

              :auto-upload="false"
              :on-change="getfile"
              name="uploadfile"
            >

              <el-button slot="trigger" size="small" type="primary">选取文件(默认提交data文件)</el-button>

              <el-button @click="handleClick()" type="primary" >预览文件</el-button>

              <el-button type="primary" @click="submituploadform()">提交</el-button>


            </el-upload>

        <el-dialog title="data文件内容预览" :visible.sync="dialogFormVisible2" width="70%">


          <el-main>
            <div style="float:left;">{</div><br>

            <div style="float:left;">"cdata":</div><br>
            <div style="float:left;">data1: 在反应条件448K，1.0Mpa下，苯甲醇，苯甲醛，苯甲酸，过氧化物，过氧化物五个化学物质每隔10分钟的浓度值</div><br>
            <div style="float:left;">[[[0, 9.413, 0, 0, 0, 0, 0, 0.000002],</div><br>
            <div style="float:left;">[10, 9.375, 0.0073, 0.0057, 0.0005, 0.0165, 5.0000e-05, 0.000002],</div><br>
            <div style="float:left;">[20, 9.3115, 0.0252, 0.0202, 0.0029, 0.0305, 5.0000e-05, 0.000002],</div><br>
            <div style="float:left;">[30, 9.2521, 0.0476, 0.0384, 0.0129, 0.0398, 5.0000e-05, 0.000002],</div><br>
            <div style="float:left;">[40, 9.2042, 0.0632, 0.0534, 0.0291, 0.0419, 5.0000e-05, 0.000002],</div><br>
            <div style="float:left;">[50, 9.1716, 0.0798, 0.0638, 0.0515, 0.0389, 3.5000e-04, 0.000002],</div><br>
            <div style="float:left;">[60, 9.144, 0.085, 0.0727, 0.0647, 0.0314, 8.0000e-04, 0.000002],</div><br>
            <div style="float:left;">[70, 9.1073, 0.091, 0.0862, 0.0852, 0.0265, 9.5000e-04, 0.000002],</div><br>
            <div style="float:left;">[80, 9.083, 0.0948, 0.0946, 0.1024, 0.0235, 1.3000e-03, 0.000002],</div><br>
            <div style="float:left;">[90, 9.0639, 0.1003, 0.0988, 0.1157, 0.0209, 1.6000e-03, 0.000002],</div><br>
            <div style="float:left;">[100, 9.0319, 0.1063, 0.1074, 0.1348, 0.0198, 1.7000e-03, 0.000002],</div><br>
            <div style="float:left;">[110, 8.9941, 0.1126, 0.1105, 0.1567, 0.0181, 2.2500e-03, 0.000002],</div><br>
            <div style="float:left;">[120, 8.9708, 0.1197, 0.1192, 0.1706, 0.0175, 2.5500e-03, 0.000002]],</div><br>
            <br>
            <div style="float:left;">data2: 在反应条件453K 1.0MPa下，苯甲醇，苯甲醛，苯甲酸，过氧化物，过氧化物五个化学物质每隔10分钟的浓度值</div><br>
            <div style="float:left;">[[0,9.413,0,0,0,0,0,0.000002],</div><br>
            <div style="float:left;">[10,9.3571,0.0154,0.009,0.0015,0.022,5.0000e-04,0.000002],</div><br>
            <div style="float:left;">[20,9.2479,0.0319,0.0443,0.0084,0.0399,5.0000e-04,0.000002],</div><br>
            <div style="float:left;">[30,9.1698,0.0564,0.065,0.0272,0.0436,5.0000e-04,0.000002],</div><br>
            <div style="float:left;">[40,9.1147,0.0829,0.084,0.0583,0.0391,5.0000e-04,0.000002],</div><br>
            <div style="float:left;">[50,9.0752,0.0999,0.0934,0.0838,0.0319,9.5000e-04,0.000002],</div><br>
            <div style="float:left;">[60,9.0338,0.1066,0.11,0.1061,0.0281,1.3500e-03,0.000002],</div><br>
            <div style="float:left;">[70,9.0149,0.1134,0.116,0.134,0.0237,1.5000e-03,0.000002],</div><br>
            <div style="float:left;">[80,8.9762,0.1198,0.1237,0.158,0.0209,2.1000e-03,0.000002],</div><br>
            <div style="float:left;">[90,8.9646,0.1239,0.1258,0.1704,0.0181,2.3000e-03,0.000002],</div><br>
            <div style="float:left;">[100,8.9466,0.1298,0.1298,0.1933,0.0171,2.6000e-03,0.000002],</div><br>
            <div style="float:left;">[110,8.9199,0.136,0.1349,0.2084,0.0168,2.9500e-03,0.000002],</div><br>
            <div style="float:left;">[120,8.8843,0.1433,0.1415,0.2194,0.0160,3.3000e-03,0.000002]],</div><br>
            <br>
            <div style="float:left;">data3: 在反应条件458K 1.0MPa下，苯甲醇，苯甲醛，苯甲酸，过氧化物，过氧化物五个化学物质每隔10分钟的浓度值</div><br>
            <div style="float:left;">[[0,9.413,0,0,0,0,0,0.000002],</div><br>
            <div style="float:left;">[10,9.3312,0.025,0.0129,0.0045,0.0274,5.0000e-04,0.000002],</div><br>
            <div style="float:left;">[20,9.2184,0.0709,0.0532,0.0166,0.0469,5.0000e-04,0.000002],</div><br>
            <div style="float:left;">[30,9.1077,0.096,0.0903,0.0661,0.0449,5.0000e-04,0.000002],</div><br>
            <div style="float:left;">[40,9.045,0.1107,0.1211,0.0934,0.0354,1.1000e-03,0.000002],</div><br>
            <div style="float:left;">[50,8.9865,0.1199,0.1311,0.1341,0.0258,1.6500e-03,0.000002],</div><br>
            <div style="float:left;">[60,8.931,0.1283,0.1387,0.1731,0.0227,2.3000e-03,0.000002],</div><br>
            <div style="float:left;">[70,8.8828,0.1384,0.1474,0.2035,0.0201,2.7000e-03,0.000002],</div><br>
            <div style="float:left;">[80,8.8582,0.1466,0.1518,0.2172,0.0182,3.2500e-03,0.000002],</div><br>
            <div style="float:left;">[90,8.8356,0.1522,0.1547,0.2301,0.0180,4.3000e-03,0.000002],</div><br>
            <div style="float:left;">[100,8.7991,0.1651,0.1616,0.247,0.0176,4.9000e-03,0.000002],</div><br>
            <div style="float:left;">[110,8.7639,0.1728,0.1664,0.267,0.0161,5.9500e-03,0.000002],</div><br>
            <div style="float:left;">[120,8.6851,0.1873,0.1782,0.3143,0.0153,7.4500e-03,0.000002]],</div><br>
            <br>
            <div style="float:left;">data4: 在反应条件463K 1.0MPa下，苯甲醇，苯甲醛，苯甲酸，过氧化物，过氧化物五个化学物质每隔10分钟的浓度值</div><br>
            <div style="float:left;">[[0,9.413,0,0,0,0,0,0.000002],</div><br>
            <div style="float:left;">[10,9.2485,0.0393,0.0259,0.0069,0.0504,5.0000e-04,0.000002],</div><br>
            <div style="float:left;">[20,9.1712,0.0969,0.0835,0.0386,0.0438,5.0000e-04,0.000002],</div><br>
            <div style="float:left;">[30,9.0134,0.1316,0.1371,0.0918,0.0351,1.0000e-03,0.000002],</div><br>
            <div style="float:left;">[40,8.9573,0.1411,0.1489,0.1313,0.0272,1.8000e-03,0.000002],</div><br>
            <div style="float:left;">[50,8.8979,0.1523,0.1591,0.1677,0.026,2.5000e-03,0.000002],</div><br>
            <div style="float:left;">[60,8.8507,0.1615,0.1651,0.198,0.0253,3.1000e-03,0.000002],</div><br>
            <div style="float:left;">[70,8.8118,0.1729,0.1722,0.236,0.0249,3.8000e-03,0.000002],</div><br>
            <div style="float:left;">[80,8.7675,0.181,0.1805,0.2727,0.0229,4.6000e-03,0.000002],</div><br>
            <div style="float:left;">[90,8.6667,0.1991,0.1897,0.3091,0.021,6.8500e-03,0.000002],</div><br>
            <div style="float:left;">[100,8.6046,0.211,0.2004,0.3448,0.019,8.3000e-03,0.000002],</div><br>
            <div style="float:left;">[110,8.5487,0.2183,0.2043,0.3798,0.0177,1.1050e-02,0.000002],</div><br>
            <div style="float:left;">[120,8.4901,0.227,0.2183,0.4029,0.0167,1.4500e-02,0.000002]],</div><br>
            <br>
            <div style="float:left;">data5: 在反应条件443K 1.0MPa 酯浓度0.002mol/m3下，苯甲醇，苯甲醛，苯甲酸，过氧化物，过氧化物五个化学物质每隔10分钟的浓度值</div><br>
            <div style="float:left;">[[0,9.413,0,0,0,0,0,0.000002],</div><br>
            <div style="float:left;">[10,9.0074,0.0789,0.0591,0.0086,0.0485,5.0000e-04,0.000002],</div><br>
            <div style="float:left;">[20,8.8662,0.118,0.1133,0.0551,0.0409,1.2500e-03,0.000002],</div><br>
            <div style="float:left;">[30,8.6772,0.1472,0.1562,0.1807,0.0308,1.6000e-03,0.000002],</div><br>
            <div style="float:left;">[40,8.6074,0.1612,0.167,0.224,0.0285,2.6000e-03,0.000002],</div><br>
            <div style="float:left;">[50,8.556,0.1764,0.1755,0.2487,0.0265,3.8500e-03,0.000002],</div><br>
            <div style="float:left;">[60,8.5061,0.1838,0.187,0.2773,0.0237,5.1500e-03,0.000002],</div><br>
            <div style="float:left;">[70,8.4484,0.1965,0.1979,0.3105,0.0212,6.0000e-03,0.000002],</div><br>
            <div style="float:left;">[80,8.3975,0.2076,0.2069,0.3378,0.0201,7.1500e-03,0.000002],</div><br>
            <div style="float:left;">[90,8.3056,0.2219,0.2289,0.3842,0.0183,9.9000e-03,0.000002],</div><br>
            <div style="float:left;">[100,8.2378,0.2374,0.2365,0.4228,0.0174,1.1650e-02,0.000002],</div><br>
            <div style="float:left;">[110,8.1866,0.2428,0.2417,0.4474,0.0162,1.5950e-02,0.000002],</div><br>
            <div style="float:left;">[120,8.1242,0.2514,0.2583,0.4651,0.0155,2.1000e-02,0.000002]],</div><br>
            <br>
            <div style="float:left;">data6: 在反应条件443K 1.0MPa 酯浓度0.001mol/m3下，苯甲醇，苯甲醛，苯甲酸，过氧化物，过氧化物五个化学物质每隔10分钟的浓度值</div><br>

            <div style="float:left;">[[0,9.4130, 0, 0, 0, 0, 0, 0.000001],</div><br>
            <div style="float:left;">[10.0000,9.4009,0.0029,0.0021,0.0000,0.0070,0.0000,0.000001],</div><br>
            <div style="float:left;">[20.0000,9.3769,0.0116,0.0086,0.0007,0.0145,0.0000,0.000001],</div><br>
            <div style="float:left;">[30.0000,9.3413,0.0249,0.0191,0.0034,0.0210,0.0000,0.000001],</div><br>
            <div style="float:left;">[40.0000,9.2974,0.0400,0.0318,0.0096,0.0246,0.0000,0.000001],</div><br>
            <div style="float:left;">[50.0000,9.2507,0.0541,0.0447,0.0194,0.0247,0.0000,0.000001],</div><br>
            <div style="float:left;">[60.0000,9.2061,0.0658,0.0562,0.0312,0.0225,0.0000,0.000001],</div><br>
            <div style="float:left;">[70.0000,9.1662,0.0749,0.0658,0.0433,0.0193,0.0001,0.000001],</div><br>
            <div style="float:left;">[80.0000,9.1314,0.0819,0.0735,0.0548,0.0163,0.0001,0.000001],</div><br>
            <div style="float:left;">[90.0000,9.1011,0.0873,0.0797,0.0653,0.0139,0.0002,0.000001],</div><br>
            <div style="float:left;">[100.0000,9.0741,0.0916,0.0848,0.0748,0.0121,0.0003,0.000001],</div><br>
            <div style="float:left;">[110.0000,9.0495,0.0952,0.0892,0.0836,0.0109,0.0004,0.000001],</div><br>
            <div style="float:left;">[120.0000,9.0266,0.0983,0.0930,0.0918,0.0100,0.0005,0.000001]],</div><br>
            <br>
            <div style="float:left;">data7: 在反应条件443K 1.0MPa 酯浓度0.004mol/m3下，苯甲醇，苯甲醛，苯甲酸，过氧化物，过氧化物五个化学物质每隔10分钟的浓度值</div><br>
            <div style="float:left;">[[0,9.4130, 0, 0, 0, 0, 0,0.000004],</div><br>
            <div style="float:left;">[10.0000,9.3650,0.0111,0.0082,0.0006,0.0274,0.0000,0.000004],</div><br>
            <div style="float:left;">[20.0000,9.2743,0.0390,0.0309,0.0091,0.0506,0.0000,0.000004],</div><br>
            <div style="float:left;">[30.0000,9.1586,0.0684,0.0589,0.0343,0.0584,0.0000,0.000004],</div><br>
            <div style="float:left;">[40.0000,9.0433,0.0901,0.0832,0.0715,0.0531,0.0001,0.000004],</div><br>
            <div style="float:left;">[50.0000,8.9413,0.1044,0.1013,0.1107,0.0441,0.0002,0.000004],</div><br>
            <div style="float:left;">[60.0000,8.8533,0.1139,0.1145,0.1468,0.0366,0.0004,0.000004],</div><br>
            <div style="float:left;">[70.0000,8.7754,0.1207,0.1245,0.1794,0.0315,0.0007,0.000004],</div><br>
            <div style="float:left;">[80.0000,8.7042,0.1259,0.1325,0.2095,0.0283,0.0010,0.000004],</div><br>
            <div style="float:left;">[90.0000,8.6372,0.1302,0.1392,0.2379,0.0263,0.0015,0.000004],</div><br>
            <div style="float:left;">[100.0000,8.5731,0.1337,0.1449,0.2652,0.0248,0.0020,0.000004],</div><br>
            <div style="float:left;">[110.0000,8.5111,0.1368,0.1499,0.2918,0.0238,0.0026,0.000004],</div><br>
            <div style="float:left;">[120.0000,8.4507,0.1395,0.1543,0.3179,0.0230,0.0032,0.000004]]],</div><br>
            <br>
            <div style="float:left;">各方程的反应速率常数和反应活化能的初值：</div><br>
            <div style="float:left;">"k0_e0": [3.9410e+09, 7.2655E+13, 3.0537e+09,   2.0515e+10, 4.3276e+05, 5.8511e+05, 5.5751e+06, 96335,    93745,    89522,    97733,    48514,    73059,    62138, 4500e+06, 320790],</div><br>
            <br>
            <div style="float:left;">实验温度（单位K）：</div><br>
            <div style="float:left;">"T": [443,448,453,458,463,443,443]</div><br>
            <div style="float:left;">}</div>
          </el-main>

          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible2 = false">确定</el-button>

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
    fileList: [],
    fd: {},
    dialogFormVisible2:false,

    };
  },

  methods: {
    gocaozuo(){
      this.$router.push({
        path:'../show_result',
      })
    },
    handleClick(){

      this.dialogFormVisible2=true

    },
    getfile(file, fileList) {
      const fd = new FormData()// FormData 对象
      this.fd = fd
    },
    httprequest(param) {
      const fileObj = param.file // 相当于input里取得的files
      this.fd.append('file', fileObj)// 文件对象
    },
    submituploadform() {
      this.$refs.upload.submit()

      request.post("api/cdata_post/", this.fd).then(res=>{
        if(res.data.code===200) {
          this.gocaozuo()
        }
        else {
          this.$message({
            type: "error",
            message: "上传失败！"
          })
        }
      })
      this.fd = {}
      this.fileList = []

    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },

  }

}
</script>

<style scoped>

</style>
