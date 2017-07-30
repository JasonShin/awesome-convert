<style>
  body {
    margin: 0;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont,
    'avenir next', avenir,
    helvetica, 'helvetica neue',
    Ubuntu,
    'segoe ui', arial,
    sans-serif;
  }
  .page {
    text-align: center;
  }
  /* nesting for the need to test postcss */
  code {
    background-color: red;
    padding: 3px 5px;
    border-radius: 2px;
  }
</style>

<template>
  <div id="app">
    <navigation />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from 'components/Navigation.vue'
  export default {
    components: {
      Navigation,
    }
  }
</script>
