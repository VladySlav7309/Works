import Vue             from 'vue'
import Router          from 'vue-router'
import Wrapper         from '@views/Wrapper.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '',
        component: Wrapper,
        children : [
            {
                path : '/',
                name : 'tasks',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "Tasks" */ '@views/Tasks.vue')
            }
        ]
    }]
});
