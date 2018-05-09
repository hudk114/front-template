<template>
  <div>
    <h1>hello world.</h1>
    <div>
      <h2>you have click the button for {{ clickTime }} times!</h2>
      <button @click="handleClick">click me!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello-world',
  computed: {
    clickTime () {
      return this.$store.state.clickTime;
    }
  },
  methods: {
    handleClick () {
      this.$store.dispatch('click');
    }
  }
};
</script>
