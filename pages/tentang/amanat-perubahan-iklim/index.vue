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
            <div class="col-lg-12">
              <div class="banner-heading">
                <h1 class="banner-title">Tentang Amanat Perubahan Iklim</h1>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="#">Tentang</a></li>
                    <li class="breadcrumb-item active">
                      <a href="#" aria-current="page">Amanat Perubahan Iklim</a>
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
        <div class="row">
          <div class="col-xl-3 col-lg-4">
            <div class="sidebar sidebar-left">
              <div class="widget">
                <h3 class="widget-title">Kategori</h3>
                <ul class="nav service-menu">
                  <li
                    v-for="(cat, index) in categories"
                    :class="selectedCategories == index ? 'active' : ''"
                    for="cat.category"
                    @click="setSelectedCategories(index)"
                  >
                    <a>{{ cat.category }}</a>
                  </li>
                </ul>
              </div>
              <!-- Widget end -->
            </div>
            <!-- Sidebar end -->
          </div>
          <!-- Sidebar Col end -->

          <div class="col-xl-8 col-lg-8">
            <div class="content-inner-page">
              <h2 class="column-title mrt-0">{{ dataContent.title }}</h2>

              <div class="row">
                <div class="col-md-12">
                  <div v-html="dataContent.content"></div>
                </div>
                <!-- col end -->
              </div>
              <!-- 1st row end-->

              <div class="gap-40"></div>

              <!-- Action end -->
            </div>
            <!-- Content inner end -->
          </div>
          <!-- Content Col end -->
        </div>
        <!-- Main row end -->
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
      dataContent: {},
      categories: [],
      selectedCategories: 0,
    }
  },

  created: async function () {
    await this.getData()
  },
  methods: {
    getData: async function () {
      await this.$axios
        .$get(`${this.$config.baseURL}/kategoribyfilter/amanat-perubahan-iklim`)
        .then((res) => {
          let decrypt = this.$decryptFunc(
            res,
            '/kategoribyfilter/amanat-perubahan-iklim'
          )
          this.categories = decrypt.data
          this.getContent(this.categories[0].id)
        })
        .catch((err) => {})
    },
    getContent: async function (id) {
      await this.$axios
        .$get(`${this.$config.baseURL}/konten_statisby/${id}`)
        .then((res) => {
          let decrypt = this.$decryptFunc(res, `/konten_statisby/${id}`)
          this.dataContent = decrypt.data
        })
        .catch((err) => {})
    },
    setSelectedCategories: async function (index) {
      this.selectedCategories = index
      await this.getContent(this.categories[index].id)
    },
  },
}
</script>
