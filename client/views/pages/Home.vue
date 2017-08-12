<style>
  .terminal {
    width: 60%;
    height: 500px;
  }
</style>
<template>
  <div class="page">
    <dragzone>
      <div>
        testing slot!!
      </div>
    </dragzone>
    <counter></counter>
    <div class="terminal">
      <terminal></terminal>
    </div>
    <el-button type="primary">Primary Button</el-button>
  </div>
</template>

<script>
import Counter from 'components/Counter'
import Terminal from 'components/Terminal'
import Dragzone from 'components/Dragzone'

export default {
  components: {
    Counter,
    Terminal,
    Dragzone,
  }
}
</script>
