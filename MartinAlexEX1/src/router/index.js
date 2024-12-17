import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/productes',
      name: 'productes',
      component: () => import('../views/ProductoView.vue'),
      children: [
        {
          path: 'detalleProducto/:id/:nombre/:descripcion',
          name: 'detalleProducto',
          component: () => import('../views/DetalleProductoView.vue'),
          props: route=> ({ 
            id:route.params.id, 
            nombre:route.params.name,
            descripcion:route.params.description })
        },
      ]
    },
    {
      path: '/comptador',
      name: 'comptador',
      component: () => import('../views/Exercici2View.vue'),
    },
    {
      path: '/usuaris',
      name: 'usuaris',
      component: () => import('../views/Exercici3View.vue'),
    },
  ],
})

export default router