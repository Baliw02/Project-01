<template>
    <div class="video">
        <video id="video" src="./icons_etc/typing.mp4"></video>
        <button v-if="switcher == false" id="plbutton" v-on:click="playVid()"><font-awesome-icon id="icon" icon="caret-right" /></button>
        <button v-if="switcher" id="stopbutton" v-on:click="stopVid()"><font-awesome-icon id="icon" icon="caret-right" /></button>
        <div id="text-on-video" class="text-on-video">
            <h1>Waxom Video Presentation</h1>
            <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius, qui sequitur mutationem consuetudium.</p>    
        </div>        
    </div>
</template>

<script>
import LazyYoutubeVideo from 'vue-lazy-youtube-video'


export default {
    components: LazyYoutubeVideo,
    name:'Video',
    data(){
        return{
            switcher: false
       }   
    },
    methods:{
        playVid(){
            var text = document.getElementById("text-on-video");
            if(this.switcher == false){
                var vid = document.getElementById("video");
                var button = document.getElementById("plbutton");
                button.style.display = "block";
                vid.play();
                this.switcher = true;
                text.style.visibility = "collapse"
                return this.switcher   
            }
        },
        stopVid(){
            var text = document.getElementById("text-on-video");
            if(this.switcher){
                var vid = document.getElementById("video");
                var button = document.getElementById("stopbutton");
                button.style.display = "block";
                vid.pause();
                text.style.visibility = "visible"                
                this.switcher = false;
                return this.switcher
            }
        }
    },
    
}
</script>

<style scoped>
.text-on-video{
    display:block;
    position: absolute;
    width:fit-content;
    margin: auto;
    opacity: 1;
    top:80%;
    left:0;
    right: 0;
    bottom: 0;
    z-index: 50;
    color:white;
    text-align: center;
}
video{
    width:100%;
    max-width:100%;
    object-fit: cover;
    object-position: center;
    height: 800px;
    opacity: 0.7;
}
.video{
    background-color: rgb(0,0,0,50%); 
    position:relative;
    height: 800px;
}
button{
    text-align: center;
    height: 120px;
    width: 120px;
    bottom:0;
    left:0;
    right:0;
    top:0;
    margin:auto;
    display: block;
    position:absolute;
    z-index: 50;
    border-radius: 50%;
    background-color: rgba(0,0,0,50%);
    color:white;
    border:none;
    transition: all .2s linear;
    opacity: 0;
}
#icon{
    border:5px solid white;
    border-radius: 50%;
    width:65px;
    height: 65px;
    display: block;
    margin: auto;
    font-size: 40px;
}
.video:hover button{
    transform: scale(1.2);
    opacity: 1;
}
button:hover{
    color:#998675;
    border-color:#998675;
}
h1{
    font-size: 50px;
}
p{
    font-size: 16px;
}
h1, p{
    transition: all .2s linear;
    font-family: Raleway;
}

@media only screen and (max-width: 1920px) {
}
@media only screen and (max-width: 1366px) {
}
@media only screen and (max-width: 1000px) {
    button{
        width: 60px;
        height: 60px;
    }
    video{
        
        width:100%;
        height:500px;
    }
    .video{
        margin-top:25%;
        margin-bottom:25%;
        height: 50%;
        padding:0;
    }
    #icon{
        width:35px;
        height: 35px;
        border:2px solid white;
    }
    h1{
        font-size: 28px;
    }
    p{
        font-size: 13px;
    }
}
</style>