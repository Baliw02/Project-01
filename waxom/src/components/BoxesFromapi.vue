<template>
    <div class="full-section-api">
        <div class="small-api-boxes" v-for="box in boxes" :key="box + box.image + box.title + box.content" >
            <img id="box-logo" :src="box.image">       
            <h1 id="box-title">{{box.title}}</h1>
            <p id="content">{{box.content}}</p>
            <p id="bottom"></p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"Boxes",
    data(){
        return{
            boxes: [],
            
        }
    },
    created(){
    axios.get('/api/boxes')
    .then(response => {
        console.log(response.data)
        this.boxes = response.data
    })
    }
}
</script>

<style scoped>

</style>