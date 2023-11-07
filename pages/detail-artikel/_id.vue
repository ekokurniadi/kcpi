<template>
  <div class="mt-5">
    <div
      id="banner-area"
      class="banner-area"
      style="background-image: url(/assets/images/static-bg-img/sky.jpg)"
    >
      <div class="banner-text">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-12"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div class="banner-heading">
                <h1 class="banner-title">
                  {{ result.title }}
                </h1>
              </div>
            </div>
            <!-- Col end -->
          </div>
          <!-- Row end -->
        </div>
        <!-- Container end -->
      </div>
      <!-- Banner text end -->
    </div>
    <!-- Banner area end -->

    <section id="main-container" class="main-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3
              class="column-title"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {{ result.title }}
            </h3>
            <img
              class="img-fluid py-2"
              :src="`${$config.baseURLMedia}img/` + result.image"
              :alt="result.url_slug"
            />
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              v-html="result.content"
            ></div>
          </div>
          <!-- Col end -->
        </div>
        <!-- Content row end -->
      </div>
      <!-- Container end -->
    </section>
    <!-- Main container end -->
  </div>
</template>

<script>
export default {
  props: ['artikel'],
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
        .$get(`${this.$config.baseURL}/artikel/${this.$route.params.id}`)
        .then((res) => {
          let decrypt = this.$decryptFunc(
            res,
            `/artikel/${this.$route.params.id}`
          )
          this.result = decrypt.data
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
