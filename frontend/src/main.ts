import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue"
import App from './App.vue'
const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'AwesomeSam | Home',
  },
  {
    path: '/muj',
    component: () => import('./views/MujPage.vue'),
    name: 'MUJ Event',
  },
  {
    path: '/food',
    component: () => import('./views/FoodPage.vue'),
    name: 'Food',
  },
  {
    path: '/player/:id',
    component: () => import('./views/MediaPlayer.vue'),
    name: 'Web Player',
  },
  {
    path: '/upload',
    component: () => import('./views/MediaUploader.vue'),
    name: 'Upload',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach((to, from, next) => { // eslint-disable-line no-unused-vars
  if (!to.name) {
    return;
  }
  document.title = to.name.toString();
  next();
});

const app = createApp(App);
app.use(router);
app.mount('#app');
