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

import Vuex, { mapState, mapMutations } from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    minCount: 0,
    maxCount: 10,
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
    },
    multiplication(state, payload) {
      const val = state.count * payload.number
      state.count = (val > state.maxCount) ? state.maxCount : val
    }
  },
  actions: {
    double(context) {
      context.commit('multiplication', {
        number: 2
      })
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
    ...mapMutations(['increment', 'decrement']),
    double() {
      store.dispatch('double')
    }
  }
})

const incrementModule = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    count: (state, payload) => {
      state.count += payload.count
    }
  },
  actions: {
    count (context) {
      context.commit('count', { count: 1 })
    }
  }
}

const decrementModule = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    count: (state, payload) => {
      state.count -= payload.count
    }
  },
  actions: {
    count (context) {
      context.commit('count', { count: 1 })
    }
  }
}

const counterStore = new Vuex.Store({
  modules: {
    incrementModule,
    decrementModule
  }
})

new Vue({
  el: '#vuex-module',
  counterStore,
  computed: {
    incrementCount() {
      return counterStore.state.incrementModule.count
    },
    decrementCount() {
      return counterStore.state.decrementModule.count
    },
    count() {
      return this.incrementCount + this.decrementCount
    }
  },
  methods: {
    increment() {
      counterStore.dispatch('incrementModule/count')
    },
    decrement() {
      counterStore.dispatch('decrementModule/count')
    }
  }
})

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const PageA = {
  template: '<div>page a</div>'
}

const PageB = {
  template: '<div>page b</div>'
}

const Page = {
  props: ['pageId'],
  template: '<div>page {{ pageId }}</div>'
}

const User = {
  template: `
    <div class="user">
      User Layout<br>
      ------
      <router-view></router-view>
    </div>
  `
}

const UserProfile = {
  template: `
    <div>
      profile
      <ul>
        <li>name: hoge</li>
        <li>age: 18</li>
      </ul>
    </div>
  `
}

const UserNotifications = {
  template: `
    <div>
      notifications
      <div>
        <input type="checkbox" name="mail" value="1">mail<br>
        <input type="checkbox" name="push" value="1">push
      </div>
    </div>
  `
}

const routes = [
  { path: '/a', component: PageA },
  { path: '/b', component: PageB },
  { path: '/page/:pageId', component: Page, props: true },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'notifications',
        component: UserNotifications
      }
    ]
  },
  { path: '/old', redirect: '/a' },
  { path: '/oldUser', redirect: to => {
    return '/user/profile'
  }},
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#vue-router')
