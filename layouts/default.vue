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

export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
  },
}
</script>
