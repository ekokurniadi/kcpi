<template>
  <div>
    <footer id="footer" class="footer bg-overlay">
      <div class="footer-main">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-4 col-md-6 footer-widget footer-about">
              <div class="d-flex">
                <img loading="lazy" src="/assets/images/kcpi-single.png"
                  style="width: 70px; height: 70px;margin-bottom:10px" alt="Constra" />
                <span class="justify-content-center align-self-center">
                  <h4 class="ml-3 my-auto text-white">Knowledge Centre Perubahan Iklim</h4>
                </span>
                <img loading="lazy" src="/assets/images/klhk-logo.png" style="width: 60px; height: 60px;margin-top:5px;"
                  alt="Logo KCPI" />
              </div>
              <p>
                Gedung Manggala Wanabakti Blok I lt. 2, Jl. Jenderal Gatot Subroto - Jakarta 10270, Po Box 6505,
                Indonesia
              </p>
              <div class="footer-social">
                <ul>
                  <li>
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#" aria-label="Youtube"><i class="fab fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
              <!-- Footer social end -->
            </div>
            <!-- Col end -->

            <!-- <div class="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
              <h3 class="widget-title">Sitemap</h3>
              <div class="working-hours">
                We work 7 days a week, every day excluding major holidays.
                Contact us if you have an emergency, with our Hotline and
                Contact form.
                <br /><br />
                Monday - Friday: <span class="text-right">10:00 - 16:00 </span>
                <br />
                Saturday: <span class="text-right">12:00 - 15:00</span> <br />
                Sunday and holidays:
                <span class="text-right">09:00 - 12:00</span>
              </div>
            </div> -->
            <!-- Col end -->

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
              <h3 class="widget-title">Sitemap</h3>
              <ul class="list-arrow">
                <li><a href="#">Beranda</a></li>
                <li><a href="#">Tentang</a>
                </li>
                <li>
                  <a href="#">Info Iklim</a>
                </li>
                <li><a href="#">Aksi</a></li>
                <li>
                  <a href="#">Sumber Daya</a>
                </li>
              </ul>
            </div>
            <!-- Col end -->


            <div class="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
              <div class="row mb-2">
                <div class="col-md-12">
                  <h3 class="widget-title">Survey</h3>
                  <div class="working-hours">
                    <a :href="surveyLink" target="_blank" style="color: white;text-decoration: underline;">Klik disini untuk mengisi survey <i
                        class="fas fa-external-link"></i></a>
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
    }
  },
  mounted() {
    this.getSurveyLink();
  },
  methods: {
    getSurveyLink: async function () {
      await this.$axios
        .$get(`${this.$config.baseURL}/form_survey`)
        .then((res) => {
          let decrypt = this.$decryptFunc(res, 'form_survey')
          this.surveyLink = decrypt.data[0].url

        })
        .catch((err) => {

        })
    }
  },
}
</script>
