<style>
  .terminal {
    width: 60%;
    height: 500px;
  }
</style>
<template>
  <div class="page">
    <dragzone v-on:onDrop="this.onDrop"
              v-bind:multiple="false"
              v-bind:minSize="'1kb'"
              v-bind:maxSize="'100mb'"
              v-bind:acceptedFormats="['jpeg', 'tiff', 'png']"
    >
      <div>
        <div v-for="file in this.acceptedFiles">
          Preview for {{ file.name }}
          <img v-bind:src="file.preview" />
        </div>
      </div>
    </dragzone>
  </div>
</template>

<script>
import Dragzone from 'components/Dragzone'

export default {
  components: {
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
