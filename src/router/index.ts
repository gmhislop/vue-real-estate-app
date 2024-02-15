import Vue from 'vue';
import {createRouter, createWebHashHistory}  from 'vue-router';

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = Vue.createApp({})
app.use(router)

app.mount('#app')
