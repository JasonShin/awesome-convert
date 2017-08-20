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
  .preview-icon {
    margin-right: 5px;
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
  .controls {
    flex-grow: 1;
    text-align: right;
  }
</style>

<template>
  <div class="file-list">
    <div class="file-entry"
         v-for="file in this.files">
      <div class="left">
        <div>
          <span v-if="getTypeIcon(file.type) === 'image'"
                class="preview-icon"
          >
            <icon type="file-image-o"></icon>
          </span>
          <span v-else-if="getTypeIcon(file.type) === 'document'"
                class="preview-icon"
          >
            <icon type="file-pdf-o"></icon>
          </span>
          <span v-else
                class="preview-icon"
          >
            <icon type="file-o"></icon>
          </span>
          <span>{{ file.name }}</span>
        </div>
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
        <div class="controls"><icon type="times"></icon></div>
      </div>
    </div>
  </div>
</template>

<script>
  import R from 'ramda'
  import bytes from 'bytes'
  import Icon from 'components/Icon'
  import El from 'element-ui'
  export default {
    props: {
      // Files to render
      files: Array,
    },
    components: {
      El,
      Icon,
    },
    data: () => {
      return {
        selectedOption: ['images', 'jpg'],
      }
    },
    methods: {
      /**
       * Handle change
       */
      handleChange() {
        console.log('handling change! ');
      },
      /**
       * Get humanreadable file size
       * @param size
       */
      getPrettySize: (size) => bytes(size),
      /**
       * get icon type
       * @param type
       */
      getTypeIcon(type) {
        if (R.test(/image/g, type)) {
          return 'image'
        } else if (R.test(/document/g, type)) {
          return 'document'
        }
        return 'default'
      }
    },
  }
</script>
