<template>
  <div>{{ prompt }} {{ message }}</div>
</template>

<script>
  export default {
    props: {
      message: String
    },
    data: () => ({
      prompt: '#',
    }),
  }
</script>
