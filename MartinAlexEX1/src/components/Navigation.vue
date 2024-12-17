<template>
    <nav>
      <RouterLink to="/" class="nav">Home</RouterLink>
      <RouterLink to="/exercici1" class="nav">Exercici 1 : Productes</RouterLink>
      <RouterLink to="/exercici2" class="nav">Exercici 2 : Comptador</RouterLink>
      <RouterLink to="/exercici3" class="nav">Exercici 3 : Usuaris</RouterLink>
      <RouterView/>
    </nav>
  </template>
  
  <script setup>
import { RouterLink } from 'vue-router';

  // Sin codigo ya que es un componente de presentación.
  </script>