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
    .catch((err) => console.log(err))
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
    font-size: $larger_font_size - 2;
}
#content{
    font-size:$smaller_font_size ;
    padding:10px 10px;
}
.full-section-api{
    padding-left: 13%;
    padding-right: 13%;
    margin-top:-81px;
    margin-bottom:81px;
    display:flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;

    .small-api-boxes{
        padding: 17px 17px;
        flex:10%;
        width:10%;
        text-align: center;        
        min-height: auto;
        @media only screen and(max-width: 1366px){
            flex:50%;
        }
        @media only screen and(max-width: 720px){
            flex:100%;
            width:50%;
        }
        &:hover #bottom{
            border-bottom: 3px solid $cream_font_color;
        }
        &:hover h1{
            color: $cream_font_color;
        }
        &:hover #box-logo{
            color:$cream_font_color;
        }
        #box-img{
        width:45px;
        max-width:45px;
        height: 41px;
        max-height:41px;
        }
        #box-logo{
        width:45px;
        max-width:45px;
        height: 41px;
        max-height:41px;
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
    }
}


</style>