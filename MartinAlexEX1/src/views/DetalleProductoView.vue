<template>
    <h2>Detalle Producto</h2>
    <p>ID: {{ id }}</p>
    <p>Name: {{ nombre }}</p>
    <p>Description: {{ descripcion }}</p>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  // Definir las props que hemos pasado por parametro en el Product
  defineProps({
    id: String,
    nombre: String,
    descripcion: String
  });

  
</script>

