<template>
<div class="header" :class="{changed : scrollPosition >= 80}">
    <ul id="menu-ul">
        <li id="menu-items"><img src="./icons_etc/logo.png" alt=""></li>
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
    name: 'Navbar',
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

