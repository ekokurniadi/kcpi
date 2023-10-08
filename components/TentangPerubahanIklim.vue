<template>
  <div>
    <section id="main-container" class="main-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3 class="column-title">Tentang Perubahan Iklim</h3>
            <p v-html="result.desc"></p>
            <a class="btn btn-primary" href="projects.html"
              >Pelajari Selengkapnya</a
            >
          </div>

          <div class="col-lg-6 mt-5 mt-lg-0 align-self-center bg-dark" id="wrap">
            <iframe
              width="100%"
              height="315"
              controls="0"
              :src="result.video"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
  #wrap {
  width: 100%;
  height: 330px;
  border-radius: 8px;
  padding:5px 5px;
  background-color: rgba(0,0,0,0.5);
  position: relative;
}
iframe{
  border-radius: 8px;
}
</style>

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
      this.$axios
        .get(
          'https://stikeskeluargabunda.ac.id/demo/apitest/tentang/tentang_perubahan_iklim.json'
        )
        .then((res) => {
          this.result = res.data.data[0]
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
