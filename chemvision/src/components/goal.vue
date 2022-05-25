<template>
  <div class="container" style="min-height: 100%; padding-bottom: 100px;">
    <el-card class="box-card">
      <div slot="header" class="clearfix" align="center">
        <span>实验目的</span>
      </div>
      <div class="text item">1.构建复杂反应动力学模型</div>
      <div class="text item">2.对模型参数进行数值求解并进行优化。</div>
      <div class="text item">3.建立反应器模型并对反应器模型进行优化。</div>
      <div class="text item">4.掌握仿真平台在已知动力学反应中的仿真模拟与运用。</div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      o: "",
    }
  },
  watch: {},
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  destoryed() {},
  methods: {
    request() {},
  },
  fillter: {},
}
</script>

<style scoped>
.box-card{}
.clearfix{}
.container{}
.text{}
.item { margin-top: 10px; margin-right: 40px; }
</style>
