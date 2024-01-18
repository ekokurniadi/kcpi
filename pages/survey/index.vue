<template lang="">
  <div class="mt-5">
    <CardTitleWithImage title="Survei Kepuasan Pengunjung" />
    <section id="main-container" class="main-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3 class="column-title">Data Responden</h3>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label for="Nama" class="font-weight-bold">Nama</label>
              <input
                type="text"
                class="form-control"
                name="nama"
                id="nama"
                placeholder="Nama"
                v-model="form.nama"
              />
            </div>
            <div class="form-group">
              <label for="Nama" class="font-weight-bold">Jenis Kelamin</label>
              <p>
                <input
                  type="radio"
                  name="jenis_kelamin"
                  id="jenis_kelamin"
                  value="Laki-Laki"
                  v-model="form.jenis_kelamin"
                />
                <span>Laki-Laki</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="jenis_kelamin"
                  id="jenis_kelamin"
                  value="Perempuan"
                  v-model="form.jenis_kelamin"
                />
                <span>Perempuan</span>
              </p>
            </div>
            <div class="form-group">
              <label for="Nama" class="font-weight-bold">Usia</label>
              <p>
                <input
                  type="radio"
                  name="usia"
                  id="usia"
                  value="13 - 17 Tahun"
                  v-model="form.usia"
                />
                <span>13 - 17 Tahun</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="usia"
                  id="usia"
                  value="18 - 24 Tahun"
                  v-model="form.usia"
                />
                <span>18 - 24 Tahun</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="usia"
                  id="usia"
                  value="25 - 39 Tahun"
                  v-model="form.usia"
                />
                <span>25 - 39 Tahun</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="usia"
                  id="usia"
                  value="40 - 54 Tahun"
                  v-model="form.usia"
                />
                <span>40 - 54 Tahun</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="usia"
                  id="usia"
                  value="55 Tahun ke atas"
                  v-model="form.usia"
                />
                <span>55 Tahun ke atas</span>
              </p>
            </div>
            <div class="form-group">
              <label for="Nama" class="font-weight-bold">Pekerjaan</label>
              <input
                type="text"
                class="form-control"
                name="pekerjaan"
                id="pekerjaan"
                placeholder="Pekerjaan"
                v-model="form.pekerjaan"
              />
            </div>
            <div class="form-group">
              <label for="Nama" class="font-weight-bold">Alamat Email</label>
              <input
                type="text"
                name="email"
                id="email"
                class="form-control"
                placeholder="Alamat Email"
                v-model="form.email"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <h3 class="column-title">Pengalaman Menggunakan Website</h3>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label for="Nama" class="font-weight-bold"
                >Bagaimana Anda mengetahui website KCPI KLHK?</label
              >
              <p>
                <input
                  type="checkbox"
                  name="media_social"
                  id="media_social"
                  value="Media Sosial"
                  v-model="form.tau_dari_media_sosial"
                />
                <span>Media Sosial</span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="rekomendasi_teman"
                  id="rekomendasi_teman"
                  value="Rekomendasi Teman"
                  v-model="form.tau_dari_teman"
                />
                <span>Rekomendasi Teman</span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="pencarian_internet"
                  id="pencarian_internet"
                  value="Pencarian Internet"
                  v-model="form.tau_dari_internet"
                />
                <span>Pencarian Internet</span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="lainnya"
                  id="lainnya"
                  value="Lainnya"
                  v-model="form.tau_dari_lainnya"
                />
                <span>Lainnya</span>
              </p>
            </div>
            <div class="form-group">
              <label for="Nama" class="font-weight-bold"
                >Seberapa sering Anda mengunjungi website ini?</label
              >
              <p>
                <input
                  type="radio"
                  name="kunjungan"
                  id="kunjungan"
                  value="Setiap Hari"
                  v-model="form.kunjungan"
                />
                <span>Setiap Hari</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="kunjungan"
                  id="kunjungan"
                  value="Beberapa kali seminggu"
                  v-model="form.kunjungan"
                />
                <span>Beberapa kali seminggu</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="kunjungan"
                  id="kunjungan"
                  value="Beberapa kali sebulan"
                  v-model="form.kunjungan"
                />
                <span>Beberapa kali sebulan</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="kunjungan"
                  id="kunjungan"
                  value="Jarang"
                  v-model="form.kunjungan"
                />
                <span>Jarang</span>
              </p>
            </div>
            <div class="form-group">
              <label for="Nama" class="font-weight-bold"
                >Tujuan utama Anda mengunjungi website ini adalah:</label
              >
              <p>
                <input
                  type="checkbox"
                  name="cari_info"
                  id="cari_info"
                  value="Mencari Informasi tentang perubahan iklim"
                  v-model="form.tujuan_cari_info"
                />
                <span>Mencari Informasi tentang perubahan iklim</span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="cari_data_publikasi"
                  id="cari_data_publikasi"
                  value="Mencari Data Publikasi"
                  v-model="form.tujuan_cari_data_publikasi"
                />
                <span>Mencari Data Publikasi</span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="melihat_berita"
                  id="melihat_berita"
                  value="Melihat Berita atau update terbaru"
                  v-model="form.tujuan_melihat_berita"
                />
                <span>Melihat Berita atau update terbaru</span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="tujuan_lainnya"
                  id="tujuan_lainnya"
                  value="Lainnya"
                  v-model="form.tujuan_lainnya"
                />
                <span>Lainnya</span>
              </p>
            </div>
          </div>
          <div class="col-lg-12">
            <h3 class="column-title">Penilaian Website :</h3>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label for="Nama" class="font-weight-bold"
                >Bagaimana Anda menilai tampilan dan desain website?</label
              >
              <p>
                <input
                  type="radio"
                  name="nilai_website"
                  id="nilai_website"
                  value="Sangat Memuaskan"
                  v-model="form.nilai_website"
                />
                <span>Sangat Memuaskan</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website"
                  id="nilai_website"
                  value="Memuaskan"
                  v-model="form.nilai_website"
                />
                <span>Memuaskan</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website"
                  id="nilai_website"
                  value="Cukup"
                  v-model="form.nilai_website"
                />
                <span>Cukup</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website"
                  id="nilai_website"
                  value="Kurang"
                  v-model="form.nilai_website"
                />
                <span>Kurang</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website"
                  id="nilai_website"
                  value="Sangat Kurang"
                  v-model="form.nilai_website"
                />
                <span>Sangat Kurang</span>
              </p>
            </div>
            <div class="form-group">
              <label for="Nama" class="font-weight-bold"
                >Seberapa mudah menavigasi dan menemukan informasi di
                website?</label
              >
              <p>
                <input
                  type="radio"
                  name="nilai_website_kemudahan_navigasi"
                  id="nilai_website_kemudahan_navigasi"
                  value="Sangat Mudah"
                  v-model="form.nilai_website_kemudahan_navigasi"
                />
                <span>Sangat Mudah</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_kemudahan_navigasi"
                  id="nilai_website_kemudahan_navigasi"
                  value="Mudah"
                  v-model="form.nilai_website_kemudahan_navigasi"
                />
                <span>Mudah</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_kemudahan_navigasi"
                  id="nilai_website_kemudahan_navigasi"
                  value="Cukup Sulit"
                  v-model="form.nilai_website_kemudahan_navigasi"
                />
                <span>Cukup Sulit</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_kemudahan_navigasi"
                  id="nilai_website_kemudahan_navigasi"
                  value="Sulit"
                  v-model="form.nilai_website_kemudahan_navigasi"
                />
                <span>Sulit</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_kemudahan_navigasi"
                  id="nilai_website_kemudahan_navigasi"
                  value="Sangat Sulit"
                  v-model="form.nilai_website_kemudahan_navigasi"
                />
                <span>Sangat Sulit</span>
              </p>
            </div>
            <div class="form-group">
              <label for="Nama" class="font-weight-bold"
                >Bagaimana kualitas konten atau informasi yang
                disediakan?</label
              >
              <p>
                <input
                  type="radio"
                  name="nilai_website_kualitas_konten"
                  id="nilai_website_kualitas_konten"
                  value="Sangat Berkualitas"
                  v-model="form.nilai_website_kualitas_konten"
                />
                <span>Sangat Berkualitas</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_kualitas_konten"
                  id="nilai_website_kualitas_konten"
                  value="Berkualitas"
                  v-model="form.nilai_website_kualitas_konten"
                />
                <span>Berkualitas</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_kualitas_konten"
                  id="nilai_website_kualitas_konten"
                  value="Cukup"
                  v-model="form.nilai_website_kualitas_konten"
                />
                <span>Cukup</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_kualitas_konten"
                  id="nilai_website_kualitas_konten"
                  value="Kurang"
                  v-model="form.nilai_website_kualitas_konten"
                />
                <span>Kurang</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_kualitas_konten"
                  id="nilai_website_kualitas_konten"
                  value="Sangat Kurang"
                  v-model="form.nilai_website_kualitas_konten"
                />
                <span>Sangat Kurang</span>
              </p>
            </div>
            <div class="form-group">
              <label for="Nama" class="font-weight-bold"
                >Apakah website ini memuat informasi terkini dan relevan?</label
              >
              <p>
                <input
                  type="radio"
                  name="nilai_website_info_aktual"
                  id="nilai_website_info_aktual"
                  value="Selalu"
                  v-model="form.nilai_website_info_aktual"
                />
                <span>Selalu</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_info_aktual"
                  id="nilai_website_info_aktual"
                  value="Sering"
                  v-model="form.nilai_website_info_aktual"
                />
                <span>Sering</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_info_aktual"
                  id="nilai_website_info_aktual"
                  value="Kadang-Kadang"
                  v-model="form.nilai_website_info_aktual"
                />
                <span>Kadang-Kadang</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_info_aktual"
                  id="nilai_website_info_aktual"
                  value="Jarang"
                  v-model="form.nilai_website_info_aktual"
                />
                <span>Jarang</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_info_aktual"
                  id="nilai_website_info_aktual"
                  value="Tidak Pernah"
                  v-model="form.nilai_website_info_aktual"
                />
                <span>Tidak Pernah</span>
              </p>
            </div>
            <div class="form-group">
              <label for="Nama" class="font-weight-bold"
                >Apakah Anda mengalami kesulitan teknis saat mengunjungi
                website?</label
              >
              <p>
                <input
                  type="radio"
                  name="nilai_website_gangguan_teknis"
                  id="nilai_website_gangguan_teknis"
                  value="Sering"
                  v-model="form.nilai_website_gangguan_teknis"
                />
                <span>Sering</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_gangguan_teknis"
                  id="nilai_website_gangguan_teknis"
                  value="Kadang-Kadang"
                  v-model="form.nilai_website_gangguan_teknis"
                />
                <span>Kadang-Kadang</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_gangguan_teknis"
                  id="nilai_website_gangguan_teknis"
                  value="Jarang"
                  v-model="form.nilai_website_gangguan_teknis"
                />
                <span>Jarang</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="nilai_website_gangguan_teknis"
                  id="nilai_website_gangguan_teknis"
                  value="Tidak Pernah"
                  v-model="form.nilai_website_gangguan_teknis"
                />
                <span>Tidak Pernah</span>
              </p>
            </div>
          </div>
          <div class="col-lg-12">
            <h3 class="column-title">Saran dan Masukkan :</h3>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label for="Nama" class="font-weight-bold"
                >Apa saran Anda untuk meningkatkan kualitas website KCPI
                KLHK?</label
              >
              <textarea
                name="saran"
                id="saran"
                cols="30"
                rows="5"
                class="form-control"
                v-model="form.saran"
              ></textarea>
            </div>
          </div>
          <div class="col-lg-12">
            <h3 class="column-title">Kesimpulan :</h3>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label for="Nama" class="font-weight-bold"
                >Secara keseluruhan, seberapa puas Anda dengan website KCPI
                KLHK?</label
              >
              <p>
                <input
                  type="radio"
                  name="kesimpulan"
                  id="kesimpulan"
                  value="Sangat Puas"
                  v-model="form.kesimpulan"
                />
                <span>Sangat Puas</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="kesimpulan"
                  id="kesimpulan"
                  value="Puas"
                  v-model="form.kesimpulan"
                />
                <span>Puas</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="kesimpulan"
                  id="kesimpulan"
                  value="Netral"
                  v-model="form.kesimpulan"
                />
                <span>Netral</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="kesimpulan"
                  id="kesimpulan"
                  value="Tidak Puas"
                  v-model="form.kesimpulan"
                />
                <span>Tidak Puas</span>
              </p>
              <p>
                <input
                  type="radio"
                  name="kesimpulan"
                  id="kesimpulan"
                  value="Sangat Tidak Puas"
                  v-model="form.kesimpulan"
                />
                <span>Sangat Tidak Puas</span>
              </p>
            </div>
            <div class="form-group" v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" style="color: red">{{ error }}</li>
              </ul>
            </div>
            <div class="form-group">
              <button
                class="btn btn-primary btn-md"
                type="button"
                @click="save()"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import CardTitleWithImage from '~/components/shared/CardTitleWithImage.vue'
