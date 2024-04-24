<template>
  <div class="mt-5">
    <!-- <CardTitleWithImage title="Inovasi"/> -->

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
                <div class="ts-service-box" @click="toDetail(artikel)">
                  <div class="ts-service-image-wrapper">
                    <img
                      loading="lazy"
                      class="w-100"
                      :src="`${$config.baseURLMedia}img/` + artikel.thumbnail"
                      :alt="artikel.judul"
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
                        <div @click="toDetail(artikel)">
                          {{ artikel.judul }}
                        </div>
                      </h3>
                      <div v-html="strippedContent(artikel.deskripsi)"></div>
                      <div
                        class="btn btn-primary"
                        aria-label="service-details"
                        @click="toDetail(artikel)"
                      >
                        Read More
                      </div>
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
import CardTitleWithImage from '~/components/shared/CardTitleWithImage.vue'
export default {
  components: {
    CardTitleWithImage,
  },
  data() {
    return {
      result: [],
    }
  },
  mounted() {
    this.getArtikel()
  },
  methods: {
    toDetail: function (r) {
      this.$router.push({ name: `detail-video`, params: { r } })
    },
    getArtikel: async function () {
      await this.$axios
        .$get(`${this.$config.baseURL}/videos`)
        .then((res) => {
          let decrypt = this.$decryptFunc(res, `/videos`)
          this.result = decrypt.data
        })
        .catch((err) => {})
    },
    strippedContent(data) {
      let regex = /(<([^>]+)>)/gi
      let result = data.replace(regex, '')
      return result.substring(0, 100) + '...'
    },
  },
}
</script>
<style></style>
