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
    <div><span>[</span> <span>{{ hashes }}</span> <span>]</span></div>
  </div>
</template>

<script>
  export default {
    props: {
      percent: Number,
      hashes: Array,
    },
    data: () => ({
      hash: '=',
      hashLast: '>',
    }),
    mounted() {
      // For testing: renders initial hash
      this.renderHash();
    },
    methods: {
      renderHash() {
        this.hashes = '===='
      }
    }
  }
</script>