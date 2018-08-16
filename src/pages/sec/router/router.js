import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../../../components/base/app.vue';
import Index1 from '../index.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:'sec',
            component:App,
            children:[
                {
                   path:'/test',
                   name:'index',
                   component:Index1 
                }
            ]

        }
    ]
})