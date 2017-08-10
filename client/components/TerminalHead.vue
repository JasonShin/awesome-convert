<style scoped>
  .terminalHead {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #d7d7d7;
  }
  .red {
    background-color: #c23824;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .yellow {
    background-color: #f2c600;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .green {
    background-color: #1aaf5d;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .control {
    margin-left: 5px;
    margin-right: 5px;
  }
  .left {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 15%;
  }
  .center {
    width: 70%;
  }
  .right {
    width: 15%;
  }
</style>

<template>
  <div class="terminalHead">
    <div class="left">
      <div class="red control"></div>
      <div class="yellow control"></div>
      <div class="green control"></div>
    </div>
    <div class="center"></div>
    <div class="right"></div>
  </div>
</template>

<script>
  export default {
  
  }
</script>
