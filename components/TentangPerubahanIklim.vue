<template>
  <div>
    <section id="main-container" class="main-container solid-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
            <h3 class="column-title">Tentang Perubahan Iklim</h3>
            <p v-html="result.desc"></p>
            <nuxt-link class="btn btn-primary" to="/tentang/amanat-perubahan-iklim"
              >Pelajari Selengkapnya</nuxt-link
            >
          </div>

          <div
            class="col-lg-6 mt-5 mt-lg-0 align-self-center bg-dark"
            id="wrap" data-aos="fade-left" data-aos-duration="1000"
          >
            <iframe
              width="100%"
              height="315"
              controls="0"
              :src="result.video"
              frameborder="0"
            ></iframe>
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
iframe {
  border-radius: 8px;
}
</style>

<script>
export default {
  data() {
    return {
      result: {},
    }
  },

  created: async function () {
    await this.getData()
  },
  methods: {
    getData: async function () {
      await this.$axios
        .$get(`${this.$config.baseURL}/iklim`)
        .then((res) => {
          let decrypt = this.$decryptFunc(res)
          this.result=decrypt.data
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
