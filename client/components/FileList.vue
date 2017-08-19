<style scoped>
  
  .file-list {
    display: flex;
    flex-direction: column;
  }
  .file-entry {
    display: flex;
    align-items: center;
    height: 20px;
    width: 100%;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    border-radius: 4px;
    flex-direction: row;
    margin-bottom: 10px;
    padding: 10px;
  }
</style>

<template>
  <div class="file-list">
    <div class="file-entry"
         v-for="file in this.files">
      <div>Preview for {{ file.name }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      files: Array,
    }
  }
</script>
