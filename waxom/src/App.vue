<template>
  <div id="app">
    <Navbar v-if="1040 < width"></Navbar>  
    <Sidebar v-if="1040 >= width"></Sidebar>
    <FirstBack></FirstBack>
    <Boxes></Boxes>
    <ThreeGallery></ThreeGallery>
    <Purchase></Purchase>
    <Projects></Projects>
    <VideoSec></VideoSec>
    <Mobile></Mobile>
    <Counter></Counter>
    <Posts></Posts>
    <Partner></Partner>
    <News></News>
<!--    <feedback></feedback> -->
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import FirstBack from './components/FirstBack'
import Boxes from './components/BoxesFromapi'
import ThreeGallery from './components/ThreeGallerySection'
import Purchase from './components/Purchase'
import Projects from './components/Projects_fixed'
//import ProjectShow from './components/Projects'
import VideoSec from './components/VideoSec'
import Mobile from './components/Mobile'
import Counter from './components/Counter'
import Posts from './components/Posts'
import Partner from './components/Partners'
import News from './components/News'
// import Form from './components/Form'

export default {
  name: 'App',
  components: {
    Navbar,
    FirstBack,
    Boxes,
    ThreeGallery,
    Purchase,
    Projects,
    //'projectshow': ProjectShow,
    VideoSec,
    Mobile,
    Counter,
    Posts,
    Partner,
    News,
    Sidebar,
    // 'feedback': Form
},
  data(){
    return{
        width: 0,
        onloadWidth: 0
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    window.onload = function(){
      this.onloadWidth = window.innerWidth;
    }
    },
  methods:{
    handleResize(){
      this.width = window.innerWidth
    },
  },
  mounted(){
    window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import './components/design.scss';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0;
}
html,body {
    margin:0;
    padding:0;
    overflow-x:hidden;
}
</style>
