import {createRouter, createWebHistory} from "vue-router"
import Entretaiment from "../pages/entretaiment"

import Home from "../pages/home"

const routes =[

    {
        path: '/',
        component: Home,
    },
    {
        path: '/entretaiment',
        component: Entretaiment
    }

]

export default createRouter({

    history: createWebHistory(),
    
    routes

})