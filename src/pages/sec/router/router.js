import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../../../components/base/app.vue';
import Index1 from '../index.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/index2.html/',
            component:App,
            children:[
                {
                   path:'',
                   name:'index1',
                   component:Index1 
                }
            ]

        }
    ]
})