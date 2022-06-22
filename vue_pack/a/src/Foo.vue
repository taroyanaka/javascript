<template>
<h1 id="bar" @click="plus_counter">BAR</h1>
<button @click="plus_counter">ABC</button>
<div>
  {{counter}}
</div>
</template>
<script>
export default {
  data() {
    return {
      counter: 10
    }
  },
  methods: {
    plus_counter() {
      this.counter++
    }
  }
}
</script>

<style>
#bar {
  width: 10rem;
  height: 10rem;
  background: gray;
}
</style>
