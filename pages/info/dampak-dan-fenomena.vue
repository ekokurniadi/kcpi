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
                <h1 class="banner-title">Dampak dan Fenomena</h1>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="#">Info Iklim</a></li>
                    <li class="breadcrumb-item active">
                      <a href="#" aria-current="page">Dampak dan Fenomena</a>
                    </li>
                  </ol>
                </nav>
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
        <div class="row text-center">
          <div class="col-lg-12" data-aos="fade-right" data-aos-duration="1000">
            <h3 class="widget-title">Dampak Negatif Perubahan Iklim</h3>
            <p>
              Perubahan iklim berdampak sangat luas pada kehidupan masyarakat.
              Kenaikan suhu bumi tidak hanya berdampak pada naiknya temperatur
              bumi tetapi juga mengubah sistim iklim yang mempengaruhi berbagai
              aspek pada perubahan alam dan kehidupan manusia. Beberapa contoh
              dampak negative perubahan iklim adalah adalah gagal panen, cuaca
              ekstrim dan meningkatnya wabah penyakit. seperti dijelaskan
              dibawah ini:
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12" data-aos="fade-left" data-aos-duration="1000">
            <div class="shuffle-btn-group">
              <label
                v-for="(cat, index) in categories"
                :class="selectedCategories == index ? 'active' : ''"
                for="cat.category"
                @click="setSelectedCategories(index)"
              >
                {{ cat.category }}
              </label>
            </div>

            <div class="row">
              <div
                class="col-lg-4 col-md-6 mb-5"
                v-for="artikel in artikels"
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
                        <nuxt-link :to="'/detail-artikel/' + artikel.url_slug">{{ artikel.title }}</nuxt-link>
                      </h3>
                      <div v-html="strippedContent(artikel.content)"></div>
                      <nuxt-link
                        class="btn btn-primary"
                        aria-label="service-details"
                        :to="'/detail-artikel/' + artikel.url_slug"
                        > Read More</nuxt-link
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
    <!-- Main container end -->
  </div>
</template>

<script>
import TabBar from '@/components/shared/TabBar.vue'
export default {
  components: {
    'tab-bar': TabBar,
  },
  data() {
    return {
      artikels: [],
      categories: [],
      selectedCategories: 0,
    }
  },

  created: async function () {
    await this.getCategories()
  },

  methods: {
    getCategories: async function () {
      await this.$axios
        .$get(`${this.$config.baseURL}/kategoribytype?tipe=Dampak Negatif`)
        .then((res) => {
          let decrypt = this.$decryptFunc(
            res,
            '/kategoribytype?tipe=Dampak Negatif'
          )
          this.categories = decrypt.data
          this.getArtikel(this.categories[0].id)
        })
        .catch((err) => {})
    },
    getArtikel: async function (id) {
      await this.$axios
        .$get(`${this.$config.baseURL}/artikelbykategori/${id}`)
        .then((res) => {
          let decrypt = this.$decryptFunc(res, `/artikelbykategori/${id}`)
          this.artikels = decrypt.data
        })
        .catch((err) => {})
    },
    setSelectedCategories: async function (index) {
      this.selectedCategories = index
      await this.getArtikel(this.categories[index].id)
    },
    strippedContent(data) {
      let regex = /(<([^>]+)>)/gi
      let result = data.replace(regex, '')
      return result.substring(0, 100) + '...'
    },
  },
}
</script>
