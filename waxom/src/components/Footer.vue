<template>
    <div class="full-footer">
        <div class="left-footer">
            <ul>
                <li>Copyright 2015 Waxom</li>
                <li>|</li>
                <li id="privacy">Privacy Policy</li>
                <li>|</li>
                <li id="faq">FAQ</li>
                <li>|</li>
                <li id="support">Support</li>
            </ul>
        </div>
        <div class="right-footer">
            <ul>
                <li>Designed by <span id="erdsoft">Erdsoft</span></li>
                <li>Only on <span id="market">Envato Market</span></li>
            </ul>

        </div>
    </div>
</template>


<style lang="scss" scoped>
@import './design.scss';

.full-footer{
    font-family: $primary_font;
    background-color: black;
    display: flex;
    flex-wrap: wrap;
}
.left-footer, .right-footer{
    flex:50%;
    justify-content: center;
    text-align: center;
}

.full-footer > .right-footer > ul > li, .full-footer > .left-footer > ul > li{
    display:inline;
    color:#555555;
    font-size: $smaller_font_size - 1;
    margin-inline: 1%;
    padding: 5px 5px;
}
#brd{
    border-inline-end: 1px solid #555555;
}
#faq, #privacy, #support{
    transition: $transition_full;
}
#faq:hover, #privacy:hover, #support:hover{
    color:$cream_font_color;
}
.full-footer > .right-footer > ul, .full-footer > .left-footer > ul{
    padding:30px 30px;
    margin:0;
}
</style>