<script>
import { store } from '../../data/store.js'
import PokemonCard from './PokemonCard.vue'

export default {
    name: 'PokemonList',

    data: () => store,

    components: { PokemonCard }
};
</script>

<template>
    <div className="pokedex">
        <PokemonCard v-for="character in characters" :key="character._id" v-bind="character" />
    </div>
</template>

<style scoped>
.pokedex {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(5, 20%);
}
</style>