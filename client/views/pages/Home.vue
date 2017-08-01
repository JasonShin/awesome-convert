<template>
  <div class="page">
    <counter></counter>
    <p>
      <el-button type="primary">Primary Button</el-button>
      checking dropzone
      <dropzone-list></dropzone-list>
      test To get started, edit files in <code>./client</code> and save ???.
    </p>
  </div>
</template>

<script>
import Counter from 'components/Counter'
import DropzoneList from 'components/DropzoneList'

export default {
  components: {
    Counter,
    DropzoneList,
  }
}
</script>
