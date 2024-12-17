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
      path: '/exercici1',
      name: 'exercici1',
      component: () => import('../views/ProductoView.vue'),
      children: [
        {
          path: 'detalleProducto/:id/:nombre/:descripcion',
          name: 'detalleProducto',
          component: () => import('../views/DetalleProductoView.vue'),
          props: route=> ({ 
            id:route.params.id, 
            nombre:route.params.nombre,
            descripcion:route.params.descripcion })
        },
      ]
    },
    {
      path: '/exercici2',
      name: 'exercici2',
      component: () => import('../views/ComptadorView.vue'),
    },
    {
      path: '/exercici3',
      name: 'exercici3',
      component: () => import('../views/Exercici3View.vue'),
    },
  ],
})

export default router