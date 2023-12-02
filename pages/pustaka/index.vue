<template>
    <div class="mt-5">
        <section id="main-container" class="main-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="column-title" data-aos="fade-right" data-aos-duration="1000">
                            E-Library
                        </h3>
                        <vue-good-table :columns="columns" :rows="result" :pagination-options="{
                            enabled: true,
                        }" :search-options="{
    enabled: true
}">
                            <template slot="table-row" slot-scope="props">
                                <span v-if="props.column.field == 'judul'">
                                    {{ props.row.judul }}
                                </span>
                                <span v-if="props.column.field == 'penyusun'">
                                    {{ props.row.penyusun }}
                                </span>
                                <span v-if="props.column.field == 'link'">
                                    <a class="btn btn-primary" :href="props.row.link" target="_blank">Lihat</a>
                                </span>
                            </template>

                        </vue-good-table>
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
            result: [],
            columns: [
				{
					label: 'Judul',
					field: 'judul',
				},
				{
					label: 'Penyusun',
					field: 'penyusun',
				},
				{
					label: 'Link',
					field: 'link',
				}
			],
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData: async function () {
            await this.$axios
                .$get(`${this.$config.baseURL}/library`)
                .then((res) => {
                    let decrypt = this.$decryptFunc(res, 'library')
                    this.result = decrypt.data;
                })
                .catch((err) => {

                })
        },
    },
}
</script>
  