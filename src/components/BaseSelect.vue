<script>

export default {
    name: 'BaseSelect',

    data: () => ({
        types: [
            "Bug",
            "Dark",
            "Dragon",
            "Electric",
            "Fairy",
            "Fighting",
            "Fire",
            "Flying",
            "Ghost",
            "Grass",
            "Ground",
            "Ice",
            "Normal",
            "Poison",
            "Psychic",
            "Rock",
            "Steel",
            "Water"
        ]
    }),

    emits: ['types-change'],

    methods: {
        clickOption() {
            this.$emit('types-change', value)
        }
    }
};
</script>

<template>
    <section id="filter">
        <select class="form-select">
            <option selected>All</option>
            <option role="button" v-for="(type, i) in types" :value="i" @click="$emit('types-change', type)">{{
                type }}
            </option>
        </select>
    </section>
</template>

<style></style>