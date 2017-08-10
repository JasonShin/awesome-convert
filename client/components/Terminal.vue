<style scoped>
  .terminal {
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #2b3d50;
  }
  .head {
    height: 40px;
    width: 100%;
  }
</style>

<template>
  <div class="terminal">
    <div class="head">
      <terminal-head></terminal-head>
    </div>
    test
  </div>
</template>

<script>
  import TerminalHead from './TerminalHead.vue'
  export default {
    components: {
      TerminalHead,
    }
  }
</script>
