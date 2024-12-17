<template>
    <h1>Llistat d'Usuaris</h1>
    <input v-model="nombreBuscado" type="text" >
    <div v-for="usuari in filtrarContacte" :key="usuari.id">
        <ul>
        <li>{{ usuari.nombre }}</li>
        </ul>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { watch } from 'vue';

const nombreBuscado = ref('');

const usuaris = [
    { id: 1, nombre: "Eric" },
    { id: 2, nombre: "German" },
    { id: 3, nombre: "Pol" },
    { id: 4, nombre: "Noel" },
    { id: 5, nombre: "Denis" },
    { id: 6, nombre: "Gerard" },
    { id: 7, nombre: "Denise" },
    { id: 8, nombre: "Alex" },
    { id: 9, nombre: "Noelia" },
    { id: 10, nombre: "Pau" },
    { id: 11, nombre: "Alexia" },
    { id: 12, nombre: "Alexandra" }
];

const filtrarContacte = computed(() => {
    if (!nombreBuscado.value) {
        return usuaris;
    }
    return usuaris.filter(usuari =>
        usuari.nombre.toLowerCase().includes(nombreBuscado.value.toLowerCase())
    );
});

// Implementacio watch per capturar canvis 
watch(nombreBuscado, (nouValor, anticValor) => {
  console.log(`El valor a canviat: de ${anticValor} a ${nouValor}`)
});
</script>



