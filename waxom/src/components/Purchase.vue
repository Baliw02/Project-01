<template>
    <div v-once class="purchase-box">
        <div class="left">
            <div class="text-purchase">
                <h1 id="purchase-title"><span id="sec-color">Waxom</span> Multipurpose WordPress Theme</h1>
                <p id="purchase-content">Don't Forget to Rate the Template. Thanks so much!</p>
            </div>
        </div>
        <div class="right">
            <div id="button-purchase-box">
                <button id="purchase-button">Purchase Now</button>
            </div>    
        </div>        
    </div>
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>
@import './design.scss';

#button-purchase-box{
    padding: 20px 20px;
}
.purchase-box{
    min-height: 151px;
    background: linear-gradient(90deg, rgba(32,4,4,1) 0%, rgba(88,49,2,1) 86%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media only screen and(max-width:711px){
        justify-content: center;
    }
    .left{
        padding-left:20%;
        flex:50%;
        text-align: left;
        @media only screen and(max-width:711px){
            justify-content: center;
            padding:5px 5px;
            text-align: left;
            flex:100%;
        }
        .text-purchase{
            padding: 20px 20px;
            #purchase-title{
                color:white;
                font-size: 28px;
            }

            #purchase-content{
                font-size: $medium_font_size;
                text-align: left;
                color:$cream_font_color;
                margin-bottom:0;
            }
            #purchase-title, #purchase-content, #sec-color{
                font-family: $primary_font;
                padding-top:1%;
                opacity:0.8;
            }

        }
    }
    .right{
        text-align: center;
        flex:50%;
        #purchase-button{
            padding:2% 2%;
            font-family: $primary_font;
            font-weight: 700;
            text-transform: uppercase;
            background-color: $dark_cream_bg_color;
            color:white;
            border:none;
            cursor: pointer;
            border-radius: 5%;
            transition: $transition_full;

            &:hover{
                background-color: black;
            }
        }
    }
}
// #sec-color{
//     color:$cream_font_color;
// }


</style>

