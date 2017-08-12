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
    props: {
      // Array of accepted formats such as pdf, jpg, png
      acceptedFormats: Array,
      // Children items to render
      children: {},
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
        const files = Array.from(e.dataTransfer.files)
        const promises = files.map(file => this.getImageFile(file))
        console.log('checking files ', files);
        Promise.all(promises).then(values => {
          console.log('resolved all promises ', values)
          // assign blob as preview on each file
          this.acceptedFiles = files.map((file, index) => Object.assign(file, { preview: values[index] }))
        })
      },
      onDragover(e) {
        e.preventDefault()
      },
      onFileButtonClick() {
        this.$refs.fileInput.click();
      },
      // Helpers
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
