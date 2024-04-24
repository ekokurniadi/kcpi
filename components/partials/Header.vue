<template>
  <!-- Header start -->
  <header id="header" class="header-one" style="margin-botom: 60px !important">
    <div class="site-navigation mb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
              <div class="logo">
                <nuxt-link to="/" class="d-block">
                  <img loading="lazy" src="/assets/images/logo.png" class="w-100" alt="KCPI" />

                </nuxt-link>
              </div>
              <!-- logo end -->
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div id="navbar-collapse" class="collapse navbar-collapse" ref="navbars">
                <ul class="nav navbar-nav ml-auto">
                  <li :class="setActive('/', false)">
                    <nuxt-link class="nav-link" to="/">Beranda</nuxt-link>
                  </li>

                  <li :class="setActive('tentang', true)" id="dropdown-tentang">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown">Tentang <i
                        class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-menu" role="menu">
                      <li>
                        <nuxt-link to="/tentang/knowledge-center" class="custom_collapse">Knowledge Centre</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/tentang/amanat-perubahan-iklim" class="custom_collapse">Amanat Perubahan
                          Iklim</nuxt-link>
                      </li>
                    </ul>
                  </li>

                  <li :class="setActive('info', true)" id="dropdown-info">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown">Info Iklim <i
                        class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-menu" role="menu">
                      <li>
                        <nuxt-link to="/info/mengenai-perubahan-iklim" class="custom_collapse">Mengenai Perubahan
                          Iklim</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/info/dampak-dan-fenomena" class="custom_collapse">Dampak dan Fenomena</nuxt-link>
                      </li>
                    </ul>
                  </li>

                  <li :class="setActive('aksi', true)" id="dropdown-aksi">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown">Aksi <i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><nuxt-link to="/aksi/mitigasi">Mitigasi</nuxt-link></li>
                      <li><nuxt-link to="/aksi/adaptasi">Adaptasi</nuxt-link></li>
                      <li><nuxt-link to="/aksi/redd">REDD+</nuxt-link></li>
                      <li><nuxt-link to="/aksi/proklim">Proklim</nuxt-link></li>
                      <li><nuxt-link to="/aksi/perjanjian-paris">Perjanjian Paris</nuxt-link></li>
                      <li><nuxt-link to="/aksi/karhutla">Karhutla</nuxt-link></li>
                      <li><nuxt-link to="/aksi/srn">SRN</nuxt-link></li>
                    </ul>
                  </li>

                  <li :class="setActive('sumber-daya', true)" class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown">Sumber Daya <i
                        class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><nuxt-link to="/sumber-daya/sumber-dana">Sumber Dana</nuxt-link></li>
                      <li>
                        <nuxt-link to="/sumber-daya/peningkatan-kapasitas-dan-tenaga-ahli">Peningkatan Kapasitas dan
                          Tenaga Ahli
                        </nuxt-link>
                      </li>
                      <li><nuxt-link to="/sumber-daya/teknologi">Teknologi</nuxt-link></li>
                    </ul>
                  </li>
                  <li :class="setActive('/inovasi', false)" class="nav-item">
                    <nuxt-link class="nav-link" to="/inovasi">Inovasi</nuxt-link>
                  </li>
                  <li :class="setActive('/hasil-kerjasama', false)" class="nav-item">
                    <nuxt-link class="nav-link" to="/hasil-kerjasama">Hasil Kerjasama</nuxt-link>
                  </li>
                  <!-- <li :class="setActive('/profil-provinsi',false)" class="nav-item">
                    <nuxt-link class="nav-link" to="/profil-provinsi">Provinsi</nuxt-link>
                  </li> -->
                  <li class="nav-item">
                    <div class="nav-link" style="margin-top:10px;width:100px;">

                    </div>
                  </li>

                </ul>
              </div>

            </nav>
          </div>
          <!--/ Col end -->
        </div>
        <!--/ Row end -->
      </div>
      <div class="gtranslate_wrapper"></div>

      <script src="assets/float.js" defer></script>
      <!--/ Container end -->
    </div>
    <!--/ Navigation end -->
  </header>
  <!--/ Header end -->
</template>
<script nonce="sha256-Ry3i6MeJc8/HIDbjIZbuRbYCVKa3EwIsvCwVEGmr2as=">
export default {
  mounted() {
    this.removeClassActive()
    
  },

  methods: {
    removeClassActive() {
      const dropdowns = document.querySelectorAll('.nav-item.dropdown')
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove('active')
      })
    },
    setActive: function (named, isDropdown) {
      if (isDropdown) {
        if (this.$route.fullPath.split('/')[1] == named && named != '') {
          return 'nav-item dropdown active'
        }
        return 'nav-item dropdown'
      } else {
        return this.$route.fullPath == named ? 'nav-item active' : 'nav-item'
      }
    },
    googleTranslateInit: function () {

      let checkIfGoogleLoaded = setInterval(() => {

        if (gtranslateSettings != null) {
          clearInterval(checkIfGoogleLoaded);

          this.googleTranslateElement('google_translate_element');
        }

      }, 100);

    },

    googleTranslateElement: function () {
      window.gtranslateSettings = { "default_language": "id", "languages": ["en", "id"], "wrapper_selector": ".gtranslate_wrapper", "switcher_horizontal_position": "right", "switcher_vertical_position": "top", "float_switcher_open_direction": "bottom", "flag_style": "2d" }
    }

  },
}
</script>

<style>
.nav-item a {
  font-size: 12px !important;
}

.VIpgJd-ZVi9od-ORHb-OEVmcd {
  visibility: hidden !important;
  display: none !important;
  height: 0px !important;
  margin: 0 !important;
}

.VIpgJd-ZVi9od-vH1Gmf .indicator {
  display: none;
}

.text {
  color: red !important;
}

.goog-te-gadget img {
  display: none !important;
}

.goog-te-gadget-simple {
  background-color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
}


.custom-collapse {
  font-size: 12px !important;
}

#gt_float_wrapper {
  left: auto !important;
  right: 50px !important;
  top: 25px !important;
}


.gt_float_switcher .gt-selected .gt-current-lang {
  padding: 3px 3px !important;
}

.gt_float_switcher img {
  width: 20px;
}

.gt_float_switcher .gt-selected .gt-current-lang span.gt-lang-code {
  top:0px;
  font-size: 13px;
}

@media (max-width:576px) {
  #gt_float_wrapper {
    left: auto !important;
    right: 50px !important;
    top: 75px !important;
  }
}
</style>
