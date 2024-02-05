<script>
import { store } from '../../data/store.js'

export default {
    name: 'PokemonList',
    data: () => ({ store })
};
</script>

<template>
    <section id="pokemon-list">
        <div class="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-5">
            <div class="col" v-for="character in store.characters" :key="character['_id']"></div>
        </div>
    </section>
</template>

<style></style>