<template>
  <div class="mt-5">
    <v-carousel :show-arrows="false" :progress="true" cycle class="mt-5" hide-delimiter-background height="auto">
      <v-carousel-item v-for="(item, i) in result" :key="i">
        <div class="item">

          <img loading="lazy" class="custom-background-position zoom-in-out-box"
            :src="`${$config.baseURLMedia}img/` + item.url" height="600" width="100%" />
          <div class="caption-item">
            <h5 class="caption" v-html="item.text"></h5>
          </div>
        </div>

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

<style scoped>
.theme--dark.v-btn.v-btn--icon {
  color: orange;
}

.custom-background-position {
  background-position: top center;
  /* atau background-position: 0% 0%; atau background-position: 0 0; */
  background-repeat: no-repeat;
  background-size: cover;
}

.item {
  position: relative;
}

.caption-item {
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  width: 100%;
  height: 600px;
  position: absolute;
  top: -1px;
  font-size: 18px;
}

.caption{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color:white;
  font-weight: 700;
  text-transform: capitalize;
  line-height: 1;
  text-align: center;
}

@media (max-width: 575px) {
  .caption {
    font-size: 18px;
  }

  .custom-background-position{
    height: 300px !important;
  }

  .caption-item{
    height: 300px !important;
  }
}
</style>
