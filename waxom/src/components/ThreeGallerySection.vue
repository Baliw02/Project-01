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

<style lang="scss" scoped>
@import './design.scss';

#img-in-gallery{
    max-width: 100%;
}
.full-section-gallery{
    font-family: $primary_font;
    margin-top:0%;
    margin-bottom:0%;
    text-align: center;
    padding-top:1%;
    background-color: #FBFAF8;
    #gallery-title{
        font-family: Raleway !important;
        font-size: $larger_font_size + 6;
        padding-top:78px;
        padding-bottom: 24px;
        margin-bottom:0;
    }
    #gallery-p{
        margin-bottom:0;
        font-size: $smaller_font_size + 2;
        font-family: $primary_font;
        padding-bottom: 24px;
    }

}
.full-gallery{
    margin-top: 5%;
    position: relative;
    display:flex;
    justify-content: center;
    text-align: center;
    height: 400px;
    @media only screen and (min-width: 2000px){
            height: 550px;
    }
.galleries{
    height: 300px;
}
$transition_time: 1;
.carousel{
    margin-inline: -5%;
    display:inline-block;
    width: 30%;
    z-index: 30;
    transition: $transition_full;
}
$transition_time: 0.3;
.sliders-btn{
    position:absolute;
    transition: $transition_full;
    top:80%;
    left:0;
    right:0;
    margin:auto;
    text-align: center;
    width:30px;
    height: 30px;
    background-color: $cream_font_color;
    border:none;
    border-radius: 50%;
    font-size:15px;
    color:white;
    z-index: 51;
}
.sliders-btn-mbl{
    position:absolute;
    transition: $transition_full;
    margin:auto;
    text-align: center;
    width:30px;
    height: 30px;
    background-color: $cream_font_color;
    border:none;
    border-radius: 50%;
    font-size:15px;
    color:white;
    z-index: 51;
}
.sliders-btn:hover{
    background-color:black;
    color:white;
}
.sliders-btn.disabled{
    color:grey;
    background-color: transparent;
    border:3px solid grey;
}
#left-g-slider{
    left:-5%;
}
#right-g-slider{
    right: -5%;
}
$transition_time: 1;
.carousel.active{
    transition: $transition_full;
    transform: scale(1.2);
    display: block;
    position: absolute;
    z-index: 53;
    top: -10%;
    left: 0;
    right: 0;
    margin: $centered_margin;
}
.carousel.active #img-in-gallery{
    max-width: 100%;
}

.carousel.mobile{
    min-width: 500px;
    min-height: 300px;
    max-width: 770px;
    max-height: 400px;
    display:inline-block;
    position: absolute;    
    left:0;
    right:0;
    margin:auto;
    transform: $transition_full;
}
.carousel.active.mobile{
    left:0;
    right:0;
    top:0;
    margin:auto;
    display:inline-block;
    position:absolute;
    z-index: 60;
    transform: translateX(0);
}
.mobileleft, .mobileright{
    display:block;
    z-index: 62;
    margin:auto;
    position:absolute;
    top:35%;
    border-radius: 0;
}
.mobileleft{
    left:0%;
}
.mobileright{
    right:0%;
}


}
</style>