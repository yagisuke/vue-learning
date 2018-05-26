import Vue from 'vue'

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
