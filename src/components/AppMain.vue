<script>
import PokemonList from './pokemon/PokemonList.vue';

export default {
    name: 'AppMain',

    components: { PokemonList }
};
</script>

<template>
    <main>
        <section id="buttons">
            <div class="blue-btn"></div>
            <div class="red btn"></div>
            <div class="yellow btn"></div>
            <div class="green btn"></div>
        </section>

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
#buttons {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    margin-left: 200px;

    .blue-btn {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: blue;
        border: 5px solid white;
    }

    .btn {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid white;

        &.red {
            background-color: red;
        }

        &.yellow {
            background-color: yellow;
        }

        &.green {
            background-color: green
        }
    }
}

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