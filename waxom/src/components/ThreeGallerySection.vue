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
        <div :class="{carousel:true, active: index == 0, mobile: 1200 >= windowWidth}" >
            <img id="img-in-gallery" src="./gallery/leftgallery.png" alt="">
        </div>
        <div :class="{carousel:true, active: index == 1, mobile: 1200 >= windowWidth}">
            <img id="img-in-gallery" src="./gallery/rightgallery.png" alt="">
        </div>
        <div :class="{carousel:true, active: index == 2, mobile: 1200 >= windowWidth}">
            <img id="img-in-gallery" src="./gallery/leftgallery.png" alt="">
        </div>
        <button v-show="1200 > windowWidth" class="sliders-btn-mbl" :class="{mobileleft: true, disabled: index === 0}" v-on:click="index--, checker()"><font-awesome-icon :icon="['fas', 'angle-left']" /></button>
        <button v-show="1200 > windowWidth" class="sliders-btn-mbl" :class="{mobileright:true , disabled: index === 2}" v-on:click="index++, checker()"><font-awesome-icon :icon="['fas', 'angle-right']" /></button>
</div>    
        <button v-show="1200 < windowWidth" id="left-g-slider" class="sliders-btn" :class="{disabled: index === 0}" v-on:click="index--, checker()"><font-awesome-icon :icon="['fas', 'angle-left']" /></button>
        <button v-show="1200 < windowWidth" id="right-g-slider" class="sliders-btn" :class="{disabled: index === 2}" v-on:click="index++, checker()"><font-awesome-icon :icon="['fas', 'angle-right']" /></button>
</div>
</div>
</template>

<script>

export default {
/* eslint-disable */
    name: 'ThreeGallery',
    data(){
        return{
            windowWidth: 0,
            index: 1,
            lwidth: 0
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