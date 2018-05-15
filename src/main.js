import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      if (state.count === 0) {
        return
      }

      state.count--
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    decrement(context) {
      context.commit('decrement')
    }
  }
})

new Vue({
  el: '#app',
  computed: {
    count() {
      return store.state.count
    }
  },
  methods: {
    increment() {
      store.dispatch('increment')
    },
    decrement() {
      store.dispatch('decrement')
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
})
