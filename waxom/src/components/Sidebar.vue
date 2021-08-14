<template>
<div class="sidebar-full">
    <div :class="{navb: true, changed: scrollPosition >= 30, bg: activator}">
        <button id="show-sidebar" v-on:click="activate()"><font-awesome-icon id='icon' :icon="['fas', 'bars']" /></button>
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
