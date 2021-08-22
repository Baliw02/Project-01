<template>
<div class="class-for-button">
    <button id="show-full-form" v-on:click="showForm, show = true">	<font-awesome-icon :icon="['fas', 'inbox']" /></button>
    <div v-if="show" class="full-form-box">
        <div class="form-box">
            
            <h1>Van valami kérdésed?</h1>
            <div class="inputs">
                <ul>
                    <form>
                        <li><input type="email" id="email"  v-model="email" placeholder="Név/Email " @keyup.enter="sendEmail(), getResponse(), showmess = true" required minlength="3"></li>
                        <li><textarea rows="5" cols="30" type="text" v-model="text" placeholder="Vélemény/Kérdés "></textarea></li>
                        <button type="submit" value="Submit" id="send-button" v-on:click="sendEmail(), getResponse(), showmess = true">Kuldes</button>
                    </form>
                </ul>
            </div>
            <div v-if="activator">
            </div>
            <div v-for="email in feedback_data.email" :key="email + email.content + email.title" class="push-notification">
                <div v-if="feedback_data.emails.id == feedback_data.length && showmess" class="noti-box">
                    <h2 id="thanks-message">Kedves {{feedback_data.emails.email}} visszajelzésed továbbitva lett!<br></h2>
                    <button v-on:click="showMessage" id="exit-message">Kilépés</button>
                </div>
            </div>
            <button v-on:click="hideMessage" id="exit-noti">Kilépés</button>
        </div>
    </div>
</div>
</template>


<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import validator from 'email-validator'
// eslint-disable-next-line no-unused-vars
export default {
    data(){
        return{
            email: '',
            text: '',
            activator: false,
            max: [],
            show: false,
            showmess: true,
            feedback_data:[]
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
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(this.email)){
            axios.post('/api/emails/', {email: this.email, content:this.text})
            .then(response => {  
                console.log(response.data)
                this.activator = true
                this.feedback_data = response.data
                console.log(this.feedback_data.emails)
                })
            .catch(function(err){
                console.log(err)
            })
            }
            else{
                console.log("10 karakter a minimum")
            }
            
            
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

