<template>
    <div v-for="producto in productos" :key="producto.id">
        <!-- Ruta relativa para la ruta hijo -->
        <RouterLink :to="{
            name: 'detalleProducto',
            params: {
                id: producto.id,
                nombre: producto.nombre,
                descripcion: producto.descripcion
            }
        }">{{ producto.nombre }} </RouterLink>
    </div>
    <RouterView/>
</template>

<script setup>
import { RouterLink,RouterView } from 'vue-router';

const productos = [
    { id: 1, nombre: "Producte 1", descripcion: "Descripcio del producte 1" },
    { id: 2, nombre: "Producte 2", descripcion: "Descripcio del producte 2" },
    { id: 3, nombre: "Producte 3", descripcion: "Descripcio del producte 3" }
];

</script>