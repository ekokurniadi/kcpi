<template>
    <div class="mt-5">
        <section id="main-container" class="main-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="column-title" data-aos="fade-right" data-aos-duration="1000">
                            {{ result.title }}
                        </h3>
                        <img loading="lazy" class="img-fluid py-2" :src="`${$config.baseURLMedia}img/` + result.image"
                            :alt="result.url_slug" />
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
    created() {
        this.getDataFenomena()
    },
    methods: {
        getDataFenomena: async function () {
            await this.$axios
                .$get(`${this.$config.baseURL}/konten_statis/profil-provinsi`)
                .then((res) => {
                    let decrypt = this.$decryptFunc(res, 'konten_statis/profil-provinsi')
                    this.result = decrypt.data;
                })
                .catch((err) => {

                })
        },
    },
}
</script>
  