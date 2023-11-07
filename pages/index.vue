<template>
  <div oncontextmenu="return false;">
    <app-carousel />
    <app-pintasan data-aos="fade-down" data-aos-duration="1000" />
    <app-tentang-perubahan-iklim />
    <app-divider />
    <app-dampak-perubahan-iklim />
    <app-fenomena />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Pintasan from '@/components/Pintasan.vue'
import TentangPerubahanIklim from '@/components/TentangPerubahanIklim.vue'
import DampakPerubahanIklim from '@/components/DampakPerubahanIklim.vue'
import Divider from '@/components/shared/Divider.vue'
import Fenomena from '@/components/Fenomena.vue'
export default {
  components: {
    'app-carousel': Carousel,
    'app-pintasan': Pintasan,
    'app-tentang-perubahan-iklim': TentangPerubahanIklim,
    'app-dampak-perubahan-iklim': DampakPerubahanIklim,
    'app-divider': Divider,
    'app-fenomena': Fenomena,
  },
  name: 'IndexPage',
  data() {
    return {}
  },
  mounted() {
    document.addEventListener('keydown', this.onKeydown)
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  },
  methods: {
    onKeydown: function (e) {
      e.preventDefault()
    },
  },
}
</script>
