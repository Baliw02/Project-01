<template>
<div class="wrapper">
    <div class="full-section-projects">
        <div class="text-project">
            <h1 id="projects-title"> Our Latest Projects.</h1>
            <p id="comm">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.</p>
        </div>
        <div class="projects-buttons" id="switcher-buttons">
            <ul id="projects-buttons-menu">
                <li id="projects-menu-items" v-for="(item, i) in buttons" :key="item.titles + i"><button id="list" v-on:click="setActive(i), activated = true, limit = 6" :class="{active: i === active}">{{item.titles}}</button></li>
            </ul>
        </div>
        <div class="rows">
        <div v-for="(project_box, j) in activeBoxes" :key="project_box.image + project_box.title + project_box.content + j" :class="{boxes, activatedc: j < limit, disabled: j >= limit}"> <!-- limit > j -->
            <img id="projects-image" :src="project_box.image">
            <div class="project-icons-div">
                <font-awesome-icon  id='project-icons' :icon="['fas', 'link']" />
                <font-awesome-icon  id='project-icons' :icon="['fas', 'search']" />
            </div>
            <div class="content">
                <h2 id="projects-box-title">{{project_box.title}}</h2>
                <p id="p-cont">{{project_box.Content}}</p>
            </div>
            <div v-if="j == 3" class="break"></div>
        </div>
        </div>
            <button v-if="show" id="load-more" v-on:click="limit += 6">Load more</button>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            a: 0,
            j: 0,
            show: true,
            limit: 6,
            active:0,
            boxes: [],
            switcher: [],
            buttons:[
                {titles: 'All', cat: ''},
                {titles: 'Web Design', cat: 'webdesign'},
                {titles: 'Mobile App', cat: 'mobile'},
                {titles: 'Illustration', cat: 'illustration'},
                {titles: 'Photography', cat: 'photo'}
            ],
        }
    },
    created(){
        axios.get('/api/projects')
        .then(response => {
            this.boxes = response.data
//limit > legnagyobb index
        })
    },
    methods:{
        setActive: function(i){
            this.active = i;
            this.switcher = this.buttons[i]
            },
    },
    computed:{
        activeBoxes: function(){
            return this.boxes.filter((boxes) => {
                if(this.switcher.cat == '' || this.switcher.cat == undefined){
                    if(this.boxes.length < this.limit){
                        this.show = false
                    }
                    else if(this.boxes.length > this.limit){
                        this.show = true
                    }
                }
                if(this.switcher.cat == boxes.category.match(this.switcher.cat)){
                    if(boxes.index < this.limit && this.switcher.cat != ''){
                        this.show = false
                    }
                    else if(boxes.index > this.limit && this.switcher.cat != ''){
                        this.show = true
                    }
                }                 
                return boxes.category.match(this.switcher.cat)
            })
            }
    }
}
</script>

<style lang="scss" scoped>
@import './design.scss';
.boxes.disabled{
    display:none;
}
.project-icons-div{
    top:35%;
    left:0;
    right:0;
    margin:auto;
    position:absolute;
}
#project-icons{
    font-size: $larger_font_size + 3;
    visibility: hidden;
    margin-left:27px;
    margin-right: 27px;
}
.boxes:hover  #project-icons{
    color:white;
    visibility: visible;
}
.boxes #project-icons:hover{
    color:$cream-font-color;
    cursor: pointer;
}
#list:hover{
    color:white;
    background-color:#998675;
}
#list{
    color:#8C8C8C;
    font-size: $smaller_font_size;
    font-family: Raleway;
    font-weight: light;
    border:none;
    padding: 0.5% 1%;
    background-color: transparent;
    transition: all .2s linear;
    border: 1px solid #cfcccc;    
}
#list.active{
    padding: 0.5% 1%;
    background-color: #998675;
    color:white;
    border:1px solid transparent;
    cursor: pointer;
    transition: all .1s linear;
}
#projects-image{
    object-position: center;
    object-fit: cover;
    width:100%;
    height: 100%;
    height: 296px;
    max-height:296px;
    max-width: 100%;
}

.rows{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    padding:10px;
}
.boxes{
    transition:all .1s linear;
}
.boxes.activatedc{
    height: 30%;
    width:30%;
    position:relative;
    margin:10px;
    max-height: 30%;
    @media only screen and (max-width:1200px){
        width:40%;
        margin:15px;
    }
    @media only screen and (max-width: 740px){
        width: 100%;
    }
    @media only screen and (max-width: 400px){
        margin: 5px;
    }
}
.boxes:hover .content{
    background-color: #362F2D;
}
.content::after{
    z-index: 98;
    width:0;
    height: 0;
    position:absolute;
    top:286px;
    left:2%;
    content:'';
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 11px solid #FBFAF8;
    margin:auto;
}
.boxes:hover .content::after{
    border-bottom-color: #362F2D;
}
.boxes:hover #p-cont{
    color: $cream_font_color;
}
.boxes:hover #projects-box-title{
    color: #D1D1D1;
}
.boxes:hover img{
    filter: brightness(50%);
}
#projects-box-title{
    font-family: Raleway;
    font-size: 20px;
    color: #C7B299;
}
#p-cont{
    color:#D1D1D1;
    font-family: $primary_font;
    font-size: $smaller_font_size;
}
.content{
    padding:20px 20px;
    text-align: left;
    background-color: #FBFAF8;
}

.break{
    height: 0;
    flex-basis: 100%;
}
.full-section-projects{
    margin-top:81px;
    text-align: center;

}
.projects-buttons{
    width: 100%;
}
#load-more{
    transition: all .1s linear;
    display: block;
    width:fit-content;
    height: fit-content;
    margin:auto;
    margin-bottom:61px;
    font-family: Raleway;
    font-weight: 600;
    text-transform: uppercase;
    padding: 1.0% 1.0%;
    background-color: $light_cream_bg_color;
    color:white;
    border:none;
    cursor: pointer;
    border-radius: 2%;
    transition: all .2s linear;
    margin-top:39px;
    position:relative;
        &::before{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        height: 3px;
        z-index: 0;
        display:block;
        content:'';
        width: 100%;
        position: absolute;
        background-color: #7c695c;
        top:97%;
        left:0;
        bottom:0;
        }
}
#load-more:hover{
    background-color: #7c695c;
    color:white;
}

#projects-buttons-menu{
    text-align: center;
    margin:auto;
    margin-bottom:5%; 
}
#projects-menu-items{
    margin-inline: 1%;
    display: inline;
}
#projects-title{
    font-family: $primary_font;
    color:#362F2D;
    margin: auto;
    font-size: $larger_font_size + 6;
    padding: 24px 24px;
}
#comm{
    font-family: $primary_font;
    border:none;
    padding: 24px 24px;
    width:60%;
    margin:auto;
    @media only screen and (max-width: 740px){
        width: 90%;
        padding:12px 12px;
    }
    @media only screen and (max-width: 400px){
        width: 100%;
    }

}
.triangle{
    width: 5px;
    height: 5px;
    display:block;
    position:absolute;
    z-index: 70;
    top:50%;
    border-bottom: 20px solid black;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    background-color: transparent;
}
.content{
    padding-left: 56px;
}
</style>