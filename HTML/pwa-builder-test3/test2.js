Vue.component('todo-item', {
    props: ['todo2'],
    // template: '<li>foo</li>'
    template: '<li>{{ todo2.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 3, text: 'Whatever else humans are supposed to eat' },
        { id: 10, text: 'Whatever else humans are supposed to eat' },
        ]
    }
})