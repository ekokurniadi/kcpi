<template>
  <div>
    <section id="main-container" class="main-container">
      <div class="container">

        <div class="row">
          <div class="col-12" data-aos="fade-left" data-aos-duration="1000">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 mb-5"
                v-for="artikel in result"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div class="ts-service-box">
                  <div class="ts-service-image-wrapper">
                    <img
                      loading="lazy"
                      class="w-100"
                      :src="`${$config.baseURLMedia}img/` + artikel.image"
                      :alt="artikel.url_slug"
                      style="
                        width: 100% !important;
                        height: 250px !important;
                        object-fit: cover;
                      "
                    />
                  </div>
                  <div class="d-flex">
                    <div class="ts-service-info">
                      <h3 class="service-box-title">
                        <nuxt-link
                          :to="'/detail-artikel/' + artikel.url_slug"
                          >{{ artikel.title }}</nuxt-link
                        >
                      </h3>
                      <div v-html="strippedContent(artikel.content)"></div>
                      <nuxt-link
                        class="btn btn-primary"
                        aria-label="service-details"
                        :to="'/detail-artikel/' + artikel.url_slug"
                      >
                        Read More</nuxt-link
                      >
                    </div>
                  </div>
                </div>
                <!-- Service2 end -->
              </div>

              <!-- shuffle item 1 end -->
            </div>
            <!-- shuffle end -->
          </div>
        </div>
        <!-- Content row end -->
      </div>
      <!-- Conatiner end -->
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: [],
    }
  },
  created: async function () {
    await this.getData()
  },
  methods: {
    getData: async function () {
      await this.$axios
        .$get(
          `${this.$config.baseURL}/artikelbykategori/${this.$route.params.id}`
        )
        .then((res) => {
          let decrypt = this.$decryptFunc(res, '/artikelbykategori/')
          this.result = decrypt.data
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
