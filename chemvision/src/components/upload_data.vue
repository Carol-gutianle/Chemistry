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
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button type="primary" @click="submituploadform()">提交</el-button>

            </el-upload>

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

    };
  },

  methods: {
    gocaozuo(){
      this.$router.push({
        path:'../show_result',
      })
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
