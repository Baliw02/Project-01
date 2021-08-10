<template>
<div class="full">
    <h1>
        Waxom is Realizaton of your Ideas.
    </h1>
    <p>
        Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.
    </p>
<div class="full-gallery">
    <div class="galleries">
        <div :class="{active: index == 0}" class="carousel">
        <carousel  v-if="windowWidth > 1125" :per-page="1" :adjustableHeight="false" :mouse-drag="false" :paginationPadding="0" :paginationEnabled="false">
                <slide>
                    <img src="./gallery/leftgallery.png" alt="">
                </slide>                
                <slide>
                    <img src="./gallery/leftgallery.png" alt="">
                </slide>
            </carousel>
        </div>
        <div class="carousel" :class="{active: index == 1}" id="act">
            <carousel :per-page="1" :adjustableHeight="false" :mouse-drag="false" :paginationPadding="1" :paginationSize="15" paginationActiveColor="#C7B299">
                <slide>
                    <img src="./gallery/centergallery.png" alt="">
                </slide>
                <slide>
                    <img src="./gallery/centergallery.png" alt="">
                </slide>
            </carousel>
        </div>
        <div class="carousel" :class="{active: index == 2}">
            <carousel  v-if="windowWidth > 1125" :per-page="1" paginationPosition="bottom" :adjustableHeight="false" :mouse-drag="false" :paginationPadding="0" :paginationEnabled="false">
                <slide>
                    <img src="./gallery/rightgallery.png" alt="">
                </slide>
                <slide>
                    <img src="./gallery/rightgallery.png" alt="">
                </slide>
            </carousel>
        </div>
    </div>    
</div>
        <button class="sliders" v-on:click="checker(), index = index - 1"><font-awesome-icon :icon="['fas', 'angle-left']" /></button>
        <button class="sliders" v-on:click="checker(), index = index + 1"><font-awesome-icon :icon="['fas', 'angle-right']" /></button>
        {{index}}
</div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'

export default {
    name: 'ThreeGallery',
    components:{ 
        Carousel, 
        Slide
    },
    data(){
        return{
            windowWidth: 0,
            index: 1
        }
    },
    methods:{
    checker:function(){
        if(this.index == 3){
            this.index = 0
        }
        if(this.index == -1){
            this.index = 3
        }
    }
    },
    mounted(){
        window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth;
        })
    }
        
}
</script>

<style scoped>
    .full{
        margin-top:5%;
        text-align: center;
        padding-top:1%;
    }
    .full-gallery{
        display:flex;
        justify-content: center;
        text-align: center;
    }
    .carousel{
        margin-inline: -5%;
        display:inline-block;
        width: 30%;
        z-index: 30;
    }
    img{
        width: 100%;
        max-width: 100%;
    }
    #act{
        z-index: 50;
    }
    h1{
        font-family: Raleway;
        margin-top: 2%;
        font-size: 36px;
        margin-bottom: 2%;
    }
    p{
        margin:auto;
        text-align: justify;
        width:30%;
        font-family: Raleway;
        font-size: 16px;
        margin-bottom: 2%;
    }
    .VueCarousel-slide {
        visibility: visible;
        flex-basis: 100%;
        width: 100%;
    }
    .sliders{
        margin-left: 1%;
        margin-right: 1%;
        margin-top:1%;
        margin-bottom:1%;
        text-align: center;
        width:30px;
        height: 30px;
        background-color: #C7B299;
        border:none;
        border-radius: 50%;
        font-size:15px;
        color:white;
    }
@media only screen and (max-width: 1125px) {
    .carousel{
        width:100%;
    }
    h1{
        font-size: xx-large;
    }
    p{
        padding-left:10px;
        padding-right:10px;
        width:80%;
        padding: 35px 35px;
        margin:auto;
        text-align: justify;
        font-size: medium;
    }
}
@media only screen and (max-width: 450px) {
    .full{
        margin-top:25%;
    }
}

</style>