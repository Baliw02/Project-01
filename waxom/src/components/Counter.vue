<template>
<div class="full-counter">

    <div class="counters" v-waypoint = "{active: true, callback: onWaypoint, options: intersectionOptions}" >
        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/clients.png">
            <div class="counter" ><p id="counter-p"><ICountUp :endVal = 666 /></p></div>
            <span id="comment">SATISFIED clients</span>
            <span id="bottom"></span>
        </div>
    
        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/coffe.png">
            <div class="counter" ><p id="counter-p">7518</p></div>
            <span id="comment">cups of coffe</span>
            <span id="bottom"></span>
        </div>

        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/blogs.png">
            <div class="counter" ><p id="counter-p">518</p></div>
            <span id="comment">blog posts</span>
            <span id="bottom"></span>
        </div>
    
        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/heart.png">
            <div class="counter" ><p id="counter-p">18</p></div>
            <span id="comment">likes</span>
            <span id="bottom"></span>
        </div>
   
        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/food.png">
            <div class="counter" ><p id="counter-p">751</p></div>
            <span id="comment">we launched</span>
            <span id="bottom"></span>
        </div>

    </div>

</div>    
</template>

<script>

// eslint-disable-next-line no-unused-vars
import ICountUp from 'vue-countup-v2';
// eslint-disable-next-line no-unused-vars
import {defineComponent} from 'vue'
// eslint-disable-next-line no-unused-vars
import{VueWaypoint} from 'vue-waypoint'

export default {
    components:{
        ICountUp
    },
    data(){
        return{
            intersectionOptions:{
                root: document,
                rootMargin: '0px 0px 0px 0px',
                threshold: [0.25, 0.75]
            },
            counter:false        
        }
    },
    setup(){
    
    },
    methods:{
            // eslint-disable-next-line no-unused-vars
            onwWaypoint({going, direction}){
            if(direction === this.$waypointMap.DIRECTION_TOP){
                this.counter = true
            }
            else if(direction === this.$waypointMap.DIRECTION_BOTTOM){
                this.counter = false
            }
        }
    }
}
   

    </script>

<style lang="scss" scoped>
@import './design.scss';

#counter-logos{
    color:#C7B299;
}
.full-counter{
    margin-top:0%;
    background: linear-gradient(90deg, rgba(32,4,4,1) 0%, rgba(88,49,2,1) 86%);
    width:100%;
}
.counters{
    padding:69px 500px;
    display:flex;
    @media only screen and(max-width: 1800px){
        padding: 40px 350px;
    }
    @media only screen and(max-width: 1500px){
        padding: 30px 250px;
    }
    @media only screen and(max-width: 1200px){
        padding: 20px 150px;
    }

    @media only screen and(max-width: 1000px){
        flex-wrap:wrap;
    }
}
.counter{
    color:white;
    font-family: Roboto;
    padding:5px 5px;
    font-size: $larger_font_size * 2;
    font-weight: 300;
}
.counter-boxes{
    justify-content: center;
    text-align: center;
    flex:15%;
    @media only screen and(max-width: 1000px){
        flex:50%;
    }
}

#comment{
    display:block;
    font-family: $primary_font;
    font-weight: light;
    text-transform: uppercase;
    font-size: $smaller_font_size;
    color:#C7B299;
}
#bottom{
    width:5%;
    border-bottom: 2px solid white;
    display: inline-block;
}


</style>