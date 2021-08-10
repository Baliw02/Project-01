<template>
    <div class="full-row">
        <div class="text">
            <h1>
                Recent Posts.
            </h1>
            <p>
                Investiationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutatuionem consuetiasd.
            </p>
        </div>
        <div id="postbox" v-for="(item, i) in box_datas" :key="i" :class="{postboxes: true, active: i == activeId && windowWidth > 1000}">
            <div v-if="i < 3">
                <div  :class="{date: true, active: i == activeId}">
                    <span id="day">{{item.day}}</span>
                    <span id="month">{{item.month}}.</span>
                </div>
                <img :src="item.image">
                <h2 :class="{active: i == activeId }">{{item.title}}</h2>
                <p id="post-content">{{item.content}}</p>
                <button>Read More <font-awesome-icon id="icon" icon="caret-right" /></button>
            </div>
        </div>
        <div class="sliders">
            <button v-if=" windowWidth > 1000" v-on:click="activeId = activeId -1, checking()" id="slider-left"><font-awesome-icon id="icon" icon="angle-left" /></button>
            <button v-if=" windowWidth > 1000" v-on:click="activeId = activeId +1, checking()" id="slider-right"><font-awesome-icon id="icon" icon="angle-right" /></button>
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
            activeId: 1,
            windowWidth: 0
        }
    },
    methods:{
        checking:function(){
            if(this.activeId == 3 ){
                this.activeId = 0
            }
            if(this.activeId == -1){
                this.activeId = 2
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
    }
}
</script>

<style scoped>
.full-row{
    text-align: center;
    margin-top: 10%;
    position: relative;
}
h1{
    text-align: center;
}
p{
    text-align: center;
}
.text{
    margin-bottom: 5%;
}
.postboxes{
    transition: all .2s linear;
    height: auto;
    position: relative;
    text-align: left;
    margin-left: -5%;
    margin-right: -5%;
    display:inline-block;
    min-height: 396px;
    margin-bottom:2%
}
img{
    max-width: 397px;
    max-height: 400px;
}
h2{
    font-family: Raleway;
    font-weight: 700;
    max-width: 300px;
    font-size: 20px;
    padding:10px 10px;
    margin:auto;
    height: auto;
}
#post-content{
    font-weight: 300;
    text-align: left;
    margin:auto;
    min-height: 150px;
    max-width: 300px;
    font-size: 14px;
    padding:10px 10px;
    font-family: Raleway;
}
button{
    padding: 10px 10px;
    display: block;
    width:auto;
    margin: auto;
    text-align: center;
    align-items: center;
    margin-top: 1%;
    font-size: 14px;
    border:none;
    background-color: transparent;
    color:#C7B299;
}
.date{
    top:0;
    text-align: center;
    display:block;
    position:absolute;
    padding:10px 10px;
}
span{
    padding: 5px 10px;
    display:block;
    font-family: Raleway;
}
#month{
    font-size: 12px;
    background-color: black;
    color:white;
    font-weight: 500;
}
#day{
    font-weight: 500;
    font-size: 24px;
    background-color: grey;
    color:white;
    top:0;
}
.sliders{
    display:block;
    text-align: center;
}
#slider-left, #slider-right{
    transition: all .2s linear;
    margin-inline: 0.2%;
    width:30px;
    height:30px;
    border:3px solid #C7B299;
    border-radius: 50%;
    text-align: center;
    font-size: 20px;
    display:inline-flex;
    justify-content: center;
    align-items: center;
}
#slider-left:hover, #slider-right:hover{
    color:black;
    border-color:black;
}

.postboxes.active {
    background-color: #362F2D;
    color:white;
    z-index: 50;
    transform:scale(1.2);
}
.date.active > #day{
    background-color: #C7B299;
}
.date.active > #month{
    background-color: #a1907a;
}
h2.active{
    color:#C7B299;
}
@media only screen and (min-width: 1800px) {
    .postboxes{
        margin-inline: -1%;
    }
}
@media only screen and (max-width: 1800px) {
    button{
        margin-top:2%;
    }
}
@media only screen and (max-width: 1322px) {
    #postbox{
        width:30%;
    }
    button{
        margin-top:3%;
    }
    img{
        width:auto;
        max-width: 100%;
        max-height: 400px;
    }
}
@media only screen and (max-width: 1000px) {
    #postbox{
        margin-top:2%;
        display:block;
        width:80%;
        margin:auto;
    }
}
</style>

