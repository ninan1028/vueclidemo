import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../../../components/base/app.vue';
import Index from '../index.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/',
            component:App,
            children:[
                {
                   path:'',
                   name:'index',
                   component:Index 
                }
            ]

        }
    ]
})