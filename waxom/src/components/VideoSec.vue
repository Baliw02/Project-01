<template>
    <div v-once class="video">
        <video id="video" src="./icons_etc/typing.mp4"></video>
        <button class="buttons" v-if="switcher == false" id="plbutton" v-on:click="playVid()"><font-awesome-icon id="play" icon="caret-right" /></button>
        <button class="buttons" v-if="switcher" id="stopbutton" v-on:click="stopVid()"><font-awesome-icon id="stop" :icon="['fas', 'grip-lines-vertical']" /></button>
        <div id="text-on-video" class="text-on-video">
            <h1 id="video-text-title">Waxom Video Presentation</h1>
            <p id="video-text-p">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius, qui sequitur mutationem consuetudium.</p>    
        </div>        
    </div>
</template>

<script>
import LazyYoutubeVideo from 'vue-lazy-youtube-video'


export default {
    components: LazyYoutubeVideo,
    name:'VideoSec',
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

</style>