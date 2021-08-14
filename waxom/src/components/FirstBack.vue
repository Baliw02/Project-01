<template>
    <div class="background">
        <carousel :per-page="1" 
        :mouse-drag="false" 
        :centerMode="false" 
        :paginationPadding="3" 
        paginationPosition="bottom-overlay" 
        :paginationSize="10"
        paginationActiveColor="#ffffff"
        paginationColor="#998675"
        >
            <slide>
                <img id="carousel-img" src="./icons_etc/firstbg.jpg">
                <div class="text-on-image">
                    <p id="text-p-image">Unique and Modern Design</p>
                    <h1 id="text-h1-image">Portfolio PSD Template</h1>
                    <span id="text-span-image">
                        Nam liber tempor cum soluta nobis eleifend option congue nihil 
                        
                        imperdiet doming id quod mazim placerat facer possim assum.
                    </span>
                    <button id="get-started-btn">Get Started</button>
                </div>                            
            </slide>
            <slide>
            </slide>
            <slide>
            </slide>
            <slide>
            </slide>
            <slide>
            </slide>
        </carousel>
    </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'


export default {
    components:{
    Carousel,
    Slide
    },
    name:'FirstBack'
}
</script>

<style scoped>


</style>