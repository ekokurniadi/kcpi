<template>
  <!-- Header start -->
  <header id="header" class="header-one">
    <div class="site-navigation">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
              <div class="logo">
                <nuxt-link to="/" class="d-block">
                  <img
                    loading="lazy"
                    src="/assets/images/app-logo.png"
                    alt="app-logo"
                  />
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

                  <li class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      >Info Iklim <i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="dropdown-menu" role="menu">
                      <li>
                        <a href="projects.html">Mengenai Perubahan Iklim</a>
                      </li>
                      <li>
                        <a href="projects-single.html">Dampak dan Fenomena </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      >Aksi <i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="services.html">Mitigasi</a></li>
                      <li><a href="service-single.html">Adaptasi</a></li>
                      <li><a href="service-single.html">REDD+</a></li>
                      <li><a href="service-single.html">Proklim</a></li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      >Sumber Daya <i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="typography.html">Sumber Dana</a></li>
                      <li>
                        <a href="404.html"
                          >Peningkatan Kapasitas dan Tenaga Ahli
                        </a>
                      </li>
                      <li><a href="typography.html">Teknologi</a></li>
                    </ul>
                  </li>
                  <li :class="setActive('/inovasi')">
                    <nuxt-link class="nav-link" to="/inovasi"
                      >Inovasi</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">Hasil Kerjasama</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">Profil Provinsi</a>
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
