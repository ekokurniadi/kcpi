<template>
  <div class="mt-5">
    <div id="banner-area" class="banner-area" style="background-image: url(/assets/images/static-bg-img/sky.jpg)">
      <div class="banner-text">
        <div class="container">
          <div class="row">
            <div class="col-lg-12" data-aos="fade-down" data-aos-duration="1000">
              <div class="banner-heading">
                <h1 class="banner-title">
                  Tentang Knowledge Centre Perubahan Iklim
                </h1>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="#">Tentang</a></li>
                    <li class="breadcrumb-item active">
                      <a href="#" aria-current="page">Knowledge Centre Perubahan Iklim</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <!-- Col end -->
          </div>
          <!-- Row end -->
        </div>
        <!-- Container end -->
      </div>
      <!-- Banner text end -->
    </div>
    <!-- Banner area end -->

    <section id="main-container" class="main-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3 class="column-title" data-aos="fade-right" data-aos-duration="1000">
              {{ result.title }}
            </h3>
            <div data-aos="fade-left" data-aos-duration="1000" v-html="result.content" style="text-align:justify"></div>
          </div>
          <!-- Col end -->
        </div>

        <div class="row">
          <div class="col-md-12" data-aos="fade-left" data-aos-duration="1000">
            <h3 class="column-title">Kirim Masukan</h3>

            <form id="contact-form">
              <div class="error-container"></div>
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Nama</label>
                    <input class="form-control form-control-name" name="name" id="name" placeholder="" type="text"
                       v-model="form.nama" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Email</label>
                    <input class="form-control form-control-email" name="email" id="email" placeholder="" type="email"
                       v-model="form.email" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Subyek</label>
                    <input class="form-control form-control-subject" name="subject" id="subject" placeholder="" 
                      v-model="form.subject" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Pesan</label>
                <textarea class="form-control form-control-message" name="message" id="message" placeholder="" rows="10"
                   v-model="form.message"></textarea>
              </div>
              <div class="form-group" v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                  <li v-for="error in errors" style="color: red;">{{ error }}</li>
                </ul>
              </div>
              <div class="text-right">
                <br />
                <button class="btn btn-primary solid blank" type="button" @click="savePesan()">
                  Send Feedback
                </button>
              </div>
            </form>
          </div>
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
      result: {},
      errors: [],
      form: {
        nama: '',
        email: '',
        subject: '',
        message: '',
      }
    }
  },

  created: async function () {
    await this.getData()
  },
  methods: {
    savePesan: async function () {
      
      if (this.form.email && this.form.nama && this.form.subject && this.form.message && this.form.email.includes('@')) {
        this.errors =[];
        await this.$axios
        .$post(`${this.$config.baseURL}/feedback`,this.form)
        .then((_) => {
          this.form ={};
          alert('Thank you for submit your feedback')
        })
        .catch((err) => console.log(err))
        return true;
      }

      this.errors = [];

      if (!this.form.email) {
        this.errors.push('Email is required');
      }

      if(!this.form.email.includes('@')){
        this.errors.push('Email format is invalid')
      }

      if (!this.form.nama) {
        this.errors.push('Nama is required');
      }
      if (!this.form.subject) {
        this.errors.push('Subject is required');
      }
      if (!this.form.message) {
        this.errors.push('Pesan is required');
      }
      
    },
    getData: async function () {
      await this.$axios
        .$get(`${this.$config.baseURL}/konten_statis/tentang-knowledge-centre`)
        .then((res) => {
          let decrypt = this.$decryptFunc(
            res,
            '/konten_statis/tentang-knowledge-centre'
          )
          this.result = decrypt.data
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
