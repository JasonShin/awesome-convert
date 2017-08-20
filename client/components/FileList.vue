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
  }
  .center {
    width: 20%;
  }
  .right {
    display: flex;
    flex-direction: row;
    width: 40%;
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
              value: 'Images',
              label: 'Images',
              children: [
                { value: 'jpg', label: 'jpg' },
                { value: 'png', label: 'png' },
                { value: 'gif', label: 'gif' },
              ]
            }, {
              value: 'Images',
              label: 'Images',
              children: [
                { value: 'jpg', label: 'jpg' },
                { value: 'png', label: 'png' },
                { value: 'gif', label: 'gif' },
              ]
            }
          ]"
          v-model="this._convertOptions"
        ></el-cascader>
      </div>
      <div class="right">
        <div class="status">ready</div>
        <div class="file-size">{{ file.size }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import El from 'element-ui'
  export default {
    props: {
      // Files to render
      files: Array,
    },
    components: {
      El,
    },
    mounted() {
      console.log('checking convert options ', this.convertOptions, '  ', this._convertOptions)
    },
    data: () => {
      console.log('checking convert options 22] ', this._convertOptions)
      return {
        _convertOptions: [
          {
            value: 'test2',
            label: 'test2',
          }
        ],
        selectedOptions: [],
      }
    },
    methods: {
      handleChange() {
        console.log('handling change! ');
      }
    },
  }
</script>
