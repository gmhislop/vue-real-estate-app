import { createRouter, createWebHashHistory } from 'vue-router';

import AppVue from '@/App.vue';


export const HOME_PAGE = 'home'
export const CREATE_PAGE = 'create'
export const DETAIL_PAGE = 'details'
export const EDIT_PAGE = 'edit'
export const ABOUT_PAGE = 'about'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/properties'
    },

    {
      path: '/properties',
      component: AppVue,
      children: [
        {
          path: '',
          name: HOME_PAGE,
          component: () => import('@/pages/Houses/OverviewPage.vue')
        },
        {
          path: 'create',
          name: CREATE_PAGE,
          component: () => import('../pages/Houses/CreatePage.vue')
        },
        {
          path: ':id',
          name: DETAIL_PAGE,
          component: () => import('@/pages/Houses/DetailPage.vue')
        },
        {
          path: ':id/edit',
          name: EDIT_PAGE,
          component: () => import('@/pages/Houses/EditPage.vue')
        }
      ]
    },

    {
      path: '/about',
      name: ABOUT_PAGE,
      component: () => import('@/pages/AboutPage.vue')
    }
  ]
})

export default router