<template>
<div class="full-section-gallery">
    <h1 id="gallery-title">
        Waxom is Realizaton of your Ideas.
    </h1>
    <p id="gallery-p">
        Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.
    </p>
<div class="full-gallery">
    <div class="galleries">
        <div v-if="1200 < windowWidth" :class="{active: index == 0}" class="carousel">
        <carousel :per-page="1" :adjustableHeight="false" :mouse-drag="false" :paginationPadding="0" :paginationEnabled="false">
                <slide>
                    <img id="img-in-gallery" src="./gallery/leftgallery.png" alt="">
                </slide>                
                <slide>
                    <img id="img-in-gallery" src="./gallery/leftgallery.png" alt="">
                </slide>
            </carousel>
        </div>
        <div class="carousel" :class="{active: index == 1}">
            <carousel :per-page="1" :adjustableHeight="false" :mouse-drag="false" :paginationPadding="1" :paginationSize="15" :paginationEnabled="false" paginationActiveColor="#C7B299">
                <slide>
                    <img id="img-in-gallery" src="./gallery/rightgallery.png" alt="">
                </slide>
                <slide>
                    <img id="img-in-gallery" src="./gallery/rightgallery.png" alt="">
                </slide>
            </carousel>
        </div>
        <div v-if="1200 < windowWidth" class="carousel" :class="{active: index == 2}">
            <carousel :per-page="1" paginationPosition="bottom" :adjustableHeight="false" :mouse-drag="false" :paginationPadding="0" :paginationEnabled="false">
                <slide>
                    <img id="img-in-gallery" src="./gallery/leftgallery.png" alt="">
                </slide>
                <slide>
                    <img id="img-in-gallery" src="./gallery/leftgallery.png" alt="">
                </slide>
            </carousel>
        </div>
    </div>    
</div>
        <button class="sliders-btn" :class="{disabled: index === 0}" v-on:click="index--, checker()"><font-awesome-icon :icon="['fas', 'angle-left']" /></button>
        <button class="sliders-btn" :class="{disabled: index === 2}" v-on:click="index++, checker()"><font-awesome-icon :icon="['fas', 'angle-right']" /></button>
</div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'

export default {
/* eslint-disable */
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
        if(this.index === 3){
            this.index = 2
        }
        if(this.index === -1){
            this.index = 0
        }
    },
    handleResize(){
      this.windowWidth = window.innerWidth
    },

    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        },
        
  }
  
</script>

<style scoped>



</style>