<template>
  <div>
    <section id="main-container" class="main-container">
      <div class="container">
        <div class="row">
          <div class="col-md-6" v-for="(item, index) of result">
            <div v-if="item.type == 'image'" id="wrap">
              <img
                loading="lazy"
                :src="`${$config.baseURLMedia}img/` + item.media"
                width="100%"
                height="320px"
              />
            </div>
            <div v-else-if="item.type == 'video'" id="wrap">
              <video controls width="100%" poster="/assets/images/app-logo.png">
                <source
                  :src="`${$config.baseURLMedia}video/` + item.media"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#wrap {
  width: 100%;
  height: 330px;
  border-radius: 8px;
  padding: 5px 5px;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
}
</style>

<script>
export default {
  data() {
    return {
      result: [],
    }
  },
  created() {
    this.getDataFenomena()
  },
  methods: {
    getDataFenomena: async function () {
      await this.$axios
        .$get(`${this.$config.baseURL}/fenomena`)
        .then((res) => {
          let decrypt = this.$decryptFunc(res, 'fenomena')
          this.result = decrypt.data
        })
        .catch((err) => {
          this.isLoading = false
        })
    },
  },
}
</script>
