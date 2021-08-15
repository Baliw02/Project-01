<template>
    <div class="section">
        <div class="left-flex">
            <img id="phone" src="./icons_etc/phone.png">
        </div>
        <div class="right-flex">
            <div class="text-box">
                <h1>Excellent for Mobile Devices</h1>
                <p>Qisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                <div class="list">
                    <ul id="drp-menu">
                        <li id="drp-item"> <button id="drp-btn" class="btns" v-on:click="selected = 0, dblclick()" :class="{active: counter == 1 && selected == 0}"  ><font-awesome-icon id="icon" icon="angle-right" /></button> Nam liber temporr cum soluta nobis eleifend optionNam liber temporr cum soluta </li>
                        <div class="box" v-if="selected == 0 && counter == 1"><p> Nam liber temporr cum soluta nobis eleifend option Nam liber temporr cum soluta nobis eleifend option</p></div>
                        <li id="drp-item"> <button id="drp-btn" class="btns" v-on:click=" selected = 1, dblclick()"  :class="{active: counter == 1 && selected == 1}"  ><font-awesome-icon id="icon" icon="angle-right" /></button> Nam liber temporr cum soluta nobis eleifend optionNam liber temporr cum soluta</li>
                        <div class="box" v-if="selected == 1 && counter == 1"><p> Nam liber temporr cum soluta nobis eleifend option Nam liber temporr cum soluta nobis eleifend option</p></div>
                        <li id="drp-item"> <button id="drp-btn" class="btns" v-on:click=" selected = 2, dblclick()" :class="{active: counter == 1 && selected == 2}"  ><font-awesome-icon id="icon" icon="angle-right" /></button> Nam liber temporr cum soluta nobis eleifend optionNam liber temporr cum soluta </li>
                        <div class="box" v-if="selected == 2 && counter == 1"><p> Nam liber temporr cum soluta nobis eleifend option Nam liber temporr cum soluta nobis eleifend option</p></div>
                        <li id="drp-item"> <button id="drp-btn" class="btns"  v-on:click=" selected = 3, dblclick()" :class="{active: counter == 1 && selected == 3}"  ><font-awesome-icon id="icon" icon="angle-right" /></button> Nam liber temporr cum soluta nobis eleifend optionNam liber temporr cum soluta </li>
                        <div class="box" v-if="selected == 3 && counter == 1"><p> Nam liber temporr cum soluta nobis eleifend option Nam liber temporr cum soluta nobis eleifend option</p></div>
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
        counter: 0,
        btns: []
        }
    },
    methods:{
        dblclick:function(){
            this.counter += 1
            if(this.counter == 2){
                this.counter = 0
            }
        }
        
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

</style>
