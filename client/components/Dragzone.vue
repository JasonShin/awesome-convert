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
       v-on:dragover="this._onDragover"
       v-on:drop="this._onDrop">
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
  import bytes from 'bytes'
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
      // Max file size e.g. "10kb 10mb 10gb"
      maxSize: String,
      // Minimum file size e.g. "10kb 10mb 10gb"
      minSize: String,
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
          .then(values => this.$emit('onDrop', values.rejectedFiles, values.acceptedFiles))
          .catch(e => console.warn('Could not filter file list onSelect due to ', e))
      },
      // Events
      _onDrop(e) {
        e.preventDefault()
        console.log('you have drag and dropped something! ', e.dataTransfer.files)
        // Accepting everything so far
        const fileList = Array.from(e.dataTransfer.files)
        this.filterFileList(fileList).then(values =>
          this.$emit('onDrop', values.rejectedFiles, values.acceptedFiles))
          .catch(e => console.warn('Could not filter file list onDrop due to ', e))
      },
      _onDragover(e) {
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
              console.log('checking files ', files)
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
          // Get current file format from a file type e.g. "document/pdf"
          const currentType = file.type.split('/').reverse()[0]
          // Accepted formats might not be lower cased
          console.log('filtering file ', file)
          // Checking formats
          return this.checkFormats(currentType) &&
            // Checking file size by min and max
            this.checkFileSize(file.size)
        })
      },
      getRejectedFiles(files) {
        return files.filter(file => {
          // Get current file format from a file type e.g. "document/pdf"
          const currentType = file.type.split('/').reverse()[0]
          // Accepted formats might not be lower cased
          return !this.checkFormats(currentType) &&
            // Checking file size by min and max
            this.checkFileSize(file.size)
        })
      },
      /**
       * Checking file size restrictions
       * If neither minSize or maxSize were given,
       * it will always return true
       */
      checkFileSize(fileSize) {
        const min = bytes.parse(this.minSize)
        const max = bytes.parse(this.maxSize)
        if (min && max) {
          return fileSize > min && fileSize < max
        } else if (min) {
          return fileSize > min
        } else if (max) {
          return fileSize < max
        }
        return true
      },
      /**
       * Take currentType (single string value such as jpg, jpeg, png, pdf)
       * And compare it against
       * @param currentType
       * @returns {boolean}
       */
      checkFormats(currentType) {
        const rule = new RegExp(currentType, 'i')
        // Accepted formats might not be lower cased
        return rule.test(this.acceptedFormats.map(f => f.toLowerCase()).join(''))
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
