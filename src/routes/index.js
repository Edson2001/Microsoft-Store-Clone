import {createRouter, createWebHistory} from "vue-router"
import Gaming from "../pages/gaming"

import Home from "../pages/home"
import Entretaiment from "../pages/entretaiment"
import Productivity from "../pages/productivity"

const routes =[

    {
        path: '/',
        component: Home,
    },
    {
        path: '/gaming',
        component: Gaming
    },
    {
        path: '/entretaiment',
        component: Entretaiment
    },
    {
        path: '/productivity',
        component: Productivity
    }

]

export default createRouter({

    history: createWebHistory(),
    
    routes

})