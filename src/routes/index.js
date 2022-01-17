import {createRouter, createWebHistory} from "vue-router"
import Gaming from "../pages/gaming"

import Home from "../pages/home"

const routes =[

    {
        path: '/',
        component: Home,
    },
    {
        path: '/gaming',
        component: Gaming
    }

]

export default createRouter({

    history: createWebHistory(),
    
    routes

})