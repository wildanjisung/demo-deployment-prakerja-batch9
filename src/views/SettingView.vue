<template>
  <div class="about">
    <h1>This is an setting page</h1>
    <button @click="gotoDestination('/')"> goto home</button>
  </div>
</template>

<script>
export default {
  name: 'SettingView',
  data() {
    return {
      angka: 0 
    }
  },
  methods: {
    gotoDestination(params) {
      this.$router.push(params)
    }
  }
}
</script>
