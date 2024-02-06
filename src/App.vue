<script>
import axios from 'axios';
import { apiUri } from './data';
import { store } from './data/store.js'
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'Pokévuex',

  components: { AppMain, AppHeader },

  methods: {
    fetchCharacters(endpoint = apiUri) {
      axios.get(endpoint).then(res => {
        const characters = res.data.docs;

        store.characters = characters.map(character => {
          const { name, number, type1, imageUrl } = character;
          return { name, number, type: type1, image: imageUrl };
        })
      })
    },
    searchCharacters(type) {
      const searchEndpoint = `${apiUri}?eq[type1]=${type}`;
      this.fetchCharacters(searchEndpoint)
    }
  },

  created() {
    this.fetchCharacters();
  }
};
</script>

<template>
  <AppHeader @types-change="searchCharacters" />
  <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>