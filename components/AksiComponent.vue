<template>
    <div class="mt-5">
        <CardTitleWithImage :title="urlParam" />
        <section id="main-container" class="main-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="column-title" data-aos="fade-right" data-aos-duration="1000">
                            {{ result.title }}
                        </h3>

                        <div data-aos="fade-left" data-aos-duration="1000" style="text-align: justify;" v-html="result.content"></div>
                    </div>
                    <!-- Col end -->
                </div>
                <!-- Content row end -->
                <div class="row" v-if="captionImplementation != ''">
                    <div class="col-lg-12">
                        <h3>Implementasi</h3>
                        <blockquote class="blockquote">
                            <p>
                                {{ captionImplementation }}
                            </p>
                            <span>
                                <nuxt-link :to="`/aksi/implementasi?id=${urlParam}`" class="btn btn-primary btn-sm">Klik</nuxt-link>
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
    props:{
        urlParam:String,
        captionImplementation:String
    },
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
            console.log(this.$props)
            await this.$axios
                .$get(`${this.$config.baseURL}/konten_statis/${this.$props.urlParam}`)
                .then((res) => {
                    let decrypt = this.$decryptFunc(res, `konten_statis/${this.$props.urlParam}`)
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