<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}: {{ count }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0
    }
  },
  methods: {
    countup: function() {
      this.count++
    }
  },
  beforeCreate: () => {
    console.log('ライフサイクルフック: beforeCreate')
  },
  created: () => {
    console.log('ライフサイクルフック: created')
  },
  beforeMount: () => {
    console.log('ライフサイクルフック: beforeMount')
  },
  mounted: () => {
    console.log('ライフサイクルフック: mounted')
  },
  beforeUpdate: () => {
    console.log('ライフサイクルフック: beforeUpdate')
  },
  updated: () => {
    console.log('ライフサイクルフック: updated')
  },
  beforeDestroy: () => {
    console.log('ライフサイクルフック: beforeDestroy')
  },
  destroyed: () => {
    console.log('ライフサイクルフック: destroyed')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
