<style scoped>
  .terminal {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #2b3d50;
  }
  .head {
    height: 25px;
    width: 100%;
    border-bottom: 1px solid #AAA;
  }
  .body {
    height: calc(90% - 30px);
    color: #7daece;
    padding: 20px;
    overflow-y: scroll;
  }
  .terminalCommand {
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .body::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  .body::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  }
</style>

<template>
  <div class="terminal">
    <div class="head">
      <terminal-head></terminal-head>
    </div>
    <div class="body">
      <terminal-command class="terminalCommand" message="test command prompt! Upload your file!"></terminal-command>
      <terminal-progress></terminal-progress>
    </div>
  </div>
</template>

<script>
  import TerminalHead from './TerminalHead.vue'
  import TerminalCommand from './TerminalCommand.vue'
  import TerminalProgress from './TerminalProgress.vue'
  export default {
    components: {
      TerminalHead,
      TerminalCommand,
      TerminalProgress,
    }
  }
</script>
