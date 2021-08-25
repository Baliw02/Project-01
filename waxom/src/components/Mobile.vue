<template>
<div class="wrapper">
    <div class="mobile-section">
        <div class="left-flex">
            <img id="phone" src="./icons_etc/phone.png">
        </div>
        <div class="right-flex">
            <div class="text-box">
                <h1>Excellent for Mobile Devices</h1>
                <p>Qisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                <div class="list">
                    <ul id="drp-menu">
                        <li v-for="(list, list_index) in datas" :key="list + list_index + list.title +list.content ">
                            <p> <button @click="setActive(list_index)" :class="{active: list_index === active && counter == 1}"><font-awesome-icon :icon="['fas', 'angle-right']" id="icon" /></button>{{list.title}}</p>
                            <transition name="dropdown">
                                <div v-if="active === list_index && counter == 1" class="drp-content" :class="{active: list_index === active}">
                                    {{list.content}}
                                </div>
                            </transition>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import axios from 'axios'

export default {
    data(){
        return{
        active: 0,
        datas: [],
        isActive: 0,
        selected: undefined,
        counter: null,
        btns: [
            {index: 0},
            {index: 1},
            {index: 2},
            {index: 3}
        ]
        }
    },
    methods:{
        setActive:function(i){
            this.isActive = this.active
            this.counter += 1
            this.active = i
            if(this.counter == 2){
                this.counter = 0
            }
            if(this.active != this.isActive){
                this.counter == 1
            }
        },
        
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

<style lang="scss" scoped>
@import './design.scss';

#phone{
    max-height:100%;
}
.mobile-section{
    font-family: $primary_font;
    margin-top:80px;
    $transition_time: 0.1s;
    display:flex;
    .text-box{
        h1{
            color:#555555;
            font-size: $larger_font_size + 6;
            text-align: left;
            padding-bottom:40px;
        }
        p{
            text-align: left;
            font-size: $medium_font_size;
            padding-bottom:39px;
        }
    }
    .left-flex{
        flex:40%;
        text-align: right;
        justify-content: flex-end;
        display:flex;
        @media only screen and (max-width: 1100px){
            justify-content: center;
        }
    }
    .right-flex{
        color: #8C8C8C;
        padding:100px 100px;
        padding-right: 100px;
        flex:60%;
        justify-content: flex-start;
    }
    #drp-menu{
        button{
            margin-right: 3%;
            width: 22px;
            height: 22px;
            text-align: center;
            border:none;
            border-radius: 50%;
            background-color: $cream_font-color;
            transition: $transition_full;
        }
        button.active{
            transform:rotate(90deg);
            margin-bottom:0;
        }
        #icon{
            margin:auto;
            display:block;
            text-align: center;
            font-size: $medium_font_size;
            color: white;
        }
        list-style-type: none;
        .drp-content{
            transition: $transition_full;
            padding:5px 5px;
            text-align: left;
        }
        p{
            text-align: left;
            font-size: $medium_font_size;
            margin-bottom: 0;
            padding:11px 11px;
        }
        .dropdown-enter-active{
            animation: mobile-box-in .3s;
        }
        .dropdown-leave-active{
            animation: mobile-box-in .3s reverse;
        }
    }
    @media only screen and (max-width:1440px){
        #drp-menu{
            p{
                padding:2px 2px;
            }
        }
    }
    @media only screen and (max-width: 1100px){
        flex-wrap: wrap-reverse;
        .left-flex{
            text-align: center;
            flex:100%;
        }
        .right-flex{
            justify-content:center;
            flex:100%;
        }
    }
    @media only screen and (max-width: 690px){
        .right-flex{
            justify-content: center;
            text-align: left;
            padding:5px 5px;
            h1{
                padding:10px 10px;
            }
            p{
                padding:10px 10px;
            }
        }
        #drp-menu{
            p{
                text-align: left;
                padding: 1px 1px;
            }
        }
    }
@keyframes mobile-box-in {
    from{
        opacity:0;
        transform: translateY(-50%)
    }
    to{
        opacity:1;
        transform: translateX(0)
    }
}
@keyframes mobile-box-out {
    from{
        visibility:visible;
        transform:translateX(0)
    }
    to{
        visibility: hidden;
        transform:translateX(100%)
    }
}
}
</style>
