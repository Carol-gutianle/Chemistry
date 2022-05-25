<template>
  <div class="container" style="min-height: 100%; padding-bottom: 100px;">
    <el-card class="box-card">
      <div slot="header" class="clearfix" align="center">
        <span>反应机理</span>
      </div>
      <div>
        <el-image
          style="width: 100%;height: 100%"
          :src = "require('../assets/mechanism_1.png')"
          fit = "scale-down"
          ></el-image>
      </div>
      <div class="text item" align="center">图 1甲苯仿生催化氧化过程中的生物循环-化学循环耦合</div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix" align="center">
        <span>反应动力学</span>
      </div>
      <div align="center">
        <el-image
          style="width: 30%;height: 50%"
          :src = "require('../assets/mechanism_2.png')"
          fit = "scale-down"
        ></el-image>
      </div>
      <div>
        由于该动力学方程组含有 10 个物种浓度，24 个模型参数，而在实验中只有苯甲醛、苯甲醇、苯甲酸、过氧化物苯甲酸苄酯被准确定量，在上面动力学模型关系式中含有一些自由基和活性中间体浓度项，这些自由基和活性中间体由于存在时间极短浓度很低很难通过实验手段测量其浓度，故通过稳态假设、过氧自由基浓度与过氧化物的浓度关系、控制步骤的确定对甲苯仿生催化氧化动力学进行简化如下：
      </div>
      <div align="center">
        <el-image
          style="width: 80%;height: 50%"
          :src = "require('../assets/mechanism_3.png')"
          fit = "scale-down"
        ></el-image>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix" align="center">
        <span>反应器模型</span>
      </div>
      <div class="text item">
        根据物料守恒的基本原则，对间歇釜反应器和平推流反应器做出如下假设：
        （1）在流动方向垂直的截面上没有流速分布。
        （2）在流体流动的方向由在流体质点间的混和，即无返混现象。
        （3）连续定态操作。
        由以上假设，可以建立反应器稳态模型如下：
      </div>
      <div align="center">
        <el-image
          style="width: 30%;height: 50%"
          :src = "require('../assets/mechanism_4.png')"
          fit = "scale-down"
        ></el-image>
      </div>
      <div class="text item">
        同理对全混流模型，做出假设如下：
        （1）物料连续以恒定的流速流入、流出反应器。
        （2）反应器内各空间位置温度一，浓度均一。
        （3）反应器内浓度、温度与 出口处浓度、温度相同。
        （4）定常态操作。
        由以上假设，可以建立反应器稳态模型如下：
      </div>
      <div align="center">
        <el-image
          style="width: 30%;height: 50%"
          :src = "require('../assets/mechanism_5.png')"
          fit = "scale-down"
        ></el-image>
      </div>
      <div class="text item">而对多釜串联模型，也有假设如下：
        （1）各个反应器内由在温度和浓度的分布。
        （2）反应液依次流入各个反应釜。
        （3）多釜反应器采用 n 个相同的反应器串联组合。
         因此，建立出多釜串联模型的稳态方程：  </div>
      <div align="center">
        <el-image
          style="width: 30%;height: 50%"
          :src = "require('../assets/mechanism_6.png')"
          fit = "scale-down"
        ></el-image>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "mechanism"
}
</script>

<style scoped>

</style>
