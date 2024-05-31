<template>
  <div class="about">
    <h1>This is an Pokemon page</h1>
    <ul>
      <li v-for="pokemon in listPokemon" :key="pokemon.name">
        {{ pokemon.name }} - {{ pokemon.url }}
      </li>
      <button @click="fetchPokemon">Load More</button>
    </ul>
  </div>
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
    fetchPokemon() {
      this.$store.dispatch('pokemon/fetchPokemon')
    }
  },
  computed: {
    listPokemon() {
      return this.$store.state.pokemon.list
    }
  },
  mounted() {
    this.fetchPokemon();
  }
}
</script>
