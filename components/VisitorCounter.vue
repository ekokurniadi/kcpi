<template>
  <div align="center">
    <a href="http://www.amazingcounters.com"
      ><img
        border="0"
        src="http://cc.amazingcounters.com/counter.php?i=3250120&c=9750673"
        alt="AmazingCounters.com"
    /></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visitorCount: 0,
    }
  },
  methods: {
    incrementCounter() {
      this.visitorCount++
      localStorage.setItem('visitorCount', this.visitorCount.toString())
    },
  },
  mounted() {
    const storedCount = localStorage.getItem('visitorCount')
    this.visitorCount = storedCount ? parseInt(storedCount, 10) : 0
  },
}
</script>

<style scoped></style>
