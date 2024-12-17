<template>
    <nav>
      <RouterLink to="/" class="nav">Home</RouterLink>
      <RouterLink to="/productes" class="nav">Exercici 1 : Productes</RouterLink>
      <RouterLink to="/comptador" class="nav">Exercici 2 : Comptador</RouterLink>
      <RouterLink to="/usuaris" class="nav">Exercici 3 : Usuaris</RouterLink>
      <RouterView/>
    </nav>
  </template>
  
  <script setup>
import { RouterLink } from 'vue-router';

  // Sin codigo ya que es un componente de presentación.
  </script>