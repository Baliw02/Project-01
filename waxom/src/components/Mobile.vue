<template>
    <div class="section">
        <div class="left-flex">
            <img src="./icons_etc/phone.png">
        </div>
        <div class="right-flex">
            <div class="text-box">
                <h1>Excellent for Mobile Devices</h1>
                <p>Qisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                <div class="list">
                    <ul>
                        <li> <button class="btns" v-on:click="selected = 0" :class="{active: selected == 0}"  ><font-awesome-icon id="icon" icon="angle-right" /></button> Nam liber temporr cum soluta nobis eleifend option</li>
                        <div class="box" v-if="selected == 0"> Nam liber temporr cum soluta nobis eleifend option Nam liber temporr cum soluta nobis eleifend option</div>
                        <li> <button class="btns" v-on:click=" selected = 1"  :class="{active: selected == 1}"  ><font-awesome-icon id="icon" icon="angle-right" /></button> Nam liber temporr cum soluta nobis eleifend option</li>
                        <div class="box" v-if="selected == 1"> Nam liber temporr cum soluta nobis eleifend option Nam liber temporr cum soluta nobis eleifend option</div>
                        <li> <button class="btns" v-on:click=" selected = 2" :class="{active: selected == 2}"  ><font-awesome-icon id="icon" icon="angle-right" /></button> Nam liber temporr cum soluta nobis eleifend option</li>
                        <div class="box" v-if="selected == 2"> Nam liber temporr cum soluta nobis eleifend option Nam liber temporr cum soluta nobis eleifend option</div>
                        <li> <button class="btns"  v-on:click=" selected = 3" :class="{active: selected == 3}"  ><font-awesome-icon id="icon" icon="angle-right" /></button> Nam liber temporr cum soluta nobis eleifend option</li>
                        <div class="box" v-if="selected == 3 "> Nam liber temporr cum soluta nobis eleifend option Nam liber temporr cum soluta nobis eleifend option</div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'Mobile',
    data(){
        return{
        datas: [],
        isActive: false,
        selected: undefined,
        clicked: false,
        btns: []
        }
    },
    methods:{
        
//        handleClick:function(){
//        var btns = document.getElementsByClassName("btns");
//        if(!this.clicked){
//            for(var i = -1; i < btns.length; i++){
//                if(btns[i].className == "btns active"){
//                btns[i].classList.remove("active")
//                }
//           }for(i = 0; i <= this.selected; i++){
//                   btns[i] = this.isActive = true
//               }
//            
//            }
//        },
        
    },
    created(){
    axios.get('/api/dropdown')
    .then(response => {
        console.log(response.data)
        this.datas = response.data
    })
    }
}
</script>

<style scoped>
button{
    border-radius: 50%;
    font-size: 12px;
    width:25px;
    height: 25px;
    background-color: #C7B299;
    color:white;
    border:none;
    margin-right: 1%;
    text-align: center;
    transition: all .1s linear;
    justify-content: center;
    align-items: center;
}
button:hover{
    transform: rotate(90deg);
}
#icon{
    margin:auto;
}
.section{
    display: flex;
    margin-top: 10%;
    flex-wrap: wrap-reverse;
}
.left-flex{
    flex:40%;
    text-align: end;
}
.right-flex{
    text-align: start;
    flex:60%;
    padding:5% 10%;
}
.text-box{
    width:100%;
}
ul{
    list-style: none;
}
li{
    margin-bottom: 0.5%;
}
p{
    text-align: justify;
}
.btns.active{
    transform: rotate(90deg);
}
@media only screen and (max-width: 1062px) {
    img{
        max-width: 100%;
    }
    .left-flex{
        flex:100%;
        text-align: center;
    }
    .right-flex{
        text-align: center;
        flex:100%;
    }
}

</style>
