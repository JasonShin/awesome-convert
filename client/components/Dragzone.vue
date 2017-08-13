<style scoped>
  .holder {
    border: 3px dotted #323232;
    border-radius: 20px;
    min-width: 300px;
    min-height: 300px;
  }
  .fileInput {
    display: none;
  }
</style>
<template>
  <div class="holder"
       v-on:click="this.onFileButtonClick"
       v-on:dragover="this.onDragover"
       v-on:drop="this.onDrop">
    drag and drop test
    <slot>
      No file was added yet.
    </slot>
    <input class="fileInput"
           v-on:change="this.onSelect"
           v-bind:name="this.name"
           v-bind:multiple="this.multiple"
           type="file"
           ref="fileInput"
    />
  </div>
</template>

<script>
  export default {
    // features: preview image ratio support
    // Get human readable filesize
    props: {
      // Array of accepted formats such as pdf, jpg, png
      acceptedFormats: Array,
      // Children items to render
      children: {},
      // Callback to ondrop
      onDrop: Function,
      // Callback to dragover
      onDragover: Function,
      // Disables e.preventdefault onDrop
      preventDropOnDocument: Boolean,
      // Extra props to inputs
      inputProps: Array,
      // Allow multiple drag and drop
      multiple: Boolean,
      // Name attribute for the input tag
      name: String,
      // Max file size
      maxSize: Number,
      // Minimum file size
      minSize: Number,
    },
    data: () => ({
      acceptedFiles: [],
      rejectedFiles: [],
      name: null,
    }),
    methods: {
      onSelect(e) {
        const fileList = Array.from(e.target.files)
        this.filterFileList(fileList)
          .then(values => this.$emit('on-drop', values.rejectedFiles, values.acceptedFiles))
          .catch(e => console.warn('Could not filter file list onSelect due to ', e))
      },
      // Events
      onDrop(e) {
        e.preventDefault()
        console.log('you have drag and dropped something! ', e.dataTransfer.files)
        // Accepting everything so far
        const fileList = Array.from(e.dataTransfer.files)
        this.filterFileList(fileList).then(values =>
          this.$emit('on-drop', values.rejectedFiles, values.acceptedFiles))
          .catch(e => console.warn('Could not filter file list onDrop due to ', e))
      },
      onDragover(e) {
        e.preventDefault()
      },
      onFileButtonClick() {
        this.$refs.fileInput.click();
      },
      // Helpers
      filterFileList(fileList) {
        return new Promise((res, rej) => {
          try {
            const promises = fileList.map(file => this.getBlobFile(file))
            Promise.all(promises).then(values => {
              // assign blob as preview on each file
              const files = fileList.map((file, index) =>
                Object.assign(file, { preview: values[index] }))
              const acceptedFiles = this.getAcceptedFiles(files)
              const rejectedFiles = this.getRejectedFiles(files)
              return res({ rejectedFiles, acceptedFiles })
              // this.$emit('on-drop', rejectedFiles, acceptedFiles)
            })
          } catch (e) {
            return rej(e)
          }
        })
      },
      getAcceptedFiles(files) {
        return files.filter(file => {
          const currentType = file.type.split('/').reverse()[0]
          const rule = new RegExp(currentType, 'i')
          // Accepted formats might not be lower cased
          return rule.test(this.acceptedFormats.map(f => f.toLowerCase()).join(''))
        })
      },
      getRejectedFiles(files) {
        return files.filter(file => {
          const currentType = file.type.split('/').reverse()[0]
          const rule = new RegExp(currentType, 'i')
          // Accepted formats might not be lower cased
          return !rule.test(this.acceptedFormats.map(f => f.toLowerCase()).join(''))
        })
      },
      getBlobFile(file) {
        return new Promise((resolve, reject) => {
          try {
            const objectURL = window.URL.createObjectURL(file)
            resolve(objectURL)
          } catch (e) {
            return reject(e)
          }
        })
        
      }
    }
  }
</script>
