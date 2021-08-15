<template>
<div class="full-counter">

    <div class="counters">
        <span id="waypoint"></span>
        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/clients.png">
            <div class="counter" ><p id="counter-p">7518</p></div>
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
            <div class="counter" ><p id="counter-p">7518</p></div>
            <span id="comment">blog posts</span>
            <span id="bottom"></span>
        </div>
    
        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/heart.png">
            <div class="counter" ><p id="counter-p">7518</p></div>
            <span id="comment">likes</span>
            <span id="bottom"></span>
        </div>
   
        <div class="counter-boxes">
            <img id="counter-logos" src="./icons_etc/food.png">
            <div class="counter" ><p id="counter-p">7518</p></div>
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
            // scrollPosition: 0,
        }
    },
    mounted:function(){
        $(document).ready(function(){
            $(".counter").counterUp({
                delay:10,
                time:1200
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

<style scoped>
#counter-logos{
    color:#C7B299;
}
.full{
    margin-top:10%;
    background: linear-gradient(90deg, rgba(45,24,27,1) 13%, rgba(65,38,37,1) 55%, rgba(65,38,37,1) 97%, rgba(82,41,39,1) 100%);
    width:100%;
    padding:150px 150px;
}
.counters{
    display:flex;
}
.small-boxes{
    justify-content: center;
    text-align: center;
    flex:15%;
}
#comment{
    display:block;
    font-family: Raleway;
    font-weight: light;
    text-transform: uppercase;
    font-size: 14px;
    color:#C7B299;
}
#bottom{
    width:5%;
    border-bottom: 2px solid white;
    display: inline-block;
}
@media only screen and (max-width: 650px) {
    #counter-logos{
        width:57px;
    }
    .full{
        justify-content: center;
        text-align: center;
    }
    .counters{
        display:flex;
        flex-wrap: wrap;
        text-align: center;    
        margin:0;
    }
    .small-boxes{
        margin-bottom: 5%;
        flex:100%;
    }
}
</style>