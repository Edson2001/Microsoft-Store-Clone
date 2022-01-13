<template>
    
    <header class="menu">

        <nav class="menu-list menu-1">
            <ul>
                <li>
                    <i class="icofont-long-arrow-left"></i>
                </li>
                <li>
                    Home
                </li>
                <li>
                    Entretaiment
                </li>
                <li>
                    Productivity
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

    </header>

    <section class="container">

        
        <div class="section-poster">
            <div class="poster-item">
                <img src="../assets/img/banner189.jpg" alt="">
                <div class="poster-text-info">
                    <p class="poster-title">Asphalto 9: Legends</p>
                    <p>Novidades</p>
                    <p>Gratuito</p>
                </div>
                <div class="shadow"></div>
            </div>

            <div class="poster-item">
                <img src="../assets/img/f16f0de6-b6b6-4cf0-8356-b2979fd6a47b.jpg" alt="">
                <div class="poster-text-info">
                    <p class="poster-title">Asphalto 9: Legends</p>
                    <p>Novidades</p>
                    <p>Gratuito</p>
                </div>
                <div class="shadow-second"></div>
            </div>

        </div>

        <div class="section-sub-post">

            <div class="sub-post-item">

                <img src="../assets/img/banner189.jpg" alt="">
                <div class="sub-poster-text-info">
                    <p class="sub-poster-title">Asphalto 9: Legends</p>
                </div>
                <div class="shadow-sub-post-item"></div>
            </div>

            <div class="sub-post-item">

                <img src="../assets/img/banner189.jpg" alt="">
                <div class="sub-poster-text-info">
                    <p class="sub-poster-title">Asphalto 9: Legends</p>
                </div>
                <div class="shadow-sub-post-item"></div>
            </div>

            <div class="sub-post-item">

                <img src="../assets/img/banner189.jpg" alt="">
                <div class="sub-poster-text-info">
                    <p class="sub-poster-title">Asphalto 9: Legends</p>
                </div>
                <div class="shadow-sub-post-item"></div>
            </div>

            <div class="sub-post-item">

                <img src="../assets/img/forza-street-is-getting-one-final-update-before-shutting-down-in-spring-2022-178773_1.jpg" alt="">
                <div class="sub-poster-text-info">
                    <p class="sub-poster-title">Asphalto 9: Legends</p>
                </div>
                <div class="shadow-sub-post-item"></div>
            </div>

            <div class="sub-post-item">

                <img src="../assets/img/Halo_Infinite48.jpg" alt="">
                <div class="sub-poster-text-info">
                    <p class="sub-poster-title">Asphalto 9: Legends</p>
                </div>
                <div class="shadow-sub-post-item"></div>
            </div>

        </div>


        <div v-for="(item, index) in listNames" :key="index" class="section-games">

        
            <div class="text-info">
                <h3>{{item}}</h3>
                <a href="">Mostrar todos 99+</a>
            </div>

            <div   class="card-games main-carousel" data-flickity='{ "cellAlign": "left", "contain": true,"pageDots": false }'>

                <div class="card-game">
                    <div class="card-game-img">
                        <img src="../assets/img/511Y4sqp7tL._AC_SY780_.jpg" alt="">
                    </div>
                    <div class="card-game-body">
                        
                        <div class="avaliation">
                            <span class="card-game-title">
                                Roblox
                            </span>
                            <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="far fa-star"></i>
                            </span>
                        </div>
                        <p class="card-game-info">Gratuito</p>
                    </div>
                </div>

                <div class="card-game">
                    <div class="card-game-img">
                        <img src="../assets/img/unnamed.jpg" alt="">
                    </div>
                    <div class="card-game-body">
                        
                        <div class="avaliation">
                            <span class="card-game-title">
                                Roblox
                            </span>
                            <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="far fa-star"></i>
                            </span>
                        </div>
                        <p class="card-game-info">Gratuito</p>
                    </div>
                </div>

                <div class="card-game">
                    <div class="card-game-img">
                        <img src="../assets/img/5dcf6fad2d8837a0476ff1e0a7fd172a.jpg" alt="">
                    </div>
                    <div class="card-game-body">
                        
                        <div class="avaliation">
                            <span class="card-game-title">
                                Roblox
                            </span>
                            <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="far fa-star"></i>
                            </span>
                        </div>
                        <p class="card-game-info">Gratuito</p>
                    </div>
                </div>


                <div class="card-game ">
                    <div class="card-game-img">
                        <img src="../assets/img/511Y4sqp7tL._AC_SY780_.jpg" alt="">
                    </div>
                    <div class="card-game-body">
                        
                        <div class="avaliation">
                            <span class="card-game-title">
                                Roblox
                            </span>
                            <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="far fa-star"></i>
                            </span>
                        </div>
                        <p class="card-game-info">Gratuito</p>
                    </div>
                </div>
                <div class="card-game">
                    <div class="card-game-img">
                        <img src="../assets/img/511Y4sqp7tL._AC_SY780_.jpg" alt="">
                    </div>
                    <div class="card-game-body">
                        
                        <div class="avaliation">
                            <span class="card-game-title">
                                Roblox
                            </span>
                            <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="far fa-star"></i>
                            </span>
                        </div>
                        <p class="card-game-info">Gratuito</p>
                    </div>
                </div>

                <div class="card-game">
                    <div class="card-game-img">
                        <img src="../assets/img/511Y4sqp7tL._AC_SY780_.jpg" alt="">
                    </div>
                    <div class="card-game-body">
                        
                        <div class="avaliation">
                            <span class="card-game-title">
                                Roblox
                            </span>
                            <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="far fa-star"></i>
                            </span>
                        </div>
                        <p class="card-game-info">Gratuito</p>
                    </div>
                </div>

                <div class="card-game">
                    <div class="card-game-img">
                        <img src="../assets/img/511Y4sqp7tL._AC_SY780_.jpg" alt="">
                    </div>
                    <div class="card-game-body">
                        
                        <div class="avaliation">
                            <span class="card-game-title">
                                Roblox
                            </span>
                            <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="far fa-star"></i>
                            </span>
                        </div>
                        <p class="card-game-info">Gratuito</p>
                    </div>
                </div>

                <div class="card-game">
                    <div class="card-game-img">
                        <img src="../assets/img/511Y4sqp7tL._AC_SY780_.jpg" alt="">
                    </div>
                    <div class="card-game-body">
                        
                        <div class="avaliation">
                            <span class="card-game-title">
                                Roblox
                            </span>
                            <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="far fa-star"></i>
                            </span>
                        </div>
                        <p class="card-game-info">Gratuito</p>
                    </div>
                </div>

                <div class="card-game">
                    <div class="card-game-img">
                        <img src="../assets/img/511Y4sqp7tL._AC_SY780_.jpg" alt="">
                    </div>
                    <div class="card-game-body">
                        
                        <div class="avaliation">
                            <span class="card-game-title">
                                Roblox
                            </span>
                            <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="far fa-star"></i>
                            </span>
                        </div>
                        <p class="card-game-info">Gratuito</p>
                    </div>
                </div>

                <div class="card-game">
                    <div class="card-game-img">
                        <img src="../assets/img/511Y4sqp7tL._AC_SY780_.jpg" alt="">
                    </div>
                    <div class="card-game-body">
                        
                        <div class="avaliation">
                            <span class="card-game-title">
                                Roblox
                            </span>
                            <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="far fa-star"></i>
                            </span>
                        </div>
                        <p class="card-game-info">Gratuito</p>
                    </div>
                </div>

            </div>
        </div>


    </section>

</template>

<script>

import Flickity from "flickity"
import "flickity/css/flickity.css"

import '../assets/icofont/icofont.css'
import '../assets/fontawesome-free-5.15.4-web/css/all.css'
import '../assets/fontawesome-free-5.15.4-web/css/fontawesome.css'
import '../assets/css/style.css'
import '../assets/js/script.js'

import {onMounted} from "vue"

export default {


    setup() {

        const listNames = [
            "Jogos mais vendidos",
            "Jogos principais gratuitos",
            "Jogos principais pagos",
            "Ofertas especias para jogos de PC"
        ]
        
        onMounted(()=>{
            new Flickity( '.main-carousel', {
                cellAlign: 'left',
                contain: true
            });
        })

        return {listNames}

    }
    
}
</script>