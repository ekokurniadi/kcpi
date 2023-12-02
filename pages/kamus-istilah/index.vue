<template>
    <div class="mt-5">
        <section id="main-container" class="main-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="column-title" data-aos="fade-right" data-aos-duration="1000">
                            Istilah
                        </h3>
                        <vue-good-table :columns="columns" :rows="result" :pagination-options="{
                            enabled: true,
                        }" :search-options="{
    enabled: true
}">
                            <template slot="table-row" slot-scope="props">
                                <span v-if="props.column.field == 'istilah'">
                                    {{ props.row.istilah }}
                                </span>
                                <span v-if="props.column.field == 'definisi'">
                                    {{ props.row.definisi }}
                                </span>
                                <span v-if="props.column.field == 'referensi'">
                                    {{ props.row.referensi }}
                                </span>
                                <span v-if="props.column.field == 'tahun'">
                                    {{ props.row.tahun }}
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
					label: 'Istilah',
					field: 'istilah',
				},
				{
					label: 'Definisi',
					field: 'definisi',
				},
				{
					label: 'Referensi',
					field: 'referensi',
				},
                {
					label: 'Tahun',
					field: 'tahun',
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
                .$get(`${this.$config.baseURL}/istilah`)
                .then((res) => {
                    let decrypt = this.$decryptFunc(res, 'istilah')
                    this.result = decrypt.data;
                })
                .catch((err) => {

                })
        },
    },
}
</script>
  