<style scoped>
  .page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .wrapper {
    width: 70%;
  }
  .dropzone {
    width: 100%;
    height: 500px;
  }
  .dropzone-preview {
    width: 60%;
    height: 60%;
  }
  .controls {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100px;
  }
  .acceptedFormat {
    width: 33.333%;
  }
</style>
<template>
  <div class="page">
    <div class="wrapper">
      <dragzone v-on:onDrop="this.onDrop"
                class="dropzone"
                v-bind:multiple="false"
                v-bind:minSize="'1kb'"
                v-bind:maxSize="'400mb'"
                v-bind:acceptedFormats="['jpeg', 'tiff', 'png']"
      >
        <div>
          <div v-for="file in this.acceptedFiles">
            Preview for {{ file.name }}
            <img class="dropzone-preview"
                 v-bind:src="file.preview"
            />
          </div>
        </div>
      </dragzone>
      <div class="controls">
        <div class="acceptedFormat">
          {{ acceptedFormat }}
        </div>
        <div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import R from 'ramda'
import Dragzone from 'components/Dragzone'
import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

export default {
  components: {
    ElButton,
    Dragzone,
  },
  data: () => ({
    acceptedFiles: [],
    rejectedFiles: [],
    acceptedFormat: '',
  }),
  methods: {
    onDrop(rejectedFiles, acceptedFiles) {
      this.acceptedFiles = acceptedFiles
      this.rejectedFiles = rejectedFiles
      const getHeadFormat = R.compose(
        R.prop('type'),
        R.head,
      )
      this.acceptedFormat = getHeadFormat(acceptedFiles)
    },
  },
}
</script>
