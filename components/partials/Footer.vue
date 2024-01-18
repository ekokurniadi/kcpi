<template>
  <div>
    <footer id="footer" class="footer bg-overlay">
      <div class="footer-main">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-4 col-md-6 footer-widget footer-about">
              <div class="d-flex">
                <nuxt-link to="/" class="d-block">
                  <img
                    loading="lazy"
                    src="/assets/images/logo.png"
                    class="w-100"
                    alt="KCPI"
                  />
                </nuxt-link>
              </div>
              <p>
                {{ dataFooter.alamat }}
              </p>
              <div class="footer-social">
                <ul>
                  <li>
                    <a :href="dataFooter.fb" aria-label="Facebook"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a :href="dataFooter.twitter" aria-label="Twitter">
                      <img
                        loading="lazy"
                        src="/assets/images/logo-x-twitter.png"
                        style="width: 20px; height: 18px"
                        alt="KCPI"
                    /></a>
                  </li>
                  <li>
                    <a :href="dataFooter.ig" aria-label="Instagram"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                  <li>
                    <a :href="dataFooter.youtube" aria-label="Youtube"
                      ><i class="fab fa-youtube"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <!-- Footer social end -->
            </div>
            <!-- Col end -->
            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
              <h3 class="widget-title">Sitemap</h3>
              <ul class="list-arrow">
                <li><nuxt-link to="/">Beranda</nuxt-link></li>
                <li>
                  <nuxt-link to="/tentang/knowledge-centre"
                    >Tentang KCPI</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/info/mengenai-perubahan-iklim"
                    >Info Iklim</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/aksi/mitigasi">Aksi</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/sumber-daya/sumber-dana"
                    >Sumber Daya</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/inovasi">Inovasi</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/hasil-kerjasama">Hasil Kerjasama</nuxt-link>
                </li>
              </ul>
            </div>
            <!-- Col end -->

            <div class="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
              <div class="row mb-2">
                <div class="col-md-12">
                  <h3 class="widget-title">Survei Kepuasan</h3>
                  <div class="working-hours">
                    <nuxt-link
                      to="/survey"
                      style="color: white; text-decoration: underline"
                      >Link Survei Kepuasan Pengunjung
                      <i class="fas fa-external-link"></i
                    ></nuxt-link>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <h3 class="widget-title">Statistik Pengunjung</h3>
                  <div class="working-hours">
                    <app-visitor-counter />
                  </div>
                </div>
              </div>
            </div>
            <!-- Col end -->
          </div>
          <!-- Row end -->
        </div>
        <!-- Container end -->
      </div>
      <!-- Footer main end -->
    </footer>
    <!-- Footer end -->
  </div>
</template>

<script>
import VisitorCounter from '@/components/VisitorCounter.vue'
export default {
  components: {
    'app-visitor-counter': VisitorCounter,
  },
  data() {
    return {
      surveyLink: '',
      dataFooter: {
        alamat:
          'Gedung Manggala Wanabakti Blok I lt. 2, Jl. Jenderal Gatot Subroto - Jakarta 10270, Po Box 6505, Indonesia',
        fb: 'https://facebook.com',
        ig: 'https://instagram.com',
        twitter: 'https://twitter.com',
        youtube: 'https://youtube.com',
      },
    }
  },
  mounted() {
    this.getSurveyLink()
    this.getDataFooter()
  },
  methods: {
    getSurveyLink: async function () {
      await this.$axios
        .$get(`${this.$config.baseURL}/form_survey`)
        .then((res) => {
          let decrypt = this.$decryptFunc(res, 'form_survey')
          this.surveyLink = decrypt.data[0].url
        })
        .catch((err) => {})
    },
    getDataFooter: async function () {
      await this.$axios
        .$get(`${this.$config.baseURL}/setting`)
        .then((res) => {
          let decrypt = this.$decryptFunc(res, 'setting')
          this.dataFooter = decrypt.data
        })
        .catch((err) => {})
    },
  },
}
</script>
