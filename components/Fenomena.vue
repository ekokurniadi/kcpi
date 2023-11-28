<template>
  <div>
    <section id="project-area" class="project-area solid-bg" style="background:url('/assets/images/bg2-paralax.png')">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h3 class="widget-title">Aksi, Inovasi dan Sumberdaya</h3>
          </div>
        </div>
        <!--/ Title row end -->

        <div class="row">
          <div class="col-12">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 mb-5"
                v-for="data in resultKategori"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div
                  class="ts-service-box"
                  style="
                    background-color: white;
                    border-radius: 10px;
                    padding-bottom: 15px;
                    box-shadow: 1px 1px 15px #888888;
                  "
                >
                  <div class="ts-service-image-wrapper">
                    <img
                      loading="lazy"
                      class="w-100"
                      :src="`${$config.baseURLMedia}img/` + data.image"
                      :alt="data.category"
                      style="width: 100% !important;height: 250px !important;object-fit: cover;border-top-left-radius: 10px;border-top-right-radius: 10px;"/>
                  </div>

                  <div class="ts-service-info text-center ml-0">
                    <h3 class="service-box-title">
                      <nuxt-link :to="data.category == 'inovasi' ? '/inovasi': data.category =='sumber-daya' ? '/sumber-daya/sumber-dana' : '/aksi/mitigasi'">{{
                        data.category
                      }}</nuxt-link>
                    </h3>
                    <div
                      class="py-3"
                      v-html="data.desc"
                      style="text-align: center; padding: 15px 15px"
                    ></div>
                    <nuxt-link
                      class="btn btn-primary"
                      aria-label="service-details"
                      :to="data.category.toLowerCase() == 'inovasi' ? '/inovasi': data.category.toLowerCase() =='sumber daya' ? '/sumber-daya/sumber-dana' : '/aksi/mitigasi'"
                    >
                      Read More</nuxt-link
                    >
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
      <!--/ Container end -->
    </section>
    <!-- Project area end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [],
      resultKategori: [],
    }
  },
  created() {
    this.getDataFenomena()
  },
  methods: {
    getDataFenomena: async function () {
      await this.$axios
        .$get(`${this.$config.baseURL}/kategori_home`)
        .then((res) => {
          let decrypt = this.$decryptFunc(res, 'kategori_home')
          this.resultKategori = decrypt.data
          this.resultKategori.reverse()
        })
        .catch((err) => {
          this.isLoading = false
        })
    },
  },
}
</script>
