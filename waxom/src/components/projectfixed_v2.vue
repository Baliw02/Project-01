<template>
    <div class="project-section">
        <div class="project-row">
            <div v-for="project in filterProjects" :key="project + project.title + project.content" class="project-box">
                <h2>{{project.title}}</h2>
            </div>
        </div>
        <button @click="showArray()">Show</button>
        {{s}}            
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Projects',
    methods:{
    },
    data(){
        return{
            filtered_arr: [],
            unfiltered_arr: [],
            active_category: 'photo',
            limit: 4,
            indexes:[]
        }
    },
    created(){
    axios.get('/api/projects')
    .then(response => {
        this.unfiltered_arr = response.data
        })

    },
    computed:{
        filterProjects:function(){
            return this.unfiltered_arr.filter((projects) => {
                while(this.filtered_arr.length < 6){
                this.filtered_arr = projects.category.match(this.active_category)
                console.log(this.limit)
                this.limit++                
                return this.filtered_arr
            }
            }
        )}
    },

}
</script>

<style lang="scss" scoped>



</style>