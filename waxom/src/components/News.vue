<template>
    <div class="full-section">
        <div class="left-box">
            <ul id="footer-menu">
                <li>
                    <img id="logo" src="./icons_etc/logo.png">
                </li>
                <li class="text">
                    <p id="list-p">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci suscipit lobortis claritatem.
                        <br><button id="footer-rm">Read More <font-awesome-icon id="icon" icon="caret-right" /></button>
                    </p>
                </li>
            </ul>
        </div>
        <div class="center-left-box">
            <ul id="footer-menu">
                <li id="footer-items"><h1 id="footer-title">Recent posts</h1></li>
                <li id="footer-items" class="text">
                    September 08, 2015<br>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
                <li id="footer-items" class="text"><span id="center-post">September 08, 2015</span><br>
                    <span id="center-post">Diam nonummy nibh euismod tincidunt ut laoreet dolore magna</span>
                </li>
                <li id="footer-items" class="text">September 08, 2015<br>
                    Claritas est etiam processus dynamicus, qui sequitur mutationem per seacula quarta decima
                </li>
            </ul>
        </div>
        <div class="center-right-box">
            <ul id="footer-menu">
                <li id="footer-items"><h1 id="footer-title">Our Twitter</h1></li>
                <li id="footer-items" class="text" v-for="footer_item in datas" :key="footer_item.conent">{{footer_item.content}} 
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
</template>

<script>
import axios from 'axios'

export default {
    name:"News",
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
    computed:{
        // checkingTime:function(){
        // if(this.datas.time >= 60 && this.datas.time > 0){
        //     this.hours = true
        //     return  this.time / 60
        // }
        // if(this.datas.day > 0){
        //     this.day = true
        //     this.hour = false
        //     return this.time = this.datas.day
        // }
        // }
    }
}
</script>