<template>
    <div >

    <el-menu  router default-active="path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-menu-item index="upload_data">
            <i class="el-icon-setting"></i>
            甲苯仿生催化氧化动力学模拟
          </el-menu-item>

          <el-menu-item index="background">
            <i class="el-icon-document"></i>
            实验背景
          </el-menu-item>
          <el-menu-item index="goal">
            <i class="el-icon-document"></i>
            实验目的
          </el-menu-item>
          <el-menu-item index="reagent">
            <i class="el-icon-document"></i>
            实验试剂
          </el-menu-item>
          <el-menu-item index="process">
            <i class="el-icon-document"></i>
            操作过程
          </el-menu-item>
          <el-menu-item index="mechanism">
            <i class="el-icon-document"></i>
            反应机理
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-document"></i>
            <el-link :href="tableData.url" target="_blank">实验报告链接</el-link>
          </el-menu-item>

    </el-menu>

</div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 100vh;
}
</style>

<script>
export default {
  name: "mymenu",
  data() {
    return {
      isCollapse: false,
      path:this.$route.path,
      tableData:{"url":"http://server.vaiwan.cn/media/lab.pdf"}
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

  }
}
</script>

<style scoped>


</style>
