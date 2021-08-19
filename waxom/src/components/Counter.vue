<template>
<div v-once class="full-counter">

    <div class="counters">
        <span id="waypoint" v-if="!countered"></span>
        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/clients.png">
            <div class="counter" ><p id="counter-p">755</p></div>
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
/* eslint-disable */

export default {
    components:{
    },
    name:'Counter',
    data(){
        return{
            countered: false
        }
    },
    mounted:function(){
        $(document).ready(function(){
            $(".counter").counterUp({
                delay:10,
                time:1200,
                countered:true
            });
        })
    }

    // methods:{
        
    // },
    // updateScroll(){
    //     this.scrollPosition = window.scrollY

    // },
    // mounted:{
    // }
    // mounted(){
    //     window.addEventListener('scroll', this.updateScroll);
    //     let scroller = document.createElement('script');
    //     scroller.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js');
    //     document.head.appendChild(scroller);
    //     let waypoint = document.createElement('script');
    //     waypoint.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js');
    //     document.head.appendChild(waypoint)
    //     ('.counter').counterUp({
    //         delay:0,
    //         time:1000
    //     });
    // },
}
 /* eslint-enable */
   

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
    padding:50px 50px;
}
.counters{
    display:flex;
    flex-wrap: wrap;
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
    @media only screen and(max-width: 744px){
        flex:50%;
    }
}

#comment{
    display:block;
    font-family: $primary_font;
    font-weight: light;
    text-transform: uppercase;
    font-size: $smaller_font_size - 2;
    color:#C7B299;
}
#bottom{
    width:5%;
    border-bottom: 2px solid white;
    display: inline-block;
}


</style>