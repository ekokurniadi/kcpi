<template>
  <section id="main-container" class="main-container">
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-12">
          <h3 class="widget-title">Dampak Negatif Perubahan Iklim</h3>
          <p>
            Perubahan iklim berdampak sangat luas pada kehidupan masyarakat.
            Kenaikan suhu bumi tidak hanya berdampak pada naiknya tempratur bumi
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
                    :src="artikel.image"
                    :alt="artikel.url_slug"
                    style="height: 250px !important; object-fit: cover"
                  />
                  <span class="gallery-icon"><i class="fa fa-plus"></i></span>
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

        <div class="col-12">
          <div class="general-btn text-center">
            <a class="btn btn-primary" href="projects.html">Lihat Semua</a
            >
          </div>
        </div>
      </div>
      <!-- Content row end -->
    </div>
    <!-- Conatiner end -->
  </section>
  <!-- Main container end -->
</template>

<script>
export default {
  data() {
    return {
      artikels: [],
      categories: [],
      selectedCategories: 0,
    }
  },
  created: async function () {
    await this.getCategories()
    await this.getArtikel()
  },

  methods: {
    getCategories: async function () {
      await this.$axios
        .get('https://stikeskeluargabunda.ac.id/demo/apitest/kategori.json')
        .then((res) => {
          this.categories = res.data.data
        })
        .catch((err) => {})
    },
    getArtikel: async function () {
      await this.$axios
        .get('https://stikeskeluargabunda.ac.id/demo/apitest/artikel.json')
        .then((res) => {
          this.artikels = res.data.data
        })
        .catch((err) => {})
    },
    setSelectedCategories: async function (index) {
      this.selectedCategories = index
      await this.getArtikel()
    },
  },
}
</script>
