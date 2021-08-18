<template>
    <div class="full-section-projects">
        <div class="text-project">
            <h1 id="projects-title"> Our Latest Projects.</h1>
            <p id="comm">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.</p>
        </div>
        <div class="projects-buttons" id="switcher-buttons">
            <ul id="projects-buttons-menu">
                <li id="projects-menu-items" v-for="(item, i) in buttons" :key="item.titles + i"><button id="list" v-on:click="setActive(i), activated = true, limit = 6" :class="{active: i === active}">{{item.titles}}</button></li>
            </ul>
        </div>
        <div class="rows">
        <div v-for="(project_box, j) in activeBoxes" :key="project_box.image + project_box.title + project_box.content + j" :class="{boxes, activatedc: j < limit, disabled: j >= limit}">
            <img id="projects-image" :src="project_box.image">
            <div class="content">
                <h2 id="projects-box-title">{{project_box.title}}</h2>
                <p id="p-cont">{{project_box.Content}}</p>
            </div>
            <div v-if="j == 3" class="break"></div>
        </div>
        </div>
        <button v-if="show" id="load-more" v-on:click="limit += 6">Load more</button>
    </div>
</template>
<style scoped>


</style>
<script>
import axios from 'axios'

export default {
    name:'Projects',
    data(){
        return{
            show: true,
            limit: 6,
            active:0,
            len: 0,
            boxes: [],
            collector: 0,
            switcher: [],
            buttons:[
                {titles: 'All', cat: 'all'},
                {titles: 'Web Design', cat: 'webdesign'},
                {titles: 'Mobile App', cat: 'mobile'},
                {titles: 'Illustration', cat: 'illustration'},
                {titles: 'Photography', cat: 'photo'}
            ],
        }
    },
    created(){
        axios.get('/api/projects')
        .then(response => {
            console.log(response.data)
            this.boxes = response.data

        })
    },
    methods:{
        setActive: function(i){
            this.active = i;
            this.switcher = this.buttons[i]
            },
    },
    computed:{
        activeBoxes: function(){
            return this.boxes.filter((boxes) => {
                if(this.switcher.cat == '' || this.switcher.cat == 'all') {
                    for(let i = 0; i < this.limiter; i++){
                        this.switcher.cat = [ 'webdesign', 'mobile', 'illustration', 'photo']
                        this.switcher.cat = this.switcher.cat[i]
                    }
                }
                for(let j = 0; j < this.limit; j++){
                    console.log(j)
                    return boxes.category.match(this.switcher.cat)
                }
            })
            }
    }
}
</script>