import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';

const EditPage = { template: '<div>EditPage</div>' };

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/edit/:id', component: EditPage, props: true },
  ],
});