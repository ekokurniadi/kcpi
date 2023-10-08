<template>
  <div class="banner-carousel banner-carousel-1 mb-0">
    <div
      v-for="(items, idx) in data"
      :id="'slick-slide0'+idx"
      :class="idx == 0 ? 'banner-carousel-item slick-slide slick-current slick-active' : 'banner-carousel-item slick-slide'"
      v-bind:style="{'background-image':'url('+items.url +')','filter':'brightness(95%)' }"
    >
      <div class="slider-content" style="text-shadow: 1px 0.5px 15px black;">
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="col-md-12 text-center">
              <h5 class="slide-sub-title" data-animation-in="slideInRight">
                 {{items.text}}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
    }
  },
  created: async function () {
    await this.getDataSlider()
  },
  methods: {
    getDataSlider: async function () {
      this.$axios
        .get('https://stikeskeluargabunda.ac.id/demo/apitest/slide.json')
        .then((res) => {
          this.data = res.data.data
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
