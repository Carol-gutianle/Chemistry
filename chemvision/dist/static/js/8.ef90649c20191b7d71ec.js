webpackJsonp([8],{"032F":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("D/cR"),s={name:"tiku",data:function(){return{search:""}},methods:{save:function(e){var t=this;this.$refs[e].validate(function(e){e&&n.a.post("/api/person/addPerson",t.form).then(function(e){console.log(e.data),0!==e.data?1===e.data?t.$message({type:"success",message:"成功添加"+t.form.name}):t.$confirm("用户名"+t.form.username+"已存在，需要修改信息吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.a.put("/api/person/updatePerson",t.form).then(function(e){console.log(e),"0"!==e.code&&t.$message({type:"success",message:"修改成功"})})}).catch(function(){t.$message({type:"info",message:"已取消修改"})}):t.$message({type:"error",message:"名称"+t.form.name+"重复,请重新填写"})})})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{height:"40px"}}),e._v(" "),e._m(0),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{fixed:"",prop:"题目号",label:"题目号",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"题目内容",label:"题目内容",width:"100"}})],1),e._v(" "),a("div",{staticStyle:{margin:"10px 0"}},[a("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[5,10,15,20],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"text-align":"center",margin:"auto"}},[t("i",{staticClass:"el-icon-tickets"}),this._v(" "),t("p",[this._v("题库内容")])])}]};var i=a("VU/8")(s,r,!1,function(e){a("nlPl")},"data-v-617bc212",null);t.default=i.exports},nlPl:function(e,t){}});
//# sourceMappingURL=8.ef90649c20191b7d71ec.js.map