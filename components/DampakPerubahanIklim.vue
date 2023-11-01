<template>
  <section id="main-container" class="main-container">
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-12">
          <h3 class="widget-title">Dampak Negatif Perubahan Iklim</h3>
          <p>
            Perubahan iklim berdampak sangat luas pada kehidupan masyarakat.
            Kenaikan suhu bumi tidak hanya berdampak pada naiknya temperatur bumi
            tetapi juga mengubah sistim iklim yang mempengaruhi berbagai aspek
            pada perubahan alam dan kehidupan manusia. Beberapa contoh dampak
            negative perubahan iklim adalah adalah gagal panen, cuaca ekstrim
            dan meningkatnya wabah penyakit. seperti dijelaskan dibawah ini:
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
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
              class="col-lg-4 col-md-6 shuffle-item"
              v-for="artikel in artikels"
            >
              <div class="project-img-container">
                <a class="gallery-popup" href="#">
                  <img
                    class="img-fluid"
                    :src="`${$config.baseURLMedia}img/` + artikel.image"
                    :alt="artikel.url_slug"
                    style="
                      width: 100% !important;
                      height: 250px !important;
                      object-fit: cover;
                    "
                  />
                </a>
                <div class="project-item-info">
                  <div class="project-item-info-content">
                    <h3 class="project-item-title">
                      <a href="projects-single.html">{{ artikel.title }}</a>
                    </h3>
                    <p class="project-cat">{{ artikel.category }}</p>
                  </div>
                </div>
              </div>
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
  },
}
</script>
