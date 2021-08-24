<template>
    <div class="background">
        <carousel :per-page="1" 
        :mouse-drag="false" 
        :centerMode="false" 
        :paginationPadding="3" 
        paginationPosition="bottom-overlay" 
        :paginationSize="10"
        paginationActiveColor="#ffffff"
        paginationColor="#998675">
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
}
</script>

<style lang="scss" scoped>
@import 'design.scss';

.background{
    position:relative;
    top:-160px;


    #carousel-img{
        object-fit: cover;
        object-position: center;
        z-index: 1;
        width:100%;
        max-width: 100%;
        min-height: 500px;
        max-height: 1025px;
    }
    .text-on-image{
        text-align: center;
        margin: $centered_margin;
        display: block;
        position: absolute;
        z-index: 5;
        top:35%;
        bottom:15%;
        left:0;
        right:0;
        @media only screen and (max-width:400px){
            top: 40%;
        }
        #text-p-image{
            color:white;
            font-family: Raleway;
            font-size: $larger_font_size + 12;
            @media only screen and(max-width: 1163px){
                font-size: $larger_font-size;
            }
        }
        #text-h1-image{
            font-family: $primary_font;
            font-weight: 800;
            color:white;
            font-size:$larger_font_size * 2 + 4;
            @media only screen and(max-width: 1163px){
                font-size: $larger_font-size + 10;
            }
            @media only screen and(max-width: 621px){
                font-size: $larger_font-size + 3;
            }
        }
        #text-span-image{
            padding:5px 5px;
            text-align: center;
            color:white;
            font-family: $primary_font;
            font-size: $medium_font_size;
            @media only screen and(max-width: 1163px){
                font-size: $smaller_font-size;
            }
        }
        #get-started-btn{
            font-family: $primary_font;
            font-weight: 700;
            text-transform: uppercase;
            display:block;
            margin: $centered_margin;
            padding: 0.6% 0.6%;
            margin-top: 5%;
            background-color: $light_cream_bg_color;
            color:white;
            border:none;
            cursor: pointer;
            border-radius: 5%;
            transition: $transition_full;
            @media only screen and (max-width: 400px){
                margin-top: 8%;
                padding:5px 5px;
            }
            &:hover{
                background-color:black;
            }
        }
    }
}

</style>