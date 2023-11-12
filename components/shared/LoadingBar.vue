<template>
  <div>
    <v-overlay :value="isLoading" class="align-center justify-center">
      <div class="floating-img">
        <img
          loading="lazy"
          src="assets/images/kcpi-single.png"
          alt="app-logo"
          width="70px"
        />
      </div>
      <div class="overlay-progress">
        <v-progress-circular
          color="amber"
          indeterminate
          size="80"
        ></v-progress-circular>
      </div>
    </v-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    start() {
      this.isLoading = true
    },
    finish() {
      this.isLoading = false
    },
  },
}
</script>

<style scoped>
.floating-img {
  position: absolute;
}
.overlay-progress {
  position: relative;
}
</style>
