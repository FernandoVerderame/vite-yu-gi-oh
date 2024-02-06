<script>
import AppFilter from './AppFilter.vue';

export default {
    name: 'AppHeader',

    components: { AppFilter }
};
</script>

<template>
    <header>
        <div class="container">

            <section id="buttons">
                <div class="blue btn"></div>
                <div class="red btn"></div>
                <div class="yellow btn"></div>
                <div class="green btn"></div>

            </section>
            <AppFilter />
        </div>
    </header>
</template>

<style lang="scss" scoped>
#buttons {
    margin-top: 30px;
}

.btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid white;
    margin: 5px;

    &.blue {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: blue;
        border: 5px solid white;
    }

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
</style>