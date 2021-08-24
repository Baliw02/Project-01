<template>
<div class="class-for-button">
    <button id="show-full-form" v-on:click="showForm, show = true">	<font-awesome-icon :icon="['fas', 'inbox']" /></button>
    <div v-show="show" class="full-form-box">
        <div class="form-box">
            
            <h1>Van valami kérdésed?</h1>
            <div class="inputs">
                <ul>
                    <form>
                        <li><input @click="error_class = false, error_email = false" :class="{errorclass: error_class || error_email}" type="email" id="email"  v-model="email" placeholder="Név/Email " @keyup.enter="sendEmail(), getResponse(), showmess = true" required></li>
                        <li><textarea @click="error_class = false, error_text = false" :class="{errorclass: error_class || error_text}" rows="5" cols="30" type="text" v-model="text" placeholder="Vélemény/Kérdés " required></textarea></li>
                        <button type="submit" value="Submit" id="send-button" v-on:click="sendEmail(), getResponse(), showmess = true">Kuldes</button>
                    </form>
                </ul>
            </div>
            <div v-if="activator">
            </div>
            <div v-for="email in feedback_data.emails" :key="email + email.content + email.title" class="push-notification">
                <div v-if="showmess" class="noti-box">
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
            resposemess: '',
            max: [],
            show: false,
            showmess: true,
            feedback_data:[],
            error_class: false,
            error_email: false,
            error_text: false           
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
            var emailCheck = re.test(this.email)
            var textCheck = this.text.length > 10
            if(emailCheck && textCheck){
            axios.post('/api/emails/', {email: this.email, content:this.text})
            .then(response => {  
                console.log(response.data)
                this.activator = true
                this.feedback_data = response.data
                this.responsemess = "Uzeneted elkuldve."
                console.log(this.responsemess)
                this.showmess = true
                this.text = null
                this.email = null
                this.error_email = false 
                this.error_text = false
            })
            .catch(function(err){
                console.log(err)
            })
            }
            else if(!emailCheck && textCheck){
                this.responsemess = "Helyes emailt irj be."
                this.error_email = true
            }
            else if(!textCheck && emailCheck){
                this.responsemess = 'Minimum 10 karaktert kell begepelni.'
                this.error_text = true
            }
            else if(!emailCheck && !textCheck){
                this.responsemess = 'Helytelen email, es keves karakter a leirasban.'
                this.error_class = true
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
}
            

</script>
<style lang="scss" scoped>
@import './design.scss';

#show-full-form{
    width: 65px;
    height: 65px;
    border-radius: 50%;
    z-index: 68;
    font-family: Raleway;
    font-size: $larger_font_size + 3;
    border:none;
    background-color: $cream_font_color;
    color:white;
    font-weight: 500;
    right:0;
    bottom: 5%;
    margin:auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    position:fixed;
}
.full-form-box{
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    transition: $transition_full;
    right:0;
    bottom: 12%;
    background-color: white;
    width:30%;
    margin:auto;
    text-align: center;
    padding:50px 50px;
    position:fixed;
    z-index: 69;
    @media only screen and (max-width: 1100px){
        width:50%;
    }
    @media only screen and (max-width: 650px){
        width:80%;
    }
    @media only screen and (max-width: 450px){
        width:100%;
    }
}
.full-form-box > .form-box > h1{
    position:absolute;
    font-size: $larger_font_size;
    padding: 10px 10px;
    width:100%;
    left:0;
    top:15%;
    color: $cream_font_color;
}
.inputs{
    border-radius: 30%;
    padding-top: 100px;
    justify-content: center;
    text-align: center;
    font-family: Raleway;
    margin:auto;
    display:block;
}
.inputs > ul{
    list-style-type: none;
    padding:0;
}
.inputs > ul > li{
    padding: 15px 15px;
}
input{
    border: 2px solid transparent;
    height: 60px;
    background-color: transparent;
    border:none;
    min-width:35%;
    margin:auto;
    border-radius: 0;
    border-bottom: 2px solid $cream_font_color;
    transition: $transition_full;
}
input[type="text"]{
    font-size: $medium_font_size ;
}
input:focus{
    outline: none;
    background-color: rgba(224, 205, 184, 0.3);
}
.errorclass{
    border: 2px solid red;
}
textarea:focus{
    outline:none !important;
}
textarea{
    border: 2px solid transparent;
    width:100%;
    max-width: 100%;
    color:black;
    outline:none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid $cream-font-color;
    margin:auto;
    background-color: transparent;
    transition: $transition_full;
}
textarea[type="text"]{
    font-size: $smaller_font_size ;
}
textarea:focus{
    background-color: rgba(224, 205, 184, 0.3);
}
::placeholder{
    border:none;
    font-family: $primary_font;
    color: $cream_font_color;
    font-size: $smaller_font_size + 2;
    opacity: 1;
    text-align: center;
}
:-ms-input-placeholder{
    font-family: $primary_font;
    color:white;
    font-size: $smaller_font_size;
}
.push-notification{
    display:block;
    position:absolute;
    background-color: black;
    top:60%;
    width:auto;
    max-width: 80%;
    left:0;
    right:0;
    margin:auto;
    z-index: 70;
}
.noti-box{
    padding: 50px 50px;
    z-index: 100;
}
#send-button{
    bottom: 2%;
    margin:auto;
    position:absolute;
    right:100px;
    font-family: $primary_font;
    border:none;
    background-color: white;
    padding:10px 10px;
    color:$cream_font_color;
    font-weight: 500;
}
#thanks-message{
    color:White;
}
#exit-noti{
    bottom: 2%;
    margin:auto;
    position:absolute;
    right:10px;
    font-family: $primary_font;
    border:none;
    background-color: white;
    padding:10px 10px;
    color:$cream_font_color;
    font-weight: 500;
    z-index: 30;
}
#exit-message{
    color:white;
    border: none;
    background-color: black;
    font-size: $medium_font_size;
    font-family: $primary_font;
}
#exit-message, #exit-noti, #send-button{
    transition: $transition_full;
}   
#exit-message:hover, #exit-noti:hover, #send-button:hover{
    background-color: black;
    color:white;
}
</style>

