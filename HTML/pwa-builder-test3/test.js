const blog = Vue.createApp({
  data() {
    return {
      article: '',
      comment_text: '',
    }
  },
  methods: {
    save() {
      article_lists.list.push(
        {
          id: article_lists.highestIdNumPlusOne(),
          article: this.article,
          comment_list: []
        }
      )
    },
    inputFn() {
      article_lists.list[article_lists.editing].article = this.article
    },
    comment_save() {
      article_lists.list[article_lists.editing].comment_list
        .push(
          {comment: this.comment_text}
        )
    },
  },
}).mount('.blog');

const article_lists = Vue.createApp({
  data() {
    return{
      editing: 0,
      list: [ ]
    }
  },
  methods: {
    load(IDX) {
      blog.article = this.list[IDX].article;
      this.editing = IDX;
    },
    highestIdNumPlusOne() {
        let id = 0;
        try {
          id = this.list.sort((a, b)=> a.id - b.id).slice(-1)[0].id + 1;
        } catch (error) { console.log(error) }
        return id;
    }
  }
}).mount('.article_lists');

function test_exe(){
  const test0 = (text) => blog.article = text;
  const test1 = () => blog.save();
  const test2 = () => {
    article_lists.load(0);
    article_lists.load(1);
    article_lists.load(2);
  }
  const test3 = (id, text) => {
    article_lists.load(id);
    blog.comment_text = text;
    blog.comment_save();
  }
  test0("foo");
  test1();
  test0("bar");
  test1();
  test0("foo\nbar\nBUZ");
  test1();
  test2();
  const comment_sample = [
    {id: 0, comment: "foo is FOO"},
    {id: 1, comment: "bar is BAR"},
    {id: 0, comment: "foo2 is FOO2"},
  ]
  comment_sample.forEach(SAMPLE=> test3(SAMPLE.id, SAMPLE.comment) )
}

const test = Vue.createApp({
  data() { },
  methods: {
    exe: test_exe
  }
}).mount('.test');


const Counter = {
      data() {
        return {
          counter: 0
    }
  }
}
Vue.createApp(Counter).mount('#counter')

const Counter2 = {
      data() {
        return {
          counter2: 0
    }
  }
}
Vue.createApp(Counter2).mount('#counter2')

const Counter3 = {
  data() {
    return {
      counter3: 0
  }
  },
  // mounted() {
  //       setInterval(() => {
  //         this.counter3++
  //   }, 1000)
  // }
}
Vue.createApp(Counter3).mount('#counter3')

