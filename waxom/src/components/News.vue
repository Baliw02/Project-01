<template>
    <div class="full-section">
        <div class="wrapper">
        <div class="left-box">
            <ul id="footer-menu">
                <li>
                    <img id="logo" src="./icons_etc/logo.png">
                </li>
                <li class="text">
                    <p id="list-p">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt sut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci suscipit lobortis claritatem.
                        <br><button id="footer-rm">Read More <font-awesome-icon id="icon" icon="caret-right" /></button>
                    </p>
                </li>
            </ul>
        </div>
        <div class="center-left-box">
            <ul id="footer-menu">
                <li id="footer-items"><h1 id="footer-title">Recent posts</h1></li>
                <li id="footer-items" class="text">
                    <span id="new-date">September 08, 2015</span><br>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
                <li id="footer-items" class="text"><span id="new-date">September 08, 2015</span><br>
                    <span id="center-post">Diam nonummy nibh euismod tincidunt ut laoreet dolore magna</span>
                </li>
                <li id="footer-items" class="text">
                    <span id="new-date">September 08, 2015</span><br>
                    Claritas est etiam processus dynamicus, qui sequitur mutationem per seacula quarta decima
                </li>
            </ul>
        </div>
        <div class="center-right-box">
            <ul id="footer-menu">
                <li id="footer-items-twitter"><h1 id="footer-title">Our Twitter</h1></li>
                <li id="footer-items-twitter" class="text" v-for="footer_item in datas" :key="footer_item.conent"><span id="uploader">{{footer_item.uploader}}</span> {{footer_item.content}} 
                    <br > {{footer_item.time}} ago</li> 
            </ul>
        </div>
        <div class="right-box">
            <ul id="image-box">
                <li id="footer-items"><h1 id="footer-title">Dribbble Widget</h1></li>
                <li id="images"><img src="./projectimages/widget01.jpg" style="max-width:100%; width:137px; height:99px"> <img src="./projectimages/widget02.jpg" style="max-width:100%; width:137px; height:99px"></li>
                <li id="images"><img src="./projectimages/widget03.jpg" style="max-width:100%; width:137px; height:99px"> <img src="./projectimages/widget04.jpg" style="max-width:100%; width:137px; height:99px"></li>
            </ul>
        </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            datas: [],
            hour: false,
            day: false,
            time: 0
        }
    },
    created(){
    axios.get('/api/twitter')
    .then(response => {
        console.log(response.data)
        this.datas = response.data
    })
    },
}
</script>

<style lang="scss" scoped>
@import './design.scss';

#images{
    white-space: pre-wrap;
    border:none;
    text-align: center;
    margin-bottom:-13%;
    padding-bottom: 10%;
}
#footer-menu{
    padding:21px 21px;
    list-style-type: none;
    @media only screen and (max-width: 768px){
        padding:15px 15px;
    }
    @media only screen and (max-width: 400px){
        padding:0px;
    }
}
#image-box{
    padding:0;
    text-align: center;
    list-style: none;
}
.full-section{
    font-family: $primary_font;
    justify-content: center;
    flex-wrap: wrap;
    display:flex;
    width:100%;
    background-color: rgb(24, 23, 23);
    margin:0;
}
.wrapper{
    max-width: 1200px;
    margin:auto;
    display: flex;
    flex-wrap: wrap;
}
.left-box{
    justify-content: center;
    text-align: center;
    width:25%;
}
.center-left-box{
    width:25%;
}
.center-right-box{
    width:25%;
}
.right-box{
    width:25%;
}
#logo{
    margin-bottom:5%;
}
#list-p{
    text-align: justify;
    color:#555555;
    font-size: $smaller_font_size;
}
#footer-rm{
    font-family: $primary_font;
    margin-top:2%;
    color:#D1D1D1;
    background-color: transparent;
    border:none;
    font-size: $smaller_font_size;
    padding-left: 0;
}
#footer-title{
    font-size: $larger_font_size;
    color:white;
}
#new-date{
    font-size: $smaller_font_size - 2;
}
#footer-items{
    font-size: $smaller_font_size;
    color:#555555;
    padding:5% 5%;
    transition: $transition_full;
}
#footer-items-twitter{
    font-size: $smaller_font_size;
    color:#555555;
    padding:5% 5%;
    transition: $transition_full;
}
#uploader{
    color: #00BFF3;
}
#footer-items:hover{
    color: $cream_font_color;
}
.text{
    border-bottom:1px solid #252525;
}
</style>