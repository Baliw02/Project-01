<template>
  <div id="app">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <sidebar v-if="windowWidth <= 1040"></sidebar>
    <stickyheader v-if="windowWidth > 1040"></stickyheader>  
    <first></first>
    <boxes></boxes>
    <galleries></galleries>
    <purchase></purchase>
    <projectshow></projectshow>
    <video-c></video-c>
    <mobile></mobile>
    <counter></counter>
    <posts></posts>
    <partners></partners>
    <foo-ter></foo-ter>
<!--    <feedback></feedback> -->
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import FirstBack from './components/FirstBack'
import Boxes from './components/BoxesFromapi'
import ThreeGallery from './components/ThreeGallerySection'
import Purchase from './components/Purchase'
import ProjectShow from './components/Projects'
import Video from './components/Video'
import Mobile from './components/Mobile'
import Counter from './components/Counter'
import Posts from './components/Posts'
import Partner from './components/Partners'
import Footer from './components/Footer'
// import Form from './components/Form'

export default {
  name: 'App',
  components: {
    'stickyheader': Header,
    'first': FirstBack,
    'boxes': Boxes,
    'galleries': ThreeGallery,
    'purchase': Purchase,
    'projectshow': ProjectShow,
    'video-c': Video,
    'mobile': Mobile,
    'counter': Counter,
    'posts': Posts,
    'partners': Partner,
    'foo-ter': Footer,
    'sidebar': Sidebar,
    // 'feedback': Form
},
  data(){
    return{
      windowWidth: 0
    }
  },
  mounted(){
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
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
