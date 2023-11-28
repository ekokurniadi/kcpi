<template>
    <div class="mt-5">
        <CardTitleWithImage title="Mitigasi" />
        <section id="main-container" class="main-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="column-title" data-aos="fade-right" data-aos-duration="1000">
                            {{ result.title }}
                        </h3>

                        <div data-aos="fade-left" data-aos-duration="1000" v-html="result.content"></div>
                    </div>
                    <!-- Col end -->
                </div>
                <!-- Content row end -->
                <div class="row">
                    <div class="col-lg-12">
                        <h3>Implementasi</h3>
                        <blockquote class="blockquote">
                            <p>
                                Strategi Aksi Mitigasi tersebut sudah diterapkan di beberapa daerah di Indonesia.
                                Silahkan klik tautan ini untuk menuju informasi implementasi
                            </p>
                            <span>
                                <button class="btn btn-primary btn-sm">Klik</button>
                            </span>
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
import CardTitleWithImage from '~/components/shared/CardTitleWithImage.vue';
export default {
    components: {
        CardTitleWithImage
    },
    data() {
        return {
            result: {},
        }
    },
    mounted() {
        this.getMitigasi();
    },
    methods: {
        getMitigasi: async function () {
            await this.$axios
                .$get(`${this.$config.baseURL}/konten_statis/mitigasi`)
                .then((res) => {
                    let decrypt = this.$decryptFunc(res, 'konten_statis/mitigasi')
                    this.result = decrypt.data;
                })
                .catch((err) => {

                })
        }
    },
}
</script>
<style lang="">
    
</style>