<template>
<div class="header" :class="{changed : scrollPosition >= 5}">
        <ul id="menu-ul">
            <li id="menu-items"><img id="menu-logo" src="./icons_etc/logo.png" alt="" ></li>
            <li id="menu-items">Home</li>
            <li id="menu-items">About Me</li>
            <li id="menu-items">Portfolio</li>
            <li id="menu-items">Features</li>
            <li id="menu-items">Blog</li>
            <li id="menu-items">Pricing</li>
            <li id="menu-items">Shortcodes</li>
            <li id="menu-items">Contact</li>
            <li id="menu-items"><font-awesome-icon class="icons" :icon="['fas', 'shopping-bag']" /></li>
            <li id="menu-items"><font-awesome-icon class="icons" id='search-icon' :icon="['fas', 'search']" /></li>
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

.header.changed{
    position: fixed;
    background-color: black;
    width:100%;
}

.header{
    margin: $centered_margin;
    height: auto;
    max-width: 100%;
    min-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    margin-top: 0;
    padding-top: 0px;
    z-index: 99;
    position:relative;
    transition: $transition_full;
    min-height: 80px;

    #menu-ul{
        padding:15px 15px;
        padding-bottom:0;
        text-align: center;
        width: 100%;

        #menu-logo{
            width:8%;
        }
        #menu-items{
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
            font-size: $smaller_font_size + 2;
            transition: $transition_full;
            margin-inline: -0.6%;
            &:hover{
                color:$cream_font_color;
            }
        }
        #search-icon{
            transition: $transition_full;
        }
    }
}
</style>
