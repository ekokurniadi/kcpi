<template>
  <div>
    <v-carousel
      :show-arrows="false"
      cycle
      class="mt-5"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(item, i) in result"
        :key="i"
        :src="`${$config.baseURLMedia}img/`+item.url"
      ></v-carousel-item>
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
</style>
