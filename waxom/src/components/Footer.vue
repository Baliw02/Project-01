<template>
    <div class="full-section">
        <div class="left-box">
            <ul>
                <li>
                    <img id="logo" src="./icons_etc/logo.png">
                </li>
                <li class="text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci suscipit lobortis claritatem.
                        <br><button>Read More <font-awesome-icon id="icon" icon="caret-right" /></button>
                    </p>
                </li>
            </ul>
        </div>
        <div class="center-left-box">
            <ul>
                <li><h1>Recent posts</h1></li>
                <li class="text">
                    September 08, 2015<br>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
                <li class="text"><span>September 08, 2015</span><br>
                    <span>Diam nonummy nibh euismod tincidunt ut laoreet dolore magna</span>
                </li>
                <li class="text">September 08, 2015<br>
                    Claritas est etiam processus dynamicus, qui sequitur mutationem per seacula quarta decima
                </li>
            </ul>
        </div>
        <div class="center-right-box">
            <ul>
                <li><h1>Our Twitter</h1></li>
                <li class="text" v-for="i in datas" :key="i">{{i.content}} 
                    <br > {{i.time}} ago</li> 
            </ul>
        </div>
        <div class="right-box">
            <ul id="image-box">
                <li><h1>Dribbble Widget</h1></li>
                <li id="images"><img src="./projectimages/widget01.jpg"> <img src="./projectimages/widget02.jpg"></li>
                <li id="images"><img src="./projectimages/widget03.jpg"> <img src="./projectimages/widget04.jpg"></li>
            </ul>

        </div>
    </div>
</template>

<style scoped>
img{
    max-width: 100%;
    width:137px;
    max-height: 99px;
}
#images{
    white-space: pre-wrap;
    border:none;
    text-align: center;
    margin-bottom:-13%;
    padding-bottom: 10%;
}
ul{
    padding:50px 50px;
}
#image-box{
    padding:0;
    text-align: center;
}
.full-section{
    justify-content: center;
    flex-wrap: wrap;
    display:flex;
    width:100%;
    background-color: rgb(24, 23, 23);
    padding-left:10%;    
    padding-right:10%;    
}
.left-box{
    justify-content: center;
    text-align: center;
    flex:25%;
}
.center-left-box{
    flex:25%;
}
.center-right-box{
    flex:25%;
}
.right-box{
    flex:25%;
    min-width:425px;
    max-width: 25%;
    padding:50px 50px;
}
#logo{
    margin-bottom:5%;
}
p{
    text-align: justify;
    color:#555555;
    font-size: 14px;
}
button{
    margin-top:2%;
    color:white;
    background-color: transparent;
    border:none;
}
ul{
    list-style-type: none;
}
h1{
    color:white;
}
li{
    color:#555555;
    padding:5% 5%;
}
.text{
    border-bottom:1px solid #252525;
}
span{
    color:#C7B299;
}
@media  only screen and (max-width: 1920px){
    #images{
        margin-bottom:0%;
        padding-top:1%
    }

}
@media only screen and (max-width: 1000px) {
    .left-box, .center-left-box, .center-right-box, .right-box{
        flex:100%;
        width:100%;
    }
}

</style>


<script>
import axios from 'axios'

export default {
    name:"Footer",
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