<template>
    <div class="mt-5">
      <section id="main-container" class="main-container">
        <div class="container">
          <!-- Content row end -->
          <div class="row" v-if="result.judul != ''">
            <div class="col-lg-12">
              <h3>{{ result.judul }}</h3>
              <div class="ts-service-image-wrapper">
                    <img
                      loading="lazy"
                      class="w-100"
                      :src="`${$config.baseURLMedia}img/` + result.thumbnail"
                      :alt="result.thumbnail"
                      style="
                        width: 100% !important;
                        height: 250px !important;
                        object-fit: contain;
                      "
                    />
                  </div>
             
            
              <blockquote class="blockquote">
                <iframe width="100%" height="512" :src="'https://www.youtube.com/embed/'+result.link+'?si=Wxjn5ZPF8atU3HY-&amp;controls=0'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p class="mt-2">
                  {{ result.deskripsi }}
                </p>
              </blockquote>
            </div>
          </div>
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
    mounted() {
     this.result = this.$route.params.r;

    },
    methods: {},
  }
  </script>
  <style lang=""></style>
  