<style scoped>
  .holder {
    border: 1px solid black;
    min-width: 300px;
    min-height: 300px;
  }
</style>
<template>
  <div class="holder"
       v-on:dragover="this.onDragover" v-on:drop="this.onDrop">
    drag and drop test
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
    },
    methods: {
      onDrop(e) {
        console.log('you have drag and dropped something! ', e.dataTransfer.files)
        e.preventDefault()
      },
      onDragover(e) {
        e.preventDefault()
      },
      previewFile(file) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const image = new Image();
          image.src = event.target.result;
          holder.appendChild(image);
        };
      }
    }
  }
</script>
