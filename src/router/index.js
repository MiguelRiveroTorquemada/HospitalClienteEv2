import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addEspecialidades',
    name: 'addEspecialidades',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Especialidades/AddEspecialidades')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login')
  },
 
  {
    path: '/Trabajadores',
    name: 'ListTrabajadores',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Trabajadores/ListTrabajadores.vue')
  },

  {
    path: '/Trabajadores/add',
    name: 'Add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Trabajadores/Add.vue')
  },
  //detalle de usuarios enrutamiento de un id concreto 
  {
    path: '/Trabajadores/:id',
    name: 'Destalles del usuario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Trabajadores/Details.vue')
  },

  {
    path: '/Pacientes',
    name: 'Pacientes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pacientes/Pacientes.vue')
  },
  {
    path: '/AddPacientes',
    name: 'AddPacientes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pacientes/AddPacientes.vue')
  },
  
]


const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(`is authenticated ${store.state.isAuthenticated}`);
  console.log(`to: ${to.fullPath}`);
  console.log(`from: ${from.fullPath}`);
/*
  if(!store.state.isAuthenticated && to.fullPath !== '/login' ) {
   // router.push('/login')
   next('/login')*/
   if(!store.state.isAuthenticated && to.fullPath !== '/login' ) {
    // router.push('/login')
    next('/login')
   // next()
  }
  else{
    next()

  }
  }
)

export default router
