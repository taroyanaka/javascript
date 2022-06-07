let tag_sample = [
  'FOO',
  'BAR',
  'BUZ',
  'QUX',
];

const blog = Vue.createApp({
  data() {
    return {
      article: '',
      comment_text: '',
      new_tag: '',
      tag_all: tag_sample,
    }
  },
  methods: {
    save() {
      article_lists.list.push(
        {
          id: article_lists.highestIdNumPlusOne(),
          article: this.article,
          tag_list: [],
          comment_list: [],
          star_count: 0,
          comment_count: 0,
          article_length: this.article.length,
          match_score: 0,
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
        );
        Array.from(article_lists.list).forEach(V=>V.comment_count = V.comment_list.length);
    },
    tag_save() {
      this.tag_all.push(this.new_tag)
    },
    tag_filter_from_blog(TAG) {
      article_lists.save_no_filter_list();
      article_lists.tag_filter(TAG);
    },
},
}).mount('.blog');

const article_lists = Vue.createApp({
  data() {
    return{
      no_filter_list: [],
      search_txt_txt: '',
      sort_by: '',
      sort_asc_or_desc: false,
      editing: 0,
      list: [ ],
      tmpList: null,
      selected: '',
      tag_filter_with_OR_selection: [],
    }
  },
  computed: {
    computed_sort: function() {
      this.sort_by_any(this.sort_by, true);
      // if(this.tmpList === null){this.tmpList = this.list}
      // this.filteredList();
    },
    computed_tag_all: function() {
      return blog.tag_all
    },
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
    },
    remove(INDEX) {
      this.list.splice(INDEX, 1);
    },
    increment_star(INDEX) {
      this.list[INDEX].star_count++;
    },
    sort_by_any(SORT_KIND, SKIP=false) {
      this.sort_by = SORT_KIND;
      if(SKIP === false) {
        this.sort_desc_or_asc = this.sort_desc_or_asc === true ? false : true
      }
      this.sort_desc_or_asc ? this.list.sort((a, b)=>b[SORT_KIND] - a[SORT_KIND]) : this.list.sort((a, b)=>a[SORT_KIND] - b[SORT_KIND]);
    },
    save_no_filter_list(){
      this.no_filter_list = this.no_filter_list.length === 0  ? this.list : this.no_filter_list;
    },
    tag_filter(TAG, SKIP=false){
      if(SKIP === false) {
        this.tag_filter_with_OR_selection.push(TAG);
      }
        this.list = this.no_filter_list.filter(LIST_OF_ONE=>
          intersection(this.tag_filter_with_OR_selection, LIST_OF_ONE.tag_list).length > 0 ? LIST_OF_ONE : null
        )

        if(this.tag_filter_with_OR_selection.length === 0){
          this.list = this.no_filter_list;
        }
  
    },
    remove_tag(INDEX){
      this.tag_filter_with_OR_selection.splice(INDEX, 1);
      this.tag_filter(null, true);
    },
    reset_filter(){
      this.tag_filter_with_OR_selection = [];
      this.search_txt = '';
      this.list = this.no_filter_list;
      this.list = this.tmpList;
    },


    save_tmp_list(){
      this.tmpList = this.list;
    },
    filteredList() {
      this.list = this.tmpList.filter(LIST_OF_ONE => {
        const all_comment_array = LIST_OF_ONE.comment_list.map(V=>V.comment);
        const all_tag_array = LIST_OF_ONE.tag_list.map(V=>V);
        const article = LIST_OF_ONE.article;
        const list = [
          {
            "article": article,
            "tag": all_tag_array,
            "comment": all_comment_array,
          },
        ];
        const options = {
          includeScore: true,
          keys: ['article', 'tag', 'comment'],
        };
        const fuse = new Fuse(list, options);
        const orQuery = article_lists.search_txt.split(' ').join('|')
        const result = fuse.search_txt(orQuery);
        try {
          LIST_OF_ONE.match_score = result[0].score;
        } catch (error) {
          LIST_OF_ONE.match_score = 0;
        }
        return LIST_OF_ONE.match_score > 0;
      })
      if(this.search_txt === ''){this.list = this.tmpList};
    },

  }
}).mount('.article_lists');

// intersection([1, 2, 3], [2, 3, 4]) => [2, 3]
const intersection = (list1, list2) => list1.filter(V=> list2.includes(V) );


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
  const test4 = (idx, count) => article_lists.list[idx].star_count += count;
  const test5 = () => article_lists.sort_by_any('star_count');
  const test6 = () => {
    article_lists.list[0].tag_list.push('FOO');
    article_lists.list[0].tag_list.push('BAR');
    article_lists.list[1].tag_list.push('BAR');
    article_lists.list[1].tag_list.push('QUX');
    article_lists.list[2].tag_list.push('QUX');
  }

  test0("foo0");
  test1();
  test0("bar");
  test1();
  test0("foo\nbar\nBUZ");
  test1();
  test0("vlahvlah!");
  test1();
  test0("日本語　にニほんホンゴご　ﾆﾎﾝｺﾞ");
  test1();
  test2();
  const comment_sample = [
    {id: 0, comment: "foo is FOO"},
    {id: 0, comment: "foo is not BAR"},
    {id: 1, comment: "bar is BAR"},
    {id: 0, comment: "foo2 is FOO2"},
  ]
  comment_sample.forEach(SAMPLE=> test3(SAMPLE.id, SAMPLE.comment) )
  test4(0, 3);
  test4(2, 1);
  test5();
  // article_lists.save_no_filter_list();
  test6();
}
const test = Vue.createApp({
  data() { },
  methods: {
    test_exe: test_exe
  }
}).mount('.test');
test.test_exe();


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



// Vue.createApp({
//   data() {
//     return {
//       selected: ''
//     }
//   }
// }).mount('.v-model-select')



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
















// class Post {
//   constructor(title, link, author, img) {
//     this.title = title;
//     this.link = link;
//     this.author = author;
//     this.img = img;
//   }
// }


// const hoge = Vue.createApp({
//   data() {
//     return {
//       search_txt: '',
//       postList: article_lists.list,
//       newPostList: article_lists.list,
//     }
//   },
//   methods:{
//     filteredList() {
//       this.newPostList = this.postList.filter(post => {
//         const all_comment_string = post.comment_list.map(V=>V.comment).join('');
//         const article_with_all_comment_string = post.article + post.comment_list.map(V=>V.comment).join('');
//         return article_with_all_comment_string.toLowerCase().includes(this.search_txt.toLowerCase())
//       });
//     }
//   }
// }).mount(".hoge");

// https://stackoverflow.com/questions/36372611/how-to-test-if-an-object-is-a-proxy/60323358#comment77374969_36372611
// function isProxy(o) { 
//   if (typeof Proxy !== 'function') return false;
//   try { o instanceof Proxy; return false; }
//   catch{ return true; } 
// }

// const objectForEach = (OBJ) => {
//   let ary = [];
//   for (const [key, value] of Object.entries(OBJ)) {
//   let val = isProxy(value) ? objectForEach(value) : value;
//     ary.push([key, val]);
// }
//   return ary;
// };
