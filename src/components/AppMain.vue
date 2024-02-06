<script>
import PokemonList from './pokemon/PokemonList.vue';

export default {
    name: 'AppMain',

    components: { PokemonList }
};
</script>

<template>
    <main>
        <section id="pokemon">
            <div class="container">
                <div class="pokedeck">
                    <div class="card-list-bg">
                        <PokemonList />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
#pokemon {
    margin-top: 50px;

    .pokedeck {
        background-color: #DEDEDE;
        border-radius: 20px;
        padding: 50px 25px;

        .card-list-bg {
            background-color: #575C61;
            padding: 20px 10px;
        }
    }
}
</style>