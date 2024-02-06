<script>
import { colorMap } from '../../data';
export default {
    name: 'PokemonCard',

    props: {
        name: String,
        image: String,
        number: Number,
        type: String
    },

    computed: {
        bgColor() {
            return colorMap[this.type];
        }
    }
};
</script>

<template>
    <div class="pokemon-card text-center p-2" :style="`background-color: ${bgColor}`">
        <div class="thumb">
            <img :src="image" :alt="name" class="img-fluid rounded-circle mb-3">
        </div>
        <div class="number">{{ number }}</div>
        <h4>{{ name }}</h4>
        <div class="type">{{ type }}</div>
    </div>
</template>

<style lang="scss" scoped>
.pokemon-card {
    border-radius: 20px;
    background-color: #DEFDE0;
    margin: 10px;
}

h4 {
    font-weight: 600;
}

.type {
    font-style: italic;
}

.thumb {
    width: 150px;
    height: 150px;
    margin: 0 auto;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>