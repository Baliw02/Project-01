<template>
<div class="header" :class="{changed : scrollPosition > 80}">
    <ul>
        <li><img src="./icons_etc/logo.png" alt=""></li>
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Features</li>
        <li>Blog</li>
        <li>Pricing</li>
        <li>Shortcodes</li>
        <li>Contact</li>
        <li><img class="icons" src="./icons_etc/cart.png"></li>
        <li><img class="icons" id="search" src="./icons_etc/search.png" ></li>
    </ul>
</div>
</template>

<script>

export default {
    name: 'Header',
    data(){
        return{
            scrollPosition: 0
        }
    },
    methods:{
        updateScroll(){
            this.scrollPosition = window.scrollY
        }
    },
    mounted(){
        window.addEventListener('scroll', this.updateScroll);
    }

}
  
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#search{
    transition: all 0.1s linear;
}
#search:hover{
    transform: rotate(90deg);
}

.header{
    margin:auto;
    height: auto;
    max-width:100%;
    min-width: 50%;
    min-height: 140px;
    display:block;
    justify-content: center;
    background-color: transparent;
    margin-top: 0;
    padding-top:20px;
    z-index: 99;
    position: relative;
    transition: all .1s linear;
}
.icons{
    margin-inline: -0.6%;
}
.changed{
    position: fixed;
    background-color: rgba(0,0,0,100%);
    width:100%;
}
ul{
    text-align: center;
    width:100%;
    padding:20px 20px;
}
li{
    cursor:pointer;
    font-size: 14px;
    font-family: Raleway;
    color:white;
    display:inline;
    margin-left:1%;
    margin-right: 1%;
    transition: all .1s linear;
}
li:hover{
    color:#998675;
}
</style>