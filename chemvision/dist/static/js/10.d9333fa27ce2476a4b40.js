webpackJsonp([10],{dun8:function(e,t){},lVuI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("D/cR"),r={name:"teacher_caozuo2",data:function(){return{search:""}},methods:{save:function(e){var t=this;this.$refs[e].validate(function(e){e&&a.a.post("/api/person/addPerson",t.form).then(function(e){console.log(e.data),0!==e.data?1===e.data?t.$message({type:"success",message:"成功添加"+t.form.name}):t.$confirm("用户名"+t.form.username+"已存在，需要修改信息吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.a.put("/api/person/updatePerson",t.form).then(function(e){console.log(e),"0"!==e.code&&t.$message({type:"success",message:"修改成功"})})}).catch(function(){t.$message({type:"info",message:"已取消修改"})}):t.$message({type:"error",message:"名称"+t.form.name+"重复,请重新填写"})})})}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{height:"40px"}}),e._v(" "),e._m(0),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[n("el-table-column",{attrs:{fixed:"",prop:"小组",label:"小组",width:"100"}}),e._v(" "),n("el-table-column",{attrs:{label:"查看报告",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.handleClick(t.row)}}},[e._v("查看")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"填写进度",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.handleClick(t.row)}}},[e._v("填写")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"批改分数",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.handleClick(t.row)}}},[e._v("批改")])]}}])})],1),e._v(" "),n("div",{staticStyle:{margin:"10px 0"}},[n("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[5,10,15,20],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"text-align":"center",margin:"auto"}},[t("i",{staticClass:"el-icon-edit-outline"}),this._v(" "),t("p",[this._v("选题情况")])])}]};var o=n("VU/8")(r,s,!1,function(e){n("dun8")},"data-v-387b2d82",null);t.default=o.exports}});
//# sourceMappingURL=10.d9333fa27ce2476a4b40.js.map