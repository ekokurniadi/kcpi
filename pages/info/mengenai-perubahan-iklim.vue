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
            <div class="col-lg-12" data-aos="fade-down" data-aos-duration="1000">
              <div class="banner-heading">
                <h1 class="banner-title">
                  Mengenai Perubahan Iklim
                </h1>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="#">Info Iklim</a></li>
                    <li class="breadcrumb-item active">
                      <a href="#" aria-current="page"
                        >Mengenai Perubahan Iklim</a
                      >
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
          <div class="col-lg-12">
            <h3 class="column-title" data-aos="fade-right" data-aos-duration="1000">{{ result.title }}</h3>
            <div data-aos="fade-left" data-aos-duration="1000" v-html="result.content"></div>
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
        .$get(`${this.$config.baseURL}/konten_statis/mengenai-perubahan-iklim`)
        .then((res) => {
          let decrypt = this.$decryptFunc(res,'/konten_statis/mengenai-perubahan-iklim')
          this.result = decrypt.data
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
