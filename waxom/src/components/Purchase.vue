<template>
    <div class="purchase-box">
        <div class="left">
            <div class="text">
                <h1><span>Waxom</span> Multipurpose WordPress Theme</h1>
                <p>Don't Forget to Rate the Template. Thanks so much!</p>
            </div>
        </div>
        <div class="right">
            <div id="button">
                <button>Purchase Now</button>
            </div>    
        </div>        
    </div>
</template>

<script>
export default {
    name:'Purchase'
}
</script>


<style scoped>
.text{
    padding: 20px 20px;
}
#button{
    padding: 20px 20px;
}
.purchase-box{
    min-height: 151px;
    background: linear-gradient(90deg, rgba(66,33,38,1) 12%, rgba(82,41,39,1) 45%, rgba(82,41,39,1) 100%, rgba(255,255,255,1) 100%);;
    display: flex;
}
.left{
    flex:50%;
    padding-left:10%;
}
.right{
    text-align: right;
    flex:50%;
    padding:25px 25px;
}
button{
    padding:2% 2%;
    font-family: Raleway;
    font-weight: 700;
    text-transform: uppercase;
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
h1{
    color:white;
    font-size: 28px;
}
span{
    color:#C7B299;
}
p{
    font-size: 16px;
    text-align: left;
    color:rgba(199, 178, 153, 80%);
}
h1, p, span{
    font-family: Raleway;
    padding-top:1%;
    opacity:0.8;
}
@media only screen and (max-width: 650px) {
    .purchase-box{
        flex-wrap: wrap;
        margin-top:25%;
        margin-bottom:25%;
    }
    .left{
        padding:0;
        flex:100%;
        text-align: center;
    }
    .right{
        align-items: center;
        justify-content: center;
        text-align: center;
        flex:100%;
        padding:0;
    }
    .button{
        padding:0;
    }
}

</style>

