<template>
    <h1>Comptador</h1>
    <p>El valor del comptador es: {{ valor }}</p>
    <ComptadorBotonsView />
</template>

<script setup>
import { ref, provide } from 'vue';
import ComptadorBotonsView from './ComptadorBotonsView.vue';

const valor = ref(0);

const incrementarValor = () => {
  valor.value++;
};

const decrementarValor = () => {
    valor.value--;
};

provide('incrementar', incrementarValor);
provide('decrementar', decrementarValor);

</script>