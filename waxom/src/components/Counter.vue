<template>
<div class="full-counter" v-waypoint = "{active: true, callback: onWaypoint}">
    <div class="counters"  >
        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/clients.png">
            <div class="counter" ><p id="counter-p"><ICountUp v-if="counter" :endVal = endVal[0] /></p></div>
            <span id="comment">SATISFIED clients</span>
            <span id="bottom"></span>
        </div>
    
        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/coffe.png">
            <div class="counter" ><p id="counter-p"><ICountUp v-if="counter" :endVal = endVal[1] /></p></div>
            <span id="comment">cups of coffe</span>
            <span id="bottom"></span>
        </div>

        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/blogs.png">
            <div class="counter" ><p id="counter-p"><ICountUp v-if="counter" :endVal = endVal[2] /></p></div>
            <span id="comment">blog posts</span>
            <span id="bottom"></span>
        </div>
    
        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/heart.png">
            <div class="counter" ><p id="counter-p"><ICountUp v-if="counter" :endVal = endVal[3] /></p></div>
            <span id="comment">likes</span>
            <span id="bottom"></span>
        </div>
   
        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/food.png">
            <div class="counter" ><p id="counter-p"><ICountUp v-if="counter" :endVal = endVal[4] /></p></div>
            <span id="comment">we launched</span>
            <span id="bottom"></span>
        </div>

    </div>

</div>    
</template>

<script>
import Vue from "vue";
import VueWaypoint from "vue-waypoint";
Vue.use(VueWaypoint);
import ICountUp from 'vue-countup-v2';

export default {
    components:{
        ICountUp
    },
    data(){
        return{
            counter:false,
            endVal: [3587, 207, 2500, 873, 900]        
        }
    },
    methods:{
        onWaypoint({going}){
            if(going === "in"){
                this.counter = true
            }
        },
        // eslint-disable-next-line no-unused-vars
        onReady:function(instance, countUp){
            if(this.counter){
                const that = this
                instance.update(that.endVal + 100)
            }
        }

    },
    computed:{}
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
        width:100%;
        justify-content: center;
    }

    @media only screen and(max-width: 1000px){
        flex-wrap:wrap;
        width:100%;
        justify-content: center;
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