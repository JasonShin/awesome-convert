<style scoped>
  
  .file-list {
    display: flex;
    flex-direction: column;
  }
  .file-entry {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20px;
    width: 100%;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 10px;
  }
  .left {
    width: 40%;
    padding: 10px;
  }
  .center {
    width: 20%;
    padding: 10px;
  }
  .right {
    display: flex;
    flex-direction: row;
    width: 40%;
    padding: 10px;
    align-items: center;
  }
  .status--ready {
    background-color: #3a87ad;
    color: white;
    border-radius: 20px;
    padding: 3px 6px;
  }
  .file-size {
    margin-left: 5px;
  }
</style>

<template>
  <div class="file-list">
    <div class="file-entry"
         v-for="file in this.files">
      <div class="left">
        <div>{{ file.name }}</div>
      </div>
      <div class="center">
        <el-cascader v-bind:options="[
            {
              value: 'images',
              label: 'Images',
              children: [
                { value: 'jpg', label: 'jpg' },
                { value: 'png', label: 'png' },
                { value: 'gif', label: 'gif' },
              ],
            }, {
              value: 'documents',
              label: 'Documents',
              children: [
                { value: 'jpg', label: 'jpg' },
                { value: 'png', label: 'png' },
                { value: 'gif', label: 'gif' },
              ],
            }
          ]"
                     v-model="this.selectedOption"
                     
        ></el-cascader>
      </div>
      <div class="right">
        <div class="status--ready">ready</div>
        <div class="file-size">{{ getPrettySize(file.size) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import bytes from 'bytes'
  import El from 'element-ui'
  export default {
    props: {
      // Files to render
      files: Array,
    },
    components: {
      El,
    },
    data: () => {
      return {
        selectedOption: ['images', 'jpg'],
      }
    },
    methods: {
      handleChange() {
        console.log('handling change! ');
      },
      getPrettySize: (size) => bytes(size)
    },
  }
</script>
