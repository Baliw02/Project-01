<template>
    <div class="full-row">
        <div class="text-post">
            <h1 id="row-title">
                Recent Posts.
            </h1>
            <p id="row-p">
                Investiationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutatuionem consuetiasd.
            </p>
        </div>
        <div id="postbox" v-for="(post_data, post_index) in box_datas" :key="post_data.day + post_data.month + post_data.image + post_data.content + post_data.title + post_index" :class="{postboxes: true, active: post_index == activeId && 1000 < windowWidth, mobile: 1000 > windowWidth,'mobile-active': post_index == activeId, sidepost: 1000 >= windowWidth && post_index > 0 && post_index != activeId}">
            <div v-if="post_index < limiter">
                <div  :class="{date: true, active: post_index == activeId}">
                    <span id="day">{{post_data.day}}</span>
                    <span id="month">{{post_data.month}}.</span>
                </div>
                <img id="images-in-box" :src="post_data.image">
                <div class="post-text-box">
                    <h2 id="post-box-title" :class="{active: post_index == activeId }">{{post_data.title}}</h2>
                    <p id="post-content">{{post_data.content}}</p>
                    <button id="read-more"> Read More <font-awesome-icon id="rm-icon" icon="caret-right" /></button>
                </div>
            </div>
        </div>
        <div class="sliders">
            <button v-on:click="activeId = activeId -1, checking()" id="slider-left" :class="{disabled: activeId === 0, 'mobile-slider-post': 1000 > windowWidth}"><font-awesome-icon id="slider-icon" icon="angle-left" /></button>
            <button v-on:click="activeId = activeId +1, checking()" id="slider-right" :class="{'mobile-slider-post': 1000 > windowWidth}"><font-awesome-icon id="slider-icon" icon="angle-right" /></button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name:'Posts',
    components: axios,
    data(){
        return{
            box_datas: [],
            activeId: 0,
            windowWidth: 0,
            limiter: 3
        }
    },
    methods:{
        checking:function(){
            if(this.activeId == 3 ){
                this.activeId = 2
            }
            if(this.activeId == -1){
                this.activeId = 0
            }
        },
    },
    mounted(){
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    })
    },
    created(){
    axios.get('/api/posts')
    .then(response => {
        console.log(response.data)
        this.box_datas = response.data
    })
    },
    
}
</script>

