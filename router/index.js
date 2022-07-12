import Vue from 'vue'
import Router from 'vue-router'
import App from '../src/App.vue'
import Contract from '../src/page/contract/index.vue'
import JSplumnb from '../src/page/jsplumb/index.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: App
        },
        {
            path: 'contract',
            component: Contract
        },
        {
            path: 'jsplumb',
            component: JSplumnb
        }
    ],
})
export default router