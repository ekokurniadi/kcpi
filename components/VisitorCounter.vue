<template>
  <div>
    <h5>Visitor Cunter Here</h5>
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
