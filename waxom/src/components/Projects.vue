<template>
    <div class="full-section">
        <div class="text">
            <h1>Our Latest Projects.</h1>
            <p id="comm">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.</p>
        </div>
        <div class="buttons" >
            <ul>
                <li v-for="(item, i) in buttons" :key="i"><button id="list" v-on:click="setActive(i), activated = true" :class="{active: i === active}">{{item.titles}}</button></li>
            </ul>
        </div>
            <!--v-if="item.category == cate"-->
            <div  v-for="(item ) in boxes" :key="item" :class="{project_boxes: true, activatedclass: item.category == cate}">
                <div v-show="item.category == cate && item.index < limit" :class="{showbox: true, activatedlimiter: item.index < limit}">
                    <img :src="item.image">
                    <h2>{{item.title}}</h2>
                    <p id="img-text">{{item.Content}}</p>
                </div>                
            </div>
        <button id="load-more" v-on:click="limit = limit + 6" >Load More</button>
    </div>
</template>

<style scoped>
#list:hover{
    color:white;
    background-color:#998675;
}
#list{
    transition: all .1s linear;
}
img{
    width:100%;
    max-width: 100%;
}
.full-section{
    text-align: center;
    margin-top: 5%;
    margin-left:12%;
    margin-right: 12%;
}
.buttons{
    width: 100%;
}
button{
    font-family: Raleway;
    font-weight: 500;
    border:none;
    padding: 0.5% 1%;
    background-color: transparent;
    transition: all .2s linear;
}
#load-more{
    transition: all .1s linear;
    display: block;
    width:fit-content;
    height: fit-content;
    margin:auto;
    font-family: Raleway;
    font-weight: 500;
    text-transform: uppercase;
    padding: 1.0% 1.0%;
    background-color: #998675;
    color:white;
    border:none;
    cursor: pointer;
    border-radius: 5%;
    transition: all .2s linear;
    margin-bottom: 5%;
}
#load-more:hover{
    background-color:black;
    color:#998675
}
.active{
    font-family: Raleway;
    font-weight: 500;
    padding: 0.5% 1%;
    background-color: #998675;
    color:white;
    border:none;
    cursor: pointer;
    border-radius: 5%;
    transition: all .1s linear;
}
ul{
    text-align: center;
    margin:auto;
    margin-bottom:5%; 
}
li{
    margin-inline: 1%;
    display: inline;
}
h1{
    color:#362F2D;
    margin: auto;
}
p{
    text-align: left;
    color:#8C8C8C;
    width: 45%;
}
#comm{
    margin:auto;
    text-align: center;
}
.text{
    padding-top: 2%;
    text-align: center;
    padding-bottom: 5%;
}
h2{
    width:100%;
    color:#C7B299;
    text-align: left;
}
.project_boxes{
    display:none;
}

.project_boxes.activatedclass{
    background-color: #f5f3ee;    
    display:inline-block;
    margin-bottom:10%;
    width: 20%;
    margin-inline: 100px;
    border:2px solid #FBFAF8;    
    transition: all .2s linear;
}
.showbox{
    display:none;
    visibility: collapse;
}
.showbox.activatedlimiter{
    visibility: visible;
    display:block;
}
.project_boxes.activatedclass:hover{
    transform:scale(1.05);
    background-color: #362F2D;    
}
.project_boxes.activatedclass:hover img{
    filter:opacity(0.5);
}

#img-text{
    color:#D1D1D1;
    font-size:14px;
    font-family: Raleway;
    width:100%;
}
h2, p{
    padding:20px 20px;
}
@media only screen and (max-width:2000px) {
    .project_boxes.activatedclass{
        width:30%;
        margin-inline: 0;    
        margin-left: 1%;
        margin-right: 1%;
    }
}

@media only screen and (max-width: 1000px) {
    .showbox.activatedlimiter{
        margin-bottom:25px;
    }
    #comm{
        width:100%;
        padding:20px 20px;
    }
    .project_boxes.activatedclass{
        margin:0;
        width:40%;
        margin-bottom:5%;
        margin-left:2%;
        margin-right: 2%;
    }
    .project_boxes.activatedclass:hover{
        transform:scale(1.05);
    }
    #load-more{
        padding:10px 10px;
    }

}
@media only screen and (max-width: 780px) {
    .project_boxes.activatedclass{
        width:70%;
    }
}
</style>
<script>
import axios from 'axios'

export default {
    name:"ProjectShow",
    data(){
        return{
            active: 0,
            buttons:[
                {titles: 'All', cat: 'all'},
                {titles: 'Web Design', cat: 'webdesign'},
                {titles: 'Mobile App', cat: 'mobile'},
                {titles: 'Illustration', cat: 'illustration'},
                {titles: 'Photography', cat: 'photo'}
            ]   
            ,
            boxes: [],
            cate: 'all',
            activated:false,
            switcher: '',
            limit: 6
        }
    },
    methods:{
        setActive: function(i){
            this.active = i;
            this.cate = this.buttons[i].cat
            this.switcher = this.buttons[i].cat           
            this.limit = 6
            if(this.limit == 66){
                this.limit = 0;
            }
            },
    },
    created(){
    axios.get('/api/projects')
    .then(response => {
        console.log(response.data)
        this.boxes = response.data
        })
    }
}
</script>