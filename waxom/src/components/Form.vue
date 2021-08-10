<template>
    <div class="full">
        <input type="text" v-model="email" placeholder="Email: " @keyup.enter="sendEmail()">
        <input type="text" v-model="text" placeholder="Text: ">
        <button v-on:click="sendEmail">Kuldes</button>
        <div v-if="activator">
            <p>Köszönjük a visszajelzést: {{resdatas}}</p>
        </div>
    </div>
</template>

<style scoped>
.full{
    width:100%;
    text-align: center;    
}
</style>


<script>
import axios from 'axios'

export default {
    name:'Form',
    data(){
        return{
            email: '',
            text: '',
            activator: false,
            resdatas: []
        }
    },
    methods:{
        sendEmail:function(){
        axios.post('api/emails', {text: this.text, email:this.email})
        .then(response => { 
            console.log(response.data)
            this.activator = true
            this.resdatas = response.data
            })
        },
    },
}
            

</script>