<script>
import { typesPokemon } from '../data';

export default {
    name: 'AppFilter',

    data: () => ({
        typesPokemon
    })
};
</script>

<template>
    <section id="filter">
        <select class="form-select">
            <option selected>All</option>
            <option v-for="(type, i) in typesPokemon" :value="i">{{ type }}</option>
        </select>
    </section>
</template>

<style></style>