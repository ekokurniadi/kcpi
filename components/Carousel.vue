<template>
  <div class="mt-5">
    <v-carousel
      :show-arrows="false"
      cycle
      class="mt-5"
      hide-delimiter-background
      height="auto"
    >
      <v-carousel-item v-for="(item, i) in result" :key="i">
        <img
          class="custom-background-position"
          :src="`${$config.baseURLMedia}img/` + item.url"
          height="600"
          width="100%"
        />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: [],
      isLoading: false,
    }
  },
  created() {
    this.getDataSlider()
  },
  methods: {
    getDataSlider: async function () {
      this.isLoading = true
      await this.$axios
        .$get(`${this.$config.baseURL}/slider`)
        .then((res) => {
          let decrypt = this.$decryptFunc(res)
          this.result = decrypt.data
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
        })
    },
  },
}
</script>

<style>
.theme--dark.v-btn.v-btn--icon {
  color: orange;
}
.custom-background-position {
  background-position: top center; /* atau background-position: 0% 0%; atau background-position: 0 0; */
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
