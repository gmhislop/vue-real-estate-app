import { createRouter, createWebHashHistory } from 'vue-router';

import OverviewPage from '@/pages/Houses/OverviewPage.vue';
import CreatePage from '@/pages/Houses/CreatePage.vue';
import DetailPage from '@/pages/Houses/DetailPage.vue';
import EditPage from '@/pages/Houses/EditPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import IndexPage from '@/pages/Houses/IndexPage.vue';

export const HOME_PAGE = 'home';
export const CREATE_PAGE = 'create';
export const DETAIL_PAGE = 'details';
export const EDIT_PAGE = 'edit';
export const ABOUT_PAGE = 'about';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/properties'
    },
    {
      path: '/properties',
      component: IndexPage,
      children: [
        {
          path: '',
          name: HOME_PAGE,
          component: OverviewPage
        },
        {
          path: 'create',
          name: CREATE_PAGE,
          component: CreatePage
        },
        {
          path: ':id',
          name: DETAIL_PAGE,
          component: DetailPage
        },
        {
          path: ':id/edit',
          name: EDIT_PAGE,
          component: EditPage
        }
      ]
    },
    {
      path: '/about',
      name: ABOUT_PAGE,
      component: AboutPage
    }
  ]
});

export default router;
