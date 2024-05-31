<template>
  <div class="about">
    <h1>This is an privacy page</h1>
    <button @click="gotoDestination('/')"> goto home</button>
    <p>berapa id: {{ id }}</p>
    <p>angka dari store: {{ angkaDariStore }}</p>
  </div>
</template>

<script>
export default {
  name: 'PrivacyView',
  methods: {
    gotoDestination(params) {
      this.$router.push(params)
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    angkaDariStore() {
      return this.$store.state.privacy.angka
    }
  }
}
</script>
