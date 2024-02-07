<script>

export default {
    name: 'BaseSelect',

    data: () => ({ selectedOption: '' }),

    props: {
        defaultLabel: String,
        defaultValue: String,
        options: Array
    },

    emits: ['option-change']
};
</script>

<template>
    <section id="filter">
        <section v-model="selectedOption" @change="$emit('option-change', selectedOption)">
            <option :value="defaultValue || ''">{{ defaultLabel || '---' }}</option>
            <option v-for="(option, i) in options" :key="option.id" :value="option.value">{{ option.label }}</option>
        </section>
    </section>
</template>

<style></style>