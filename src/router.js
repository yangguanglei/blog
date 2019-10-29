import home from './views/home.vue';
import login from './views/login.vue';
import index from './views/index.vue';

const routers = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'home',
    meta: {requireAuth: true},
    component: home,
    children:[
      {
        path: '',
        redirect: 'index',
        name: index
      },
      {
        path: 'index',
        name: 'index',
        components: {
          menurouter: index
        }
      },
    ]
  },
];
export default routers;