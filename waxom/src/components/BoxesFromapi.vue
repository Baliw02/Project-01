<template>
    <div class="full-section">
        <div class="small-boxes" v-for="box in boxes" :key="box" >
            <img id="logo" :src="box.image">       
            <h1>{{box.title}}</h1>
            <p id="content">{{box.content}}</p>
            <p id="bottom"></p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"Boxes",
    data(){
        return{
            boxes: [],
            
        }
    },
    created(){
    axios.get('/api/boxes')
    .then(response => {
        console.log(response.data)
        this.boxes = response.data
    })
    }
}
</script>

<style scoped>
h1, p, span{
    font-family: Raleway;
}
.full-section{
    padding-left: 12%;
    padding-right: 12%;
    margin-top:5%;
    display:flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
}
.small-boxes{
    padding: 40px 40px;
    flex:10%;
    width:10%;
    text-align: center;        
    min-height: auto;
}
img{
    width:40px;
    height: 40px;
}
h1, #bottom{
    transition: all .2s linear;
    font-weight: 600;
}
h1{
    font-size: xx-large;
}
content{
    text-align: justify;
}
#bottom{
    margin:auto;
    border-bottom:3px solid #F1EEE9;
    width: 15%;
}
.small-boxes:hover #bottom{
    border-bottom: 3px solid #C7B299;
}
.small-boxes:hover h1{
    color: #C7B299;

}
p{
    font-size:18px;
}
@media only screen and (max-width: 1366px) {
    .small-boxes{
        flex:50%;
    }
}
@media only screen and (max-width: 650px) {
    h1{
        font-size:25px;
    }
    .small-boxes{
        text-align: center;
        flex:100%;
    }
    #content{
        text-align: justify;
        font-size:15px;
        padding-left: 2%;
        padding-right: 2%;
    }
    #bottom{
        margin:auto;
        width:10%;
    }
}
</style>