<style scoped>
  .component {
    display: flex;
    flex-direction: row;
    min-height: 50px;
    justify-content: space-between;
  }
  .left {
    display: flex;
    padding: 10px;
    width: 33%;
  }
  .center {
    display: flex;
    padding: 10px;
    width: 33%;
  }
  .right {
    display: flex;
    padding: 10px;
    width: 33%;
  }
  .menu {
    display: flex;
    justify-content: space-around;
  }
  .menu-item {
    margin-right: 10px;
  }
</style>

<template>
  <div class="component">
    <div class="left">awesome-convert</div>
    <div class="center" />
    <div class="right">
      <div class="menu">
        <div class="menu-item"
             v-for="item in navItems"
        >
          <router-link v-bind:to="item.url">{{ item.label }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      navItems: [
        { label: 'Home', url: '/' },
        { label: 'Sample Use Cases', url: 'sample' },
        { label: 'Contact us', url: 'contact' }
      ]
    })
  }
</script>