export default {
  components: {
    CardTitleWithImage,
  },
  data() {
    return {
      errors: [],
      form: {
        nama: '',
        jenis_kelamin: '',
        usia: '',
        pekerjaan: '',
        email: '',
        tau_dari_media_sosial: false,
        tau_dari_teman: false,
        tau_dari_internet: false,
        tau_dari_lainnya: false,
        kunjungan: '',
        tujuan_cari_info: false,
        tujuan_cari_data_publikasi: false,
        tujuan_melihat_berita: false,
        tujuan_lainnya: false,
        nilai_website: '',
        nilai_website_kemudahan_navigasi: '',
        nilai_website_kualitas_konten: '',
        nilai_website_info_aktual: '',
        nilai_website_gangguan_teknis: '',
        saran: '',
        kesimpulan: '',
      },
    }
  },
  methods: {
    save: async function () {
      if (
        this.form.email &&
        this.form.nama &&
        this.form.jenis_kelamin &&
        this.form.email.includes('@')
      ) {
        await this.$axios
          .$post(`${this.$config.baseURL}/survey_kepuasan`, this.form)
          .then((_) => {
            this.form = {}
            alert('Thank you for submit your feedback')
          })
          .catch((err) => console.log(err))
      } else {
        this.errors = []

        if (!this.form.email) {
          this.errors.push('Email is required')
        }

        if (!this.form.email.includes('@')) {
          this.errors.push('Email format is invalid')
        }

        if (!this.form.nama) {
          this.errors.push('Nama is required')
        }
        if (!this.form.jenis_kelamin) {
          this.errors.push('Jenis Kelamin is required')
        }
      }
    },
  },
}
</script>
