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
    justify-content: center;
    align-items: center;
  }
  .content-inner {
    width: 70%;
  }
  .page .dropzone {
    width: 100%;
    height: 100%;
    border: 0;
  }
  .logo {
    text-align: center;
  }
  .cta-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
<template>
  <div class="page">
    <dragzone v-on:onDrop="this.onDrop"
              ref="dropzone"
              class="dropzone"
              v-bind:containerClick="false"
              v-bind:multiple="true"
              v-bind:minSize="'1kb'"
              v-bind:maxSize="'400mb'"
              v-bind:acceptedFormats="['jpeg', 'tiff', 'png']"
              v-bind:defaultStyle="{width: '100%', height: '100%', border: '1px solid black'}"
              v-bind:activeStyle="{width: '100%', height: '100%', border: '3px solid red'}"
    >
      <div class="content">
        <div class="content-inner">
          <div class="logo">
            <h1>Awesome convert anything to anything!</h1>
          </div>
          <div class="cta-wrapper">
            <call-to-action v-on:on-click-cta="this.onClickCta"></call-to-action>
          </div>
          <file-list v-bind:files="this.acceptedFiles"
                     v-bind:convertOptions="[
                       {
                         value: 'test',
                         label: 'test',
                       }
                     ]"
          ></file-list>
        </div>
      </div>
    </dragzone>
  </div>
</template>

<script>
  import R from 'ramda'
  import Dragzone from 'components/Dragzone'
  import FileList from 'components/FileList'
  import CallToAction from 'components/CallToAction'
  // TODO: Fix this
  import El from 'element-ui'
  
  export default {
    components: {
      El,
      Dragzone,
      FileList,
      CallToAction,
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
      onClickCta() {
        this.$refs.dropzone.open();
      }
    },
  }
</script>
