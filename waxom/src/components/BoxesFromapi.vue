<template>
    <div class="full-section-api">
        <div class="small-api-boxes" v-for="box in boxes" :key="box + box.image + box.title + box.content" >
            <img id="box-logo" :src="box.image">       
            <h1 id="box-title">{{box.title}}</h1>
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

<style lang="scss" scoped>
@import 'design.scss';

#box-title, #content{
    font-family: $primary_font;
}
#box-title{
    text-align: center;
    font-size: $larger_font_size + 6;
}
#content{
    font-size:$smaller_font_size ;
}
.full-section-api{
    padding-left: 12%;
    padding-right: 12%;
    margin-top:0%;
    display:flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
}
.small-api-boxes{
    padding: 30px 30px;
    flex:10%;
    width:10%;
    text-align: center;        
    min-height: auto;
    @media only screen and(max-width: 1366px){
        flex:50%;
    }
    @media only screen and(max-width: 800px){
        flex:100%;
    }
}
#box-img{
    width:40px;
    height: 40px;
}
#box-title, #bottom{
    transition: all .2s linear;
    font-weight: 600;
}
#bottom{
    margin:$centered_margin;
    border-bottom:3px solid #F1EEE9;
    width: 30%;
}
.small-api-boxes:hover #bottom{
    border-bottom: 3px solid $cream_font_color;
}
.small-api-boxes:hover h1{
    color: $cream_font_color;

}
.small-api-boxes:hover #box-logo{
    color:$cream_font_color;
}   
    #box-logo{
    width:45px;
    max-width:45px;
    height: 41px;
    max-height:41px;
}

</style>