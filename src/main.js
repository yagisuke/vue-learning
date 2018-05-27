import Vue from 'vue'
import Hello from './components/hello.vue'

Vue.component('component-item', {
  template: `
    <div>template</div>
  `
})

Vue.component('component-props-item', {
  template: `
    <div>{{ content }}template</div>
  `,
  props: ['content']
})

new Vue({
  el: '#app',
  data: {
    count: 0,
    vShow: false,
    vIf: true,
    vForList: [0, 1, 2, 3, 4, 5],
    vForObject: {
      one: 1,
      two: 2,
      three: 3
    },
    vModelText: "default text",
    vModelTextArea: "default textarea",
    vModelChecked: false,
    vModelCheckedList: [],
    vModelRadio: "FM",
    vModelSelectBox: "",
    vModelMultiSelectBox: []
  },
  computed: {
    computedOddList() {
      return this.vForList.filter(num => { return num % 2 !== 0 })
    },
    computedEvenList() {
      return this.vForList.filter(num => { return num % 2 !== 1 })
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})

new Vue({
  el: '#todo',
  data: {
    todo: '',
    todoList: []
  },
  methods: {
    sendTodo() {
      this.todoList.push({
        text: this.todo,
        status: 'todo'
      })
      this.todo = ''
    },
    doneTodo(item) {
      if (item.status === 'done') {
        item.status = 'todo'
      } else {
        item.status = 'done'
      }
    },
    deleteTodo(item) {
      this.todoList = this.todoList.filter(todo => {
        return todo.text !== item.text
      })
    }
  }
})

new Vue({
  el: '#component',
  components: { Hello },
  template: '<hello></hello>'
})

import Vuex, { mapState } from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    maxCount: 10,
    minCount: 0,
    count: 0
  },
  mutations: {
    increment(state) {
      if (state.count === state.maxCount) return
      state.count++
    },
    decrement(state) {
      if (state.count === state.minCount) return
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
  },
  getters: {
    remainingCount(state) {
      return state.maxCount - state.count
    }
  }
})

new Vue({
  el: '#vuex',
  store,
  computed: {
    remainingCountWithPostfix() {
      return `${this.$store.getters.remainingCount}回`
    },
    ...mapState({
      countWithPostfix: state => `${state.count}回`
    })
  },
  methods: {
    increment() {
      store.dispatch('increment')
    },
    decrement() {
      store.dispatch('decrement')
    }
  }
})
