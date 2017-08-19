<style scoped>
  .page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .wrapper {
    width: 70%;
  }
  .page .dropzone {
    width: 100%;
    height: 100%;
    border: 0;
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
  .cta-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cta {
    height: 50px;
  }
</style>
<template>
  <div class="page">
    <dragzone v-on:onDrop="this.onDrop"
              class="dropzone"
              v-bind:multiple="false"
              v-bind:minSize="'1kb'"
              v-bind:maxSize="'400mb'"
              v-bind:acceptedFormats="['jpeg', 'tiff', 'png']"
              v-bind:style="{width: '100%', height: '100%', border: '1px solid black'}"
              v-bind:activeStyle="{width: '100%', height: '100%', border: '3px solid red'}"
    >
      <div class="content">
        <div class="cta-wrapper">
          <div class="cta">
            <el-button type="primary">Select a file</el-button>
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
        </div>
        <div v-for="file in this.acceptedFiles">
          Preview for {{ file.name }}
          <img class="dropzone-preview"
               v-bind:src="file.preview"
          />
        </div>
      </div>
    </dragzone>
  </div>
</template>

<script>
import R from 'ramda'
import Dragzone from 'components/Dragzone'
// TODO: Fix this
import El from 'element-ui'

export default {
  components: {
    El,
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
