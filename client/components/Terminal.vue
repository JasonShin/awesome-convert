<style>

</style>

<template>
  <div class="component">
    <dropzone id="myVueDropzone" url="https://httpbin.org/post" v-on:vdropzone-success="showSuccess">
      <!-- Optional parameters if any! -->
      <input type="hidden" name="token" value="xxx">
    </dropzone>
  </div>
</template>
<script>
  import Dropzone from 'vue2-dropzone'
  export default {
    components: {
      Dropzone
    }
  }
</script>