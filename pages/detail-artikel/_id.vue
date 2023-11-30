<template>
  <div class="mt-5">
    <section id="main-container" class="main-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3
              class="column-title"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {{ result.title }}
            </h3>
           
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              style="text-align: justify;"
              v-html="result.content"
            ></div>
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
  props: ['artikel'],
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
        .$get(`${this.$config.baseURL}/artikel/${this.$route.params.id}`)
        .then((res) => {
          let decrypt = this.$decryptFunc(
            res,
            `/artikel/${this.$route.params.id}`
          )
          this.result = decrypt.data
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
