<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

 .icon {
     width: 2em; height: 2em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
  }

  .placeholder {
    opacity: 0;
  }

  .placeholder_bar {
    width: 100vw;
    height: 3em;
  }
</style>
