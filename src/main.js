import Vue from 'vue'
import App from './App.vue'

var newInstance = new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    coountup: function() {
      this.count++
    }
  },
  beforeCreate: () => {
    console.log('ライフサイクルフック: beforeCreate')
    this.showFlg = true
    this.count++
  },
  created: () => {
    console.log('ライフサイクルフック: created')
    this.count++
  },
  beforeMount: () => {
    console.log('ライフサイクルフック: beforeMount')
    this.count++
  },
  mounted: () => {
    console.log('ライフサイクルフック: mounted')
    this.count++
  },
  beforeUpdate: () => {
    console.log('ライフサイクルフック: beforeUpdate')
    this.count++
  },
  updated: () => {
    console.log('ライフサイクルフック: updated')
    this.count++
  },
  beforeDestroy: () => {
    console.log('ライフサイクルフック: beforeDestroy')
    this.count++
  },
  destroyed: () => {
    console.log('ライフサイクルフック: destroyed')
  }
})
