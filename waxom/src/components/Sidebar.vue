<template>
<div class="sidebar-full">
    <div :class="{navb: true, changed: scrollPosition > 30, bg: activator}">
        <button v-on:click="activate()"><font-awesome-icon id='icon' :icon="['fas', 'bars']" /></button>
        <img id="logo" src="./icons_etc/logo.png">
    </div>
    <div :class="{sidebar:true, active: activator}">
        <img src="./icons_etc/search.png" alt="">
        <img src="./icons_etc/cart.png" alt="">
        <ul>
            <li class="act">Home</li>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Features</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Shortcodes</li>
            <li>Contact</li>
        </ul>
    </div>
        
</div>
</template>
<script>
export default {
    name: 'Sidebar',
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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
img{
    text-align: center;
    margin-right:2%;
    margin-left:2%;
}
#logo{
    padding:10px 10px;
    width:60px;
    display:block;
    position:fixed;
    z-index: 200;
    left:82%;
    right:0;
    top:0;
}
li.act{
    background-color:#998675;
    border-radius: 5%;
}
#icon{
    color:white;
}
.sidebar{
    transition: all .2s linear;
    position:fixed;
    left:0;
    top:54px;
    background-color: black;
    z-index: 100;
    width:50%;
    transform:translateX(-101%);
    height: 100vh;
}
.sidebar.active{
    top:54px;
    transform:translateX(0%);
    padding:30px 30px;
    width:50%;
    height: 100vh;
}
button{
    background-color: transparent;
    border:none;
    padding:15px 15px;
}
.navb{
    margin:auto;
    height: auto;
    max-width:100%;
    min-width: 50%;
    min-height: 50px;
    display:block;
    justify-content: center;
    background-color: black;
    margin-top: 0;
    padding-top:0px;
    z-index: 99;
    position: relative;
    transition: all .1s linear;
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
ul{
    list-style-type: none;
    text-align: center;
    width:100%;
    padding:20px 20px;
}
li{
    text-align: center;
    padding-bottom: 2%;
    cursor:pointer;
    font-size: 18px;
    font-family: Raleway;
    color:white;
    margin-left:1%;
    margin-right: 1%;
    transition: all .1s linear;
}
</style>