<style scoped>
  .holder-base {
  
  }
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
  <div v-bind:style="this.holderStyle ? this.holderStyle : this.defaultHolderStyle"
       v-on:click="this._onFileButtonClick"
       v-on:dragover="this._onDragover"
       v-on:drop="this._onDrop">
    drag and drop test
    <slot>
      No file was added yet.
    </slot>
    <input class="fileInput"
           v-on:change="this._onSelect"
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
      // List of files to display using default layout
      values: [],
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
      // Default style
      style: String,
      // Class used when drag over is active and accepted
      activeStyle: String,
      // Class used when drag over is active and rejected
      rejectStyle: String,
    },
    data: () => ({
      // Default holder style\
      defaultHolderStyle: { border: '3px dotted #323232', borderRadius: '20px', minWidth: '300px', minHeight: '300px' },
      holderStyle: null,
      name: null,
    }),
    methods: {
      _onSelect(e) {
        const fileList = Array.from(e.target.files)
        this.filterFileList(fileList)
          .then(values => this.$emit('onDrop', values.rejectedFiles, values.acceptedFiles))
          .catch(e => console.warn('Could not filter file list onSelect due to ', e))
      },
      /**
       * Event STARTS
       */
      _onDrop(e) {
        e.preventDefault()
        // Accepting everything so far
        const fileList = [Array.from(e.dataTransfer.files)]
          .map(x => {
            if (this.multiple) {
              // If it's multiple, just return all
              return x
            } else if (!this.multiple && x.length > 1) {
              // If multiple is false but it has more than 1
              // It returns just head portion
              // Make sure to box it again since it's a single value
              return [x[0]]
            }
            // Else, just return whatever
            return x
          })
          .pop()
        /**
         * .map(x => {
            if (this.multiple) {
              // If it's multiple, just return all
              return x
            } else if (!this.multiple && x.length > 1) {
              // If multiple is false but it has more than 1
              // It returns just head portion
              return x[0]
            }
            // Else, just return whatever
            return x
          })
         .pop()
         */
        this.filterFileList(fileList).then(values =>
          this.$emit('onDrop', values.rejectedFiles, values.acceptedFiles))
          .catch(e => console.warn('Could not filter file list onDrop due to ', e))
      },
      _onDragover(e) {
        e.preventDefault()
      },
      _onFileButtonClick() {
        this.$refs.fileInput.click();
      },
      /**
       * Event ENDS
       */
      /**
       * Styles STARTS
       */
      /**
       * Styles ENDS
       */
      /**
       * Helpers STARTS
       */
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
          // Get current file format from a file type e.g. "document/pdf"
          const currentType = file.type.split('/').reverse()[0]
          // Accepted formats might not be lower cased
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
          return !this.checkFormats(currentType) ||
            // Checking file size by min and max
            !this.checkFileSize(file.size)
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
      },
      /**
       * Helpers ENDS
       */
    },
  }
</script>
