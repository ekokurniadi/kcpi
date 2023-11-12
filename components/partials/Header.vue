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
                  <div class="d-flex">
                    <img
                      loading="lazy"
                      src="/assets/images/kcpi-single.png"
                      style="width: 50px; height: 50px; margin-bottom: 10px"
                      alt="Constra"
                    />
                    <span class="justify-content-center align-self-center">
                      <h6 class="ml-3 mr-3 my-auto text-white">
                        KNOWLEDGE CENTRE <br />PERUBAHAN IKLIM
                      </h6>
                    </span>
                    <img
                      loading="lazy"
                      src="/assets/images/klhk-logo.png"
                      style="width: 50px; height: 50px; margin-top: 5px"
                      alt="Logo KCPI"
                    />
                  </div>
                </nuxt-link>
              </div>
              <!-- logo end -->
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
                aria-controls="navbar-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                id="navbar-collapse"
                class="collapse navbar-collapse"
                ref="navbars"
              >
                <ul class="nav navbar-nav ml-auto">
                  <li :class="setActive('/', false)">
                    <nuxt-link class="nav-link" to="/">Beranda</nuxt-link>
                  </li>

                  <li :class="setActive('tentang', true)" id="dropdown-tentang">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown"
                      >Tentang <i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="dropdown-menu" role="menu">
                      <li>
                        <nuxt-link
                          to="/tentang/knowledge-center"
                          class="custom_collapse"
                          >Knowledge Centre</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          to="/tentang/amanat-perubahan-iklim"
                          class="custom_collapse"
                          >Amanat Perubahan Iklim</nuxt-link
                        >
                      </li>
                    </ul>
                  </li>

                  <li :class="setActive('info', true)" id="dropdown-info">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown"
                      >Info Iklim <i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="dropdown-menu" role="menu">
                      <li>
                        <nuxt-link
                          to="/info/mengenai-perubahan-iklim"
                          class="custom_collapse"
                          >Mengenai Perubahan Iklim</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          to="/info/dampak-dan-fenomena"
                          class="custom_collapse"
                          >Dampak dan Fenomena</nuxt-link
                        >
                      </li>
                    </ul>
                  </li>

                  <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown"
                      >Aksi <i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><nuxt-link to="/">Mitigasi</nuxt-link></li>
                      <li><nuxt-link to="/">Adaptasi</nuxt-link></li>
                      <li><nuxt-link to="/">REDD+</nuxt-link></li>
                      <li><nuxt-link to="/">Proklim</nuxt-link></li>
                    </ul>
                  </li> -->

                  <li :class="setActive('sumber-daya', true)" class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown"
                      >Sumber Daya <i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><nuxt-link to="/sumber-daya/sumber-dana">Sumber Dana</nuxt-link></li>
                      <li>
                        <nuxt-link to="/sumber-daya/peningkatan-kapasitas-dan-tenaga-ahli"
                          >Peningkatan Kapasitas dan Tenaga Ahli
                        </nuxt-link>
                      </li>
                      <li><nuxt-link to="/sumber-daya/teknologi">Teknologi</nuxt-link></li>
                    </ul>
                  </li>
                  <li :class="setActive('/inovasi')">
                    <nuxt-link class="nav-link" to="/inovasi"
                      >Inovasi</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/"
                      >Hasil Kerjasama</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/"
                      >Profil Provinsi</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <!--/ Col end -->
        </div>
        <!--/ Row end -->
      </div>
      <!--/ Container end -->
    </div>
    <!--/ Navigation end -->
  </header>
  <!--/ Header end -->
</template>
<script>
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
  },
}
</script>
