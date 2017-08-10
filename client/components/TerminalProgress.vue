<style>
  .command {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
</style>

<template>
  <div class="command">
    <div>Progress {{ percent }}%</div>
    <div>[###]</div>
  </div>
</template>

<script>
  export default {
    props: {
      percent: Number,
    },
    methods: {
    
    }
  }
</script>