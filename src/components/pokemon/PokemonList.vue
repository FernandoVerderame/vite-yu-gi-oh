<script>
import { store } from '../../data/store.js'
import PokemonCard from './PokemonCard.vue'

export default {
    name: 'PokemonList',

    data: () => ({ store }),

    components: { PokemonCard }
};
</script>

<template>
    <section id="pokemon-list">
        <div class="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-5">
            <div class="col" v-for="character in store.characters" :key="character['_id']">
                <PokemonCard :name="character.name" :image="character.imageUrl" :number="character.number"
                    :type="character.type1" />
            </div>
        </div>
    </section>
</template>

<style></style>