<template>
<div class="header" :class="{changed : scrollPosition >= 80}">
        <ul id="menu-ul">
            <li id="menu-items"><img id="menu-logo" src="./icons_etc/logo.png" alt="" style="width: 162px; height: 50px;"></li>
            <li id="menu-items">Home</li>
            <li id="menu-items">About Me</li>
            <li id="menu-items">Portfolio</li>
            <li id="menu-items">Features</li>
            <li id="menu-items">Blog</li>
            <li id="menu-items">Pricing</li>
            <li id="menu-items">Shortcodes</li>
            <li id="menu-items">Contact</li>
            <li id="menu-items"><img class="icons" src="./icons_etc/cart.png"></li>
            <li id="menu-items"><img class="icons" id="search-icon" src="./icons_etc/search.png" ></li>
        </ul>
</div>
</template>

<script>

export default {
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
<style lang="scss" scoped>
@import './design.scss';

#menu-logo{
    width:182px;
    height: 57px;
}
.header{
    margin: $centered_margin;
    height: auto;
    max-width: 100%;
    min-width: 50%;
    min-height: 100px;
    display: block;
    justify-content: center;
    background-color: transparent;
    margin-top: 0;
    padding-top: 0px;
    z-index: 99;
    position:relative;
    transition: $transition_full;
}
.changed{
    position: fixed;
    background-color: black;
    width:100%;
}
#menu-ul{
    padding:20px 20px;
    padding-bottom:0;
    text-align: center;
    width: 100%;
}
#menu-items{
    height: 57px;
    cursor:pointer;
    font-size: $smaller_font_size;
    font-family: $primary_font;
    color:$light_font_color;
    display:inline;
    margin-left: 1%;
    margin-right: 1%;
    transition: $transition_full;
}
#menu-items:hover{
    color:$dark_cream_font_color
}
.icons{
    margin-inline: -0.6%;
}
#search-icon{
    transition: $transition_full;
}
#search-icon:hover{
    $transform_deg: 90deg;
    transform:rotate($transform_deg);
}
</style>
