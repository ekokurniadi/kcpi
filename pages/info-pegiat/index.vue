<template>
    <div class="mt-5">
        <section id="main-container" class="main-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="column-title" data-aos="fade-right" data-aos-duration="1000">
                            Stakeholders
                        </h3>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <p>
                                Data Stakeholder (Pemangku Kepentingan) mengandung informasi detail tentang seluruh pemangku kepentingan yang terlibat dalam REDD+ dan aktivitas berbasis lahan terkait di Indonesia. Bagian Pemangku Kepentingan ini terhubung dengan bagian Kontak dan Proyek dari Bank Data.
                            </p>
                        </div>
                        <vue-good-table :columns="columns" :rows="result" :pagination-options="{
                            enabled: true,
                        }" :search-options="{
    enabled: true
}">
                            <template slot="table-row" slot-scope="props">
                                <span v-if="props.column.field == 'nama'">
                                    {{ props.row.nama }}
                                </span>
                                <span v-if="props.column.field == 'tipe'">
                                    {{ props.row.tipe }}
                                </span>
                                <span v-if="props.column.field == 'telepon'">
                                    {{ props.row.telepon }}
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
					label: 'Nama',
					field: 'nama',
				},
				{
					label: 'Tipe',
					field: 'tipe',
				},
				{
					label: 'Telepon',
					field: 'telepon',
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
                .$get(`${this.$config.baseURL}/stackholders`)
                .then((res) => {
                    let decrypt = this.$decryptFunc(res, 'stackholders')
                    this.result = decrypt.data;
                })
                .catch((err) => {

                })
        },
    },
}
</script>
  