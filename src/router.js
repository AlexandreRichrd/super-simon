import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './views/HomePage.vue'
import GamePage from './views/GamePage.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/Game',
            component: GamePage
        }
    ]
})

export default router;