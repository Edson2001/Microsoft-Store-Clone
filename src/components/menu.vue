<template>

    <nav class="menu-list menu-1">
        <ul>
            <li>
                <i @click="randomPage" class="icofont-long-arrow-left"></i>
            </li>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/gaming">Gaming</router-link>
            </li>
            <li>
                <router-link to="/entretaiment">Entretaiment</router-link>
            </li>
            <li>
                <router-link to="/productivity">Productivity</router-link>
                
            </li>
            <li>
                Deals
            </li>
        </ul>
    </nav>

    <nav class="menu-list menu-2">
        <ul>
            <li>
                <i class="fa fa-search icon-size-menu"></i>
                Pesquisar
            </li>
            <li>
                <i class="fa fa-user-plus icon-size-menu"></i>
            </li>
            <li>
                <i class="fa fa-arrow-down icon-size-menu"></i>
            </li>
            <li>
                <i class="fa fa-ellipsis-h"></i>
            </li>
            
        </ul>
    </nav>
    
</template>


<script>
import {useRouter} from "vue-router"
export default {
    setup() {

        const pages = ['/', 'gaming', 'entretaiment', 'productivity']
        let pagesLength = pages.length
        const router = useRouter()
        
        function randomPage(){
            
            console.log(pagesLength)

            let i = Math.floor(Math.random()*pagesLength)

            router.push(pages[i])

        }

        return {randomPage}

    }
}
</script>
