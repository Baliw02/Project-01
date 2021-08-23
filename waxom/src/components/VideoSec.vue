<template>
    <div class="video">
        <video v-once id="video" src="./icons_etc/typing.mp4"></video>
        <button class="buttons" v-if="switcher == false" id="plbutton" v-on:click="playVid()"><font-awesome-icon id="play" icon="caret-right" /></button>
        <button class="buttons" v-if="switcher" id="stopbutton" v-on:click="stopVid()"><font-awesome-icon id="stop" :icon="['fas', 'grip-lines-vertical']" /></button>
        <div id="text-on-video" class="text-on-video">
            <h1 id="video-text-title">Waxom Video Presentation</h1>
            <p id="video-text-p">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius, qui sequitur mutationem consuetudium.</p>    
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            switcher: false,
            min: 0
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
        },
    },
    
}
</script>

<style lang="scss" scoped>
@import './design.scss';
.text-on-video{
    display:block;
    position: absolute;
    width:fit-content;
    margin: $centered_margin;
    opacity: 1;
    top:60%;
    left:0;
    right: 0;
    bottom: 0;
    z-index: 50;
    color:white;
    text-align: center;
}
#video{
    width:100%;
    max-width:100%;
    object-fit: cover;
    object-position: center;
    height: 800px;
    @media only screen and(max-width: 650px){
        height: 700px;
    }
}
.video{
    position:relative;
    height: 800px;
}
$transition_time:1s;
.buttons{
    text-align: center;
    height: 120px;
    width: 120px;
    bottom:10%;
    left:0;
    right:0;
    top:0%;
    margin:$centered_margin;
    display: block;
    position:absolute;
    z-index: 50;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.50);
    color:white;
    border:5px solid white;
    transition: $transition_full;
    padding:5px 5px;
}
#stop{
    font-size: $smaller-font-size + 15;
}
#play{
    display:block;
    margin:$centered_margin;
    font-size: $smaller_font_size * 5;
}
.video:hover button{
    opacity: 1;
}
.buttons:hover{
    color:$dark_cream_font_color;
    border-color:$dark_cream_font_color;
}
#video-text-title{
    font-size: $larger_font_size + 6;
}
#video-text-p{
    font-size: $medium_font_size;
}
#video-text-title, #video-text-p{
    transition: $transition_full;
    font-family: Raleway;
}
</style>