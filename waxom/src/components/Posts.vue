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
        <div class="post-row">
        <div class="posts" v-for="post in activePosts" :key="post.day + post.link + post.day + post.month + post.content ">
            <div class="post-date">
                <span id="post-day">{{post.day}}</span>
                <span id="post-month">{{post.month}}</span>
            </div>
            <img id="post-image"  v-bind:href="post.link" :src="post.image" >
            <h2 id="post-title"  v-bind:href="post.link">{{post.title}}</h2>
            <p id="post-text">{{post.content}}</p>
            <button id="post-button" v-bind:href="post.link">Read More <font-awesome-icon id="read-more-icon" icon="caret-right"/></button>
        </div>
        </div>
        <div class="sliders">
            <button class="post_sliders" :class="{disabled: min === 1}" @click="slideLeft()"><font-awesome-icon id="slider-icon" icon="angle-left" /></button>
            <button class="post_sliders" :class="{disabled: data_len === max}" @click="slideright()"><font-awesome-icon id="slider-icon" icon="angle-right" /></button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    components: axios,
    data(){
        return{
            box_datas: [],
            activeId: 0,
            windowWidth: 0,
            min: 1,
            max: 3,
            rest: 0, 
            sum: 3,
            sub: 3,
            data_len: 0
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
        slideLeft:function(){
            this.max = this.max - this.sub
            this.min = this.min - this.sub
            this.rest = this.box_datas.length - this.min
            if(this.rest < 3){
                this.sub = this.rest
            }
            else{
                this.sub = 3
            }
            if(0 >= this.min){
                this.min = 1
                this.max = 3
            }        
},
        slideright:function(){
            this.max = this.max + this.sum 
            this.min = this.min + this.sum
            this.rest = this.box_datas.length - this.max
            this.data_len = this.box_datas.length
            if(this.rest < 3){
                this.sum = this.rest
            }
            else{
                this.sum = 3
            }        
        }
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
    computed:{
        activePosts: function(){
            return this.box_datas.filter((posts) => {
                    if(posts.index >= this.min && posts.index <= this.max){
                        return posts
            }
        }
    )}
},
}
</script>
<style lang="scss" scoped>
@import './design.scss';
.full-row{
    margin-top:89px;
    margin-bottom:60px;
    .row-title{
        font-size: $larger_font_size + 6;
        color:#555555;
        padding-bottom: 30px;
        margin-bottom:0;
    }
    .row-p{
        color:#8C8C8C;
        font-size: $medium_font_size;
    }
    font-family: $primary_font;
    .post-row{
        flex-wrap: wrap;
        display:flex;
        justify-content: center;
    }
    .posts{
        text-align: left;
        justify-content: center;
        width: fit-content;
        max-width: 371px;
        max-height: 396px;
        flex:30%;
        position:relative;
        margin: 29px;
        transition: $transition_full;
        border: 1px solid #d6d4d4;

        .post-date{
            transition: $transition_full;
            left: 10px;
            top:10px;
            margin:auto;
            text-align: center;
            display:block;
            width:53px;
            height: 53px;
            max-width:53px;
            max-height: 63px;
            font-family: $secondary_font;
            font-size: $medium_font_size;
            position:absolute;
            color:white;
            background-color: #363636;
            span{
                padding:3px 3px;
                margin:0;
                display:block;
            }
            #post-day{
                font-size: $larger_font_size;
            }
            #post-month{
                transition: $transition_full;
                background-color:#252525;
                font-size: $smaller_font_size -2;
            }
        }
        #post-image{
            max-width: 100%;
            width: 371px;
            height: 221px;
            cursor:pointer;
        }        
        h2{
            cursor:pointer;
            color:#555555;
            padding: 10px 10px;
            width:fit-content;
            margin:0;
            font-size: $larger_font_size - 4;
        }
        #post-text{
            color:#8C8C8C;
            margin: 0;
            padding: 10px 10px;
            font-size: $smaller_font_size;
        }
        &:hover{
            background-color: #362F2D;
            h2{
                color: $cream_font_color;
            }
            #post-text{
                color:white;
            }
            .post-date{
                background-color: $dark_cream_bg_color;
                #post-month{
                    background-color: $light_cream_bg_color;
                }
            }
        }
        #post-button{
            padding:10px 10px;
            font-size: $smaller_font_size;
            border:none;
            background-color: transparent;
            color: $cream_font_color;
        }
    }
    .post_sliders{
        margin-inline: 7px;
        color:$cream_font_color;
        width:23px;
        height:23px;
        font-size: 12px;
        background-color: transparent;
        border-radius: 50%;
        border: 2px solid $cream_font_color;
    }
    .post_sliders.disabled{
        border: 2px solid grey;
        color: grey;
        cursor: auto;
    }
    @media only screen and(max-width:1300px){
        .posts{
            flex:100%;
        }
    }
    @media only screen and(max-width: 415px){
        #post-image{
            max-width: 20px;
        }
        .posts{
            width: 320px;
            height: 340px;
        }
    }
}
</style>
