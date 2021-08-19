<template>
<div class="class-for-button">
    <button id="show-full-form" v-on:click="showForm, show = true">	<font-awesome-icon :icon="['fas', 'inbox']" /></button>
    <div v-if="show" class="full-form-box">
        <div class="form-box">
            <h1>Van valami kérdésed?</h1>
            <div class="inputs">
            <ul>
            <li><input type="text" v-model="email" placeholder="Név/Email " @keyup.enter="sendEmail(), getResponse(), showmess = true"></li>
            <li><textarea rows="5" cols="30" type="text" v-model="text" placeholder="Vélemény/Kérdés "></textarea></li>
            </ul>
            </div>
            <button id="send-button" v-on:click="sendEmail(), getResponse(), showmess = true">Küldés</button>
            <div v-if="activator">
            </div>
            <div v-for="email in max.emails" :key="email + email.content + email.title" class="push-notification">
                <div v-if="email.id == max.emails.length && showmess" class="noti-box">
                    <h2 id="thanks-message">Kedves {{email.title}} visszajelzésed továbbitva lett!<br></h2>
                    <button v-on:click="showMessage" id="exit-message">Kilépés</button>
                </div>
            </div>
            <button v-on:click="hideMessage" id="exit-noti">Kilépés</button>
        </div>
    </div>
</div>
</template>


<script>
import axios from 'axios'

export default {
    data(){
        return{
            email: '',
            text: '',
            activator: false,
            max: [],
            show: false,
            showmess: true
        }
    },
    methods:{
        hideMessage:function(){
            if(this.show){
                this.show = false
            }
        },
        showForm:function(){
            if(this.show){
                this.show = false
            }
        },
        showMessage:function(){
            if(this.showmess){
                this.showmess = false
            }
        },
        sendEmail:function(){
        axios.post('/api/emails', {title: this.email, content:this.text})
        .then(response => { 
            console.log(response.data)
            this.activator = true
            })
        },
        getResponse:function(){
            axios.get('/api/emails')
            .then(response =>{
            this.max = response.data
            console.log(this.max)

            })
        }
    },
    created(){
        // axios.get('/api/errors').then(response => {
        //     if(this.email == '' || this.text == ''){
                
        //     }
        // })
    }
}
            

</script>
<style scoped>

</style>

