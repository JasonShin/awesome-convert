<style>
  .icon {
    cursor: pointer;
  }
</style>

<template>
  <span class="icon" v-on:click="this.onClick">
    <i v-bind:class="this.customType" aria-hidden="true"></i>
  </span>
</template>

<script>
  export default {
    props: {
      type: String,
    },
    data() {
      console.log('checking type ', this.type)
      return {
        customType: `fa fa-${this.type}`
      }
    },
    methods: {
      onClick() {
        this.$emit('onClick')
      }
    }
  }
</script>
