<style>
  .terminal {
    width: 60%;
    height: 500px;
  }
</style>
<template>
  <div class="page">
    <dragzone v-on:on-drop="this.onDrop"
              v-bind:multiple="true"
              v-bind:acceptedFormats="['jpeg', 'tiff']"
    >
      <div>
        <div v-for="file in this.acceptedFiles">
          Preview for {{ file.name }}
          <img v-bind:src="file.preview" />
        </div>
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
  },
  data: () => ({
    acceptedFiles: [],
    rejectedFiles: [],
  }),
  methods: {
    onDrop(rejectedFiles, acceptedFiles) {
      this.acceptedFiles = acceptedFiles
      this.rejectedFiles = rejectedFiles
      console.log('on drop home ', rejectedFiles, '   accepted ', acceptedFiles)
    },
  },
}
</script>
