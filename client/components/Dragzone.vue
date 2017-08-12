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
      No file was added yet
    </slot>
    <div v-for="file in acceptedFiles">
      <img v-bind:src="file.preview">
    </div>
    <input class="fileInput"
           v-bind:name="this.name"
           type="file"
           ref="fileInput"
    />
  </div>
</template>

<script>
  export default {
    // features: preview image ratio support
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
      name: null,
    }),
    methods: {
      // Events
      onDrop(e) {
        e.preventDefault()
        console.log('you have drag and dropped something! ', e.dataTransfer.files)
        // Accepting everything so far
        const acceptedFiles = this.getAcceptedFiles(e.dataTransfer.files)
        const rejectedFiles = this.getRejectedFiles(e.dataTransfer.files)
        const promises = acceptedFiles.map(file => this.getImageFile(file))
        Promise.all(promises).then(values => {
          // assign blob as preview on each file
          this.acceptedFiles = acceptedFiles.map((file, index) =>
            Object.assign(file, { preview: values[index] }))
          this.$emit('on-drop', rejectedFiles, this.acceptedFiles)
        })
      },
      onDragover(e) {
        e.preventDefault()
      },
      onFileButtonClick() {
        this.$refs.fileInput.click();
      },
      // Helpers
      getAcceptedFiles(rawFiles) {
        const files = Array.from(rawFiles)
        return files.filter(file => {
          const currentType = file.type.split('/').reverse()[0]
          const rule = new RegExp(currentType, 'i')
          // Accepted formats might not be lower cased
          return rule.test(this.acceptedFormats.map(f => f.toLowerCase()).join(''))
        })
      },
      getRejectedFiles(rawFiles) {
        const files = Array.from(rawFiles)
        return files.filter(file => {
          const currentType = file.type.split('/').reverse()[0]
          const rule = new RegExp(currentType, 'i')
          // Accepted formats might not be lower cased
          return !rule.test(this.acceptedFormats.map(f => f.toLowerCase()).join(''))
        })
      },
      getImageFile(file) {
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
