<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      result: [],
    }
  },
  created: async function () {
    await this.getData()
  },
  methods: {
    getData: async function () {
      await this.$axios
        .$get(
          `${this.$config.baseURL}/kategoribyfilter/inovasi`
        )
        .then((res) => {
          let decrypt = this.$decryptFunc(res, '/kategoribyfilter/')
          this.result = decrypt.data
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
