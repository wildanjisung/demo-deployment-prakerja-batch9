<template>
  <v-container>
    <h1>Registrasi Pengguna Baru</h1>
    <v-row>
      <v-col
        cols="12"
      >
        <v-text-field
          label="Masukkan Nama"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
      >
        <v-text-field
          label="Masukkan Password"
          outlined
          type="password"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
      >
        <v-text-field
          label="Masukkan Password Baru"
          outlined
          type="password"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <v-btn @click="changeTheme('#1976D2')" color="#1976D2"> Biru </v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <v-btn @click="changeTheme('#39ac37')" color="#39ac37"> Hijau </v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <v-btn @click="changeTheme('#db9600')" color="#db9600"> Orange </v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <v-btn @click="switchTheme"> Light/Dark </v-btn>
      </v-col>
      
    </v-row>

    <v-row>
      <v-col>
        <h1>This is an about page</h1>
        <button @click="gotoDestination('/')"> goto home</button>
        <p>berapa id nya: {{ id }}</p>
        <p>berapa angka dari store: {{ angkaDariStore }}</p>
        <input type="number" v-model="angkaChildren">
        <button @click="sendToStore">kirim ke store</button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      angkaChildren: 0
    }
  },
  methods: {
    changeTheme(color) {
      if(this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.dark.primary = color
      } else {
        this.$vuetify.theme.themes.light.primary = color
      }
      
    },
    switchTheme() {
      if(this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.light.primary = this.$vuetify.theme.themes.dark.primary
      } else {
        this.$vuetify.theme.themes.dark.primary = this.$vuetify.theme.themes.light.primary
      }

      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    gotoDestination(params) {
      this.$router.push(params)
    },
    sendToStore() {
      this.$store.dispatch('about/changeAngkaValue', this.angkaChildren)
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    angkaDariStore() {
      return this.$store.state.about.angka
    }
  }
}
</script>
