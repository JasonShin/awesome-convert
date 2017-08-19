<style>
  .cta {
    height: 50px;
  }
</style>

<template>
  <div class="cta">
    <el-button type="primary" v-on:click="this._onClick">Select a file</el-button>
    <el-dropdown>
      <span class="el-dropdown-link"><i class="el-icon-caret-bottom el-icon--right"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    methods: {
      _onClick() {
        this.$emit('on-click-cta')
      }
    }
  }
</script>
