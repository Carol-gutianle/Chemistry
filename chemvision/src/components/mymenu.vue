<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu   router default-active="path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

      <el-submenu index="1">

        <template slot="title">
          <i class="el-icon-edit"></i>
          <span slot="title">管理</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="upload_data">甲苯仿生催化氧化动力学与反应器模拟仿真
          </el-menu-item>
          <el-menu-item index="background">实验背景</el-menu-item>
          <el-menu-item index="goal">实验目的</el-menu-item>
          <el-menu-item index="reagent">实验试剂</el-menu-item>
          <el-menu-item index="process">操作过程</el-menu-item>
          <el-menu-item index="mechanism">反应机理</el-menu-item>
          <el-menu-item index="report">实验报告</el-menu-item>

        </el-menu-item-group>

      </el-submenu>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
</style>

<script>
export default {
  name: "mymenu",
  data() {
    return {
      isCollapse: true,
      path:this.$route.path
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
