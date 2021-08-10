<template>
<div class="full">
    <div class="counters">
    
        <div class="small-boxes">
            <img src="./icons_etc/clients.png">
            <ICountUp
            :delay="delay"
            :endVal="endVal[0]"
            :options="options"
            @ready="onReady"
            />
            <span id="comment">SATISFIED clients</span>
            <span id="bottom"></span>
        </div>
    
        <div class="small-boxes">
            <img src="./icons_etc/coffe.png">
            <ICountUp
            :delay="delay"
            :endVal="endVal[1]"
            :options="options"
            @ready="onReady"
            />
            <span id="comment">cups of coffe</span>
            <span id="bottom"></span>
        </div>
   
        <div class="small-boxes">
            <img src="./icons_etc/blogs.png">
            <ICountUp
            :delay="delay"
            :endVal="endVal[2]"
            :options="options"
            @ready="onReady"
            />
            <span id="comment">blog posts</span>
            <span id="bottom"></span>
        </div>
    
        <div class="small-boxes">
            <img src="./icons_etc/heart.png">
            <ICountUp
            :delay="delay"
            :endVal="endVal[3]"
            :options="options"
            @ready="onReady"
            />
                <span id="comment">likes</span>
            <span id="bottom"></span>
        </div>
   
        <div class="small-boxes">
            <img src="./icons_etc/food.png">
            <ICountUp
            :delay="delay"
            :endVal="endVal[4]"
            :options="options"
            @ready="onReady"
            />
            <span id="comment">we launched</span>
            <span id="bottom"></span>
        </div>

    </div>
</div>    
</template>

<script type="text/babel">
import ICountUp from 'vue-countup-v2';
export default {
    components:{
        ICountUp
    },
    name:'Counter',
    data(){
        return{
            scrollPosition: 0,
            delay: 5000,
            endVal: [3587, 207, 2500, 873, 900],
            options: {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
        }
    }
    },
    methods:{
        
    },
    updateScroll(){
        this.scrollPosition = window.scrollY

    },

    mounted(){
        window.addEventListener('scroll', this.updateScroll);
    },
}
    

    </script>

<style scoped>
img{
    color:#C7B299;
}
.full{
    margin-top:10%;
    background: linear-gradient(90deg, rgba(45,24,27,1) 13%, rgba(65,38,37,1) 55%, rgba(65,38,37,1) 97%, rgba(82,41,39,1) 100%);
    width:100%;
    padding:150px 150px;
}
span{
    color:white;
    font-family: Raleway;
    display:block;
    font-size: 24px;
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
    img{
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