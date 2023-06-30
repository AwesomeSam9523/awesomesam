import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
const routes = [
  {
    path: '/',
    component: App,
    name: 'AwesomeSam | Home',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => { // eslint-disable-line no-unused-vars
  document.title = to.name;
  next();
});

createApp(App).use(router).mount('#app');