const AttributeBinding = {
      data() {
        return {
          message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  }
}
Vue.createApp(AttributeBinding).mount('#bind-attribute')

const EventHandling = {
      data() {
        return {
          message2: 'Hello Vue.js!'
    }
  },
  methods: {
        reverseMessage() {
          this.message2 = this.message2
            .split('')
            .reverse()
            .join('')
    }
  }
}
Vue.createApp(EventHandling).mount('#event-handling')

const TwoWayBinding = {
      data() {
        return {
          message3: 'Hello Vue Text!!'
    }
  }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')


const ConditionalRendering = {
      data() {
        return {
          seen: true
    }
  }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

const ConditionalRendering2 = {
      data() {
        return {
          seen: true
    }
  }
}

Vue.createApp(ConditionalRendering2).mount('#conditional-rendering')

const ListRendering = {
      data() {
        return {
          todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
      ]
    }
  }
}
Vue.createApp(ListRendering).mount('#list-rendering')


Vue.createApp({
  data(){
    return{
      str : "FOO"
    }
  },
  methods: {
    bar() {
      this.str = this.str + "bar" 
    }
}
}).mount('.foo')

const vmM = Vue.createApp({
  data(){
    return{
      msg : "MSG",
      msg2 : "MSG2"
    }
  },
  methods:{
    change1(){ this.msg = "MSG10" },
    change2(){ this.msg2 = "MSG200" },
  }
})
.mount(".foo2")


Vue.createApp({
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  }
})
.mount("#computed-basics")


Vue.createApp({
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    // 算出 getter 関数
    publishedBooksMessage() {
      // `this` は vm インスタンスを指す
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}).mount('#computed-basics2')





Vue.createApp({
  data() {
    return {
      items: [{ message: 'Foo' }, { message: 'Bar' }]
    }
  }
}).mount('#array-rendering')


const obj = Vue.createApp({
  data() {
    return {
      parentMessage: 'Parent',
      items: [
        { id: '0', message: 'Foo' },
        { id: '1', message: 'Bar' }
      ]
    }
  },
  methods: {
    filterObj() {
      this.items = this.items.filter(item => item.message.match(/Foo/))
  }
}
}).mount('#array-with-index')
obj.items.push({ id: '2', message: 'Baz' })

Vue.createApp({
  data() {
    return {
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  }
}).mount('#v-for-object')


Vue.createApp({
  data() {
    return {
      numbers: [ 1, 2, 3, 4, 5 ]
    }
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(number => number % 2 === 0)
    }
  }
}).mount('#even')

Vue.createApp({}).mount('#range')

Vue.createApp({
  data() {
    return {
      items: [{ msg: 'Foo' }, { msg: 'Bar' }]
    }
  }
}).mount('#v-for-template')



const obj2 = Vue.createApp({
  data() {
    return {
      todos: [
        { short: 0, name: 'Foo' },
        { short: 1, name: 'Bar' },
        { short: 2, name: 'Buz' }
      ]
    }
  }
}).mount('#v-if-with-for')

Vue.createApp({
  data() {
    return {
      counter: 0
    }
  }
}).mount('#basic-event')


Vue.createApp({
  data() {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    greet(event) {
      // メソッド内の `this` は、 Vue インスタンスを参照します
      alert('Hello ' + this.name + '!')
      // `event` は、ネイティブ DOM イベントです
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}).mount('#event-with-method')


Vue.createApp({
  methods: {
    say(message) {
      alert(message)
    }
  }
}).mount('#inline-handler')

Vue.createApp({
  methods: {
    warn(message, event) {
      // ネイティブイベントを参照しています
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
  }
}).mount('#inline-handler2')

Vue.createApp({
  methods: {
    one(event) {
      alert(`event ONE is ${event.target.dataset.foo}`)
    },
    two(event) {
      alert(`event TWO is ${event.target.dataset.foo}`)
    }
  }
}).mount('#inline-handler3')

Vue.createApp({
  methods: {
    submit() {
      alert(`ENTER KEYUP`)
    },
    arrow_right() {
      alert(`arrowRight`)
    },
    onlyCtrl() {
      alert(`onlyCtrl`)
    },
    withoutMetaKey() {
      alert(`withoutMetaKey`)
    },
  }
}).mount('#inline-handler4')

Vue.createApp({
  data() {
    return {
      message: ''
    }
  }
}).mount('#v-model-basic')

Vue.createApp({
  data() {
    return {
      message: ''
    }
  }
}).mount('#v-model-textarea')


Vue.createApp({
  data() {
    return {
      checked: false
    }
  }
}).mount('#v-model-checkbox')

Vue.createApp({
  data() {
    return {
      checkedNames: []
    }
  }
}).mount('#v-model-multiple-checkboxes')

Vue.createApp({
  data() {
    return {
      picked: ''
    }
  }
}).mount('#v-model-radiobutton')
// const TodoItem = {
//       props: ['todo2'],
//       template: `<li>{{ todo2.text2 }}</li>`
// }
// const TodoList = {
//       data() {
//         return {
//           groceryList: [
//             { id: 0, text2: 'Vegetables' },
//             { id: 1, text2: 'Cheese' },
//             { id: 2, text2: 'Whatever else humans are supposed to eat' }
//       ]
//     }
//   },
//   components: {
//     TodoItem
//   }
// }
// const app = Vue.createApp(TodoList).mount('#todo-list-app')



Vue.createApp({
  data() {
    return {
      foobarbuz: "FOOBARBUZ"
    }
  }
}).mount("#fbb")

const fbb2 = Vue.createApp({
  data() {
    return {
      isTwo: true
    }
  },
  methods: {
    noTwo(){
      this.isTwo = false
    }
  }
}).mount("#fbb2")

const fbb3 = Vue.createApp({
  data() {
    return {
      activeColor: 'red',
      fontSize: 50
    }
  },
  methods: {
    bigger(){
      this.fontSize = this.fontSize * 1.5
    }
  }
}).mount("#fbb3")
