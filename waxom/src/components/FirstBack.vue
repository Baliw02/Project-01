<template>
    <div class="background">
        <carousel :per-page="1" 
        :mouse-drag="false" 
        :centerMode="false" 
        :paginationPadding="3" 
        paginationPosition="bottom-overlay" 
        :paginationSize="10"
        paginationActiveColor="#ffffff"
        paginationColor="#998675"
        >
            <slide>
                <img src="./icons_etc/firstbg.jpg">
                <div class="text-on-image">
                    <p>Unique and Modern Design</p>
                    <h1>Portfolio PSD Template</h1>
                    <span>
                        Nam liber tempor cum soluta nobis eleifend option congue nihil 
                        
                        imperdiet doming id quod mazim placerat facer possim assum.
                    </span>
                    <button>Get Started</button>
                </div>                            
            </slide>
            <slide>
            </slide>
            <slide>
            </slide>
            <slide>
            </slide>
            <slide>
            </slide>
        </carousel>
    </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'


export default {
    components:{
    Carousel,
    Slide
    },
    name:'FirstBack'
}
</script>

<style scoped>
.background{
    position:relative;
    top:-160px;
}
button{
    font-family: Raleway;
    font-weight: 700;
    text-transform: uppercase;
    display:block;
    margin: auto;
    padding: 1.5% 1.5%;
    margin-top: 5%;
    background-color: #998675;
    color:white;
    border:none;
    cursor: pointer;
    border-radius: 5%;
    transition: all .2s linear;
}
button:hover{
    background-color: black;
}
img{
    object-fit: cover;
    object-position: center;
    z-index: 1;
    width:100%;
    max-width: 100%;
    min-height: 500px;
}
.text-on-image{
    text-align: center;
    margin: auto;
    display: block;
    position: absolute;
    z-index: 5;
    top:35%;
    bottom:15%;
    left:25vw;
    right:25vw;
}
p{
    color:white;
    font-size: 2.25rem;
}
h1{
    font-family: Raleway;
    font-weight: 800;
    color:white;
    font-size:52px;
}
span{
    text-align: center;
    color:white;
    font-family: Raleway;
    font-size: 16px;
}
@media only screen and (max-width: 1080px) {
    .text-on-image{
        top:35%;
    }
    h1{
        font-size: xx-large;
    }
    p{
        font-size: xx-large;
    }
    span{
        font-size: medium;
    }
}
@media only screen and(max-width: 960px) {
    .text-on-image{
        top: 2%;
        margin: 0;
    }

}


@media only screen and (max-width: 621px){
    img{
        min-height: 700px;
    }
    .text-on-image{
        top: 40%;
        margin: 0;
    }

}
@media only screen and (max-width: 414px) {
    .background{
        top:0;
    }
    img{
        min-height: 700px;
    }
    .text-on-image{
        top: 30%;
    }
    h1{
        margin:0;
        font-size:18px;
        width:100%;
        padding:0;
    }
    p{
        width:100%;
        font-size: 14px;
    }
    span{
        font-size: 12px;
    }
    button{
        margin-top: 13%;
        font-size: 12px;
        padding: 5px 5px;
    }
}
</style>