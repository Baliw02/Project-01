<template>
<div class="sidebar-full">
    <div :class="{navb: true, changed: scrollPosition >= 30, bg: activator}">
        <button id="show-sidebar" v-on:click="activate()"><font-awesome-icon v-if="!activator" id='icon' :icon="['fas', 'bars']" /><font-awesome-icon v-if="activator" id='icon' :icon="['fas', 'window-close']" /></button>
        <img id="sidebar-logo" src="./icons_etc/logo.png">
    </div>
    <div :class="{sidebar:true, active: activator}">
        <img id="search-logo" src="./icons_etc/search.png" alt="">
        <img id="car-logo" src="./icons_etc/cart.png" alt="">
        <ul id="sidebar-ul">
            <li id="sidebar-item" class="act">Home</li>
            <li id="sidebar-item" >About Me</li>
            <li id="sidebar-item" >Portfolio</li>
            <li id="sidebar-item" >Features</li>
            <li id="sidebar-item" >Blog</li>
            <li id="sidebar-item" >Pricing</li>
            <li id="sidebar-item" >Shortcodes</li>
            <li id="sidebar-item" >Contact</li>
        </ul>
    </div>
        
</div>
</template>
<script>
export default {
    data(){
        return{
            scrollPosition: 0,
            activator: false,
            click: 0
        }
    },
    methods:{
        updateScroll(){
            this.scrollPosition = window.scrollY
        },
        activate:function(){
            this.click += 1
            if(this.click == 1){
                this.activator = true
            }
            if(this.click == 2){
                this.activator = false
                this.click = 0
            }
        }
    },
    mounted(){
        window.addEventListener('scroll', this.updateScroll);
    }
}
</script>
<style lang="scss" scoped>
@import './design.scss';

#search-logo, #cart-logo{
    text-align: right;
    margin-right:2%;
    margin-left:2%;
}
#sidebar-logo{
    margin:auto;
    text-align: center;
    padding: 10px 10px;
    width: 130px;
    display: block;
    position: fixed;
    z-index: 150;
    left: 0%;
    right: 0;
    top: 0;
}
#sidebar-item.act{
    background-color: $light_cream_bg_color;
    border-radius: 5%;
}
#icon{
    color:white;
    width:16px;
    height: 14.25px;
}
.sidebar{
    $transition_time: 1s;
    transition: $transition_full;
    position:fixed;
    left:-10%;
    top:54px;
    background-color: black;
    z-index: 100;
    width:40%;
    transform:translateX(-101%);
    height: 100vh;
    padding:30px 30px;
}
.sidebar.active{
    left:0;
    top:54px;
    transform:translateX(0%);
    padding:30px 30px;
    width:30%;
    height: 100vh;
    @media only screen and(max-width: 600px){
        width:50%;
        }
}
#show-sidebar{
    background-color: transparent;
    border:none;
    padding:15px 15px;
}
.navb{
    $transition_time: 0.3s;
    margin: $centered_margin;
    height: auto;
    max-width: 100%;
    min-width: 50%;
    min-height: 50px;
    display: block;
    justify-content: center;
    background-color: black;
    margin-top: 0;
    padding-top: 0px;
    z-index: 99;
    position: relative;
    transition: $transition_full;
    top:0;
    left:0;
}
.navb.changed{
    position: fixed;
    background-color: rgba(0,0,0,100%);
    width:100%;
    display:block;
    z-index: 99;
}
.navb.bg, .navb.bg.changed{
    background-color: black;
}
#sidebar-ul{
    list-style-type: none;
    text-align: center;
    width:fit-content;
    padding:20px 20px;
}
#sidebar-item{
    padding:5px 5px;
    text-align: left;
    cursor:pointer;
    font-size: $smaller_font_size;
    font-family: $primary_font;
    color:white;
    margin-left:1%;
    margin-right: 1%;
    transition: $transition_full;
}
</style>