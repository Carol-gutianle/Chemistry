webpackJsonp([8],{GjFb:function(e,t){},J2py:function(e,t){},Jztw:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},i=n("VU/8")({name:"app"},l,!1,null,null,null).exports,o=n("/ocq"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{height:"50px","line-height":"50px","border-bottom":"1px solid #ccc",display:"flex"}},[t("div",{staticStyle:{"text-align":"center",width:"100%","padding-left":"30px","font-weight":"bold",color:"dodgerblue"}},[this._v("五朵金花化学虚拟仿真平台")]),this._v(" "),t("div",{staticStyle:{flex:"1"}}),this._v(" "),t("div",{staticStyle:{width:"100px"}})])}]};var s={name:"mymenu",data:function(){return{isCollapse:!0,path:this.$route.path,tableData:{url:"http://127.0.0.1:8000/media/lab.pdf"}}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-radio-group",{staticStyle:{"margin-bottom":"20px"},model:{value:e.isCollapse,callback:function(t){e.isCollapse=t},expression:"isCollapse"}},[n("el-radio-button",{attrs:{label:!1}},[e._v("展开")]),e._v(" "),n("el-radio-button",{attrs:{label:!0}},[e._v("收起")])],1),e._v(" "),n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:"","default-active":"path",collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-edit"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("管理")])]),e._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"upload_data"}},[e._v("甲苯仿生催化氧化动力学与反应器模拟仿真\n          ")]),e._v(" "),n("el-menu-item",{attrs:{index:"background"}},[e._v("实验背景")]),e._v(" "),n("el-menu-item",{attrs:{index:"goal"}},[e._v("实验目的")]),e._v(" "),n("el-menu-item",{attrs:{index:"reagent"}},[e._v("实验试剂")]),e._v(" "),n("el-menu-item",{attrs:{index:"process"}},[e._v("操作过程")]),e._v(" "),n("el-menu-item",{attrs:{index:"mechanism"}},[e._v("反应机理")]),e._v(" "),n("el-menu-item",[n("el-link",{attrs:{href:e.tableData.url,target:"_blank"}},[e._v("实验报告链接")])],1)],1)],2)],1)],1)},staticRenderFns:[]};var c={name:"layout",components:{myhead:n("VU/8")({name:"myhead"},r,!1,function(e){n("RWlY")},"data-v-4ccca639",null).exports,mymenu:n("VU/8")(s,u,!1,function(e){n("GjFb"),n("Jztw")},"data-v-355340b0",null).exports}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("myhead"),this._v(" "),t("div",{staticStyle:{display:"flex"}},[t("mymenu"),this._v(" "),t("router-view",{staticStyle:{flex:"1"}})],1)],1)},staticRenderFns:[]};var m=n("VU/8")(c,d,!1,function(e){n("J2py")},null,null).exports;a.default.use(o.a);var p=new o.a({mode:"history",base:"/chemistry/",routes:[{path:"/",name:"layout",component:m,redirect:"/upload_data",children:[{path:"upload_data",name:"upload_data",component:function(){return n.e(3).then(n.bind(null,"ziM6"))}},{path:"show_result",name:"show_result",component:function(){return n.e(0).then(n.bind(null,"ojD+"))}},{path:"background",name:"background",component:function(){return n.e(4).then(n.bind(null,"o96f"))}},{path:"reagent",name:"reagent",component:function(){return n.e(6).then(n.bind(null,"zpDs"))}},{path:"goal",name:"goal",component:function(){return n.e(5).then(n.bind(null,"F3Ox"))}},{path:"mechanism",name:"mechanism",component:function(){return n.e(1).then(n.bind(null,"Aa2k"))}},{path:"process",name:"process",component:function(){return n.e(2).then(n.bind(null,"Wevm"))}}]}]}),h=n("zL8q"),v=n.n(h),f=(n("tvR6"),n("wUZ8")),_=n.n(f),b=n("mtWM"),x=n.n(b);a.default.config.productionTip=!1,a.default.use(v.a,{locale:_.a,size:"small"}),x.a.defaults.baseURL="http://server.vaiwan.cn",new a.default({router:p,render:function(e){return e(i)}}).$mount("#app")},RWlY:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d6f5531ef779ea2d3108.js.map