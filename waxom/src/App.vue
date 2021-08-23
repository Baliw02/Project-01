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
    <Form></Form>
    <News></News>
    <Fouter></Fouter>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import FirstBack from './components/FirstBack'
import Boxes from './components/BoxesFromapi'
import Purchase from './components/Purchase'
import VideoSec from './components/VideoSec'
import Mobile from './components/Mobile'
import Partner from './components/Partners'
import News from './components/News'
import Fouter from './components/Footer'
import ThreeGallery from './components/ThreeGallerySection'
import Projects from './components/Projects_fixed'
import Form from './components/Form'
import Counter from './components/Counter'
import Posts from './components/Posts'

export default {
  name: 'App',
  components: {
    Navbar,
    FirstBack,
    Boxes,
    ThreeGallery,
    Purchase,
    VideoSec,
    Mobile,
    Counter,
    Posts,
    Partner,
    News,
    Sidebar,
    Fouter,
    Projects,
    Form
},
  data(){
    return{
        width: 0,
        onloadWidth: 0,
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
