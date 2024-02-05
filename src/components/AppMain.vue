<script>
export default {
    name: 'AppMain'
};
</script>

<template>
    <section id="buttons">
        <div class="blue-btn"></div>
        <div class="red btn"></div>
        <div class="yellow btn"></div>
        <div class="green btn"></div>
    </section>
    <section id="pokemon">
        <main class="container"></main>
    </section>
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
</style>