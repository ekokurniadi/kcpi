<template>
  <div class="mt-5">
    <div id="banner-area" class="banner-area" style="background-image: url(/assets/images/static-bg-img/sky.jpg);">
      <div class="banner-text">
        <div class="container">
          <div class="row">
            <div class="col-lg-12" data-aos="fade-down" data-aos-duration="1000">
              <div class="banner-heading">
                <h1 class="banner-title">Hasil Kerja Sama</h1>
              </div>
              <h5 class="text-white text-center">Kerjasama ini didasarkan pada kesepakatan yang dituangkan dalam
                perjanjian kerjasama. Tautan ini akan membahas kerjasama-kerjasama Indonesia dengan negara pihak lainnya
                dalam hal menurunkan konsentrasi gas rumah kaca dan menanggulangi dampak buruk perubahan iklim.</h5>
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
          <div class="col-12" data-aos="fade-left" data-aos-duration="1000">
            <div class="row">
              <div class="col-lg-12 col-md-12 mb-2" v-for="artikel in result" data-aos="fade-right"
                data-aos-duration="1000">
                <div class="ts-service-box">
                  <div class="ts-service-image-wrapper">

                  </div>
                  <div class="d-flex">
                    <div class="ts-service-info">
                      <h3 class="service-box-title">
                        <nuxt-link :to="'/detail-artikel/' + artikel.url_slug">{{ artikel.title }}</nuxt-link>
                      </h3>
                      <div v-html="strippedContent(artikel.content)"></div>
                      <nuxt-link class="btn btn-primary" aria-label="service-details"
                        :to="'/detail-artikel/' + artikel.url_slug">
                        Continue Reading</nuxt-link>
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
    <!-- Main container end -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: [],
    }
  },
  mounted() {
    this.getArtikel()
  },
  methods: {
    getArtikel: async function () {
      await this.$axios
        .$get(`${this.$config.baseURL}/kategoribyfilter/hasil-kerjasama`)
        .then((res) => {
          let decrypt = this.$decryptFunc(res, `/kategoribyfilter/hasil-kerjasama`)
          this.result = decrypt.data
        })
        .catch((err) => { })
    },
    strippedContent(data) {
      let regex = /(<([^>]+)>)/gi
      let result = data.replace(regex, '')
      return result.substring(0, 200) + '...'
    },
  },
}
</script>
<style></style>
  