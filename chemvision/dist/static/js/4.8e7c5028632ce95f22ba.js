webpackJsonp([4],{u0bH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("RRo+"),r=a.n(s),n=a("D/cR"),o={name:"student_denglu",data:function(){return{form:{sno:"",sname:"",spass:""},search:"",rules:{sname:[{validator:function(e,t,a){t?a():a(new Error("请输入名字"))},trigger:"blur"}],sno:[{validator:function(e,t,a){t||a(),setTimeout(function(){r()(t)?a():a(new Error("请输入数字"))},1e3)},trigger:"blur"}],spass:[{validator:function(e,t,a){t?a():a(new Error("请输入密码"))},trigger:"blur"}]}}},methods:{save:function(e){var t=this;this.$refs[e].validate(function(e){e&&n.a.post("/api/person/addPerson",t.form).then(function(e){console.log(e.data),0!==e.data?1===e.data?t.$message({type:"success",message:"成功添加"+t.form.name}):t.$confirm("用户名"+t.form.username+"已存在，需要修改信息吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.a.put("/api/person/updatePerson",t.form).then(function(e){console.log(e),"0"!==e.code&&t.$message({type:"success",message:"修改成功"})})}).catch(function(){t.$message({type:"info",message:"已取消修改"})}):t.$message({type:"error",message:"名称"+t.form.name+"重复,请重新填写"})})})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{height:"40px"}}),e._v(" "),a("div",{staticStyle:{"text-align":"center",width:"100%","padding-left":"400px",margin:"auto"}},[a("el-card",{staticStyle:{width:"40%",margin:"10px"}},[a("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.form,"label-position":"left","label-width":"80px","status-icon":"",rules:e.rules}},[a("i",{staticClass:"el-icon-user-solid"}),e._v(" "),a("p",[e._v("学生登录")]),e._v(" "),a("el-form-item",{attrs:{label:"sno","label-width":e.formLabelWidth,prop:"sno"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入学号",clearable:""},model:{value:e.form.sno,callback:function(t){e.$set(e.form,"sno",t)},expression:"form.sno"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"sname","label-width":e.formLabelWidth}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入姓名",clearable:""},model:{value:e.form.sname,callback:function(t){e.$set(e.form,"sname",t)},expression:"form.sname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"spass","label-width":e.formLabelWidth}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入密码",clearable:""},model:{value:e.form.spass,callback:function(t){e.$set(e.form,"spass",t)},expression:"form.spass"}})],1),e._v(" "),a("div",{staticStyle:{margin:"50px"}})],1),e._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.save("form")}}},[e._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var i=a("VU/8")(o,l,!1,function(e){a("vu9s")},"data-v-e52fc3c6",null);t.default=i.exports},vu9s:function(e,t){}});
//# sourceMappingURL=4.8e7c5028632ce95f22ba.js.map