<template>
  <div >
    <div style="height: 40px">
    </div>
    <div style="text-align: center;width: 100%; padding-left: 400px;margin: auto">
      <el-card style="width: 40%; margin: 10px">
        <p>上传数据</p>
        <el-form :model="newform1"  class="demo-ruleForm" label-position="left" label-width="80px"  status-icon :rules="rules" ref="newform">
          <el-form-item label="上传数据"  prop="uploadfile">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="/stuUpload"
              :http-request="httprequest"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              multiple
              :file-list="fileList"
              :data="newform1"
              :auto-upload="false"
              :on-change="getfile"
              name="uploadfile"
            >
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

            </el-upload>
          </el-form-item>
          <el-button type="primary" @click="gocaozuo">提交</el-button>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import request from "../util/request";
//检查姓名
var checksno = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入名字'));
  }
  else {callback();}
};
//检查密码
var checkspwd = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入密码'));
  }
  else {callback();}
};

export default {
  data() {
    return {
      form:{
        sno: '',
        spwd: '',
      },
      qno: '',
      rules: {
        sno:[ { validator: checksno, trigger: 'blur'  } ],
        spwd:[ { validator: checkspwd, trigger: 'blur'  } ]
      }
    };
  },

  methods: {
    gocaozuo(){
      this.$router.push({
        path:'../show_result',
      })
    },
    save(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          var qs = require('querystring')
          console.log(this.form)
          request.post("/stuLogin", qs.stringify(this.form)).then(res => {
            if(res.data.code===200) {
              this.qno = res.data["题号"]
              this.gocaozuo()
            } else {
              this.$message({
                type: "error",
                message: "账号或密码错误！"
              })
            }
          })
        }
        else {
          console.log('error')
        }
      });
    },
  }

}
</script>

<style scoped>

</style>
