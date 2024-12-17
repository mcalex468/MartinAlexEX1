<template>
    <button @click="augmentarV()">+1</button>
    <button @click="decrementarV()">-1</button>
</template>

<script setup>
import { inject } from 'vue';

const aug = inject('incrementar');
const dec = inject('decrementar');

const augmentarV = () => {
    aug()
};

const decrementarV = () => {
    dec()
}
</script>