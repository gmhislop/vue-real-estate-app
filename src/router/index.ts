import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Edit from '@/pages/Edit.vue';
import Add from '@/pages/Add.vue';
import Detail from '@/pages/Detail.vue';


export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/edit/:id', component: Edit, props: true },
    { path: '/detail', component: Detail, props: true },
    { path: '/add', component: Add, props: true },
  ],
});