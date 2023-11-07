<template>
  <div class="body-inner" oncontextmenu="return false;">
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/partials/Header.vue'
import AppFooter from '@/components/partials/Footer.vue'
import aosPlugin from '~/plugins/aos'
export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
  },
  mixins: [aosPlugin],
}
</script>

<style scoped>
.body-inner {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
