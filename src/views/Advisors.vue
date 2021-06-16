<template>
    <Myheader />
    <main>
        <h2>{{subtitle}}</h2>
            <AdOne />
            <hr>
            <AdTwo />
            <hr>
            <AdThree />
            <hr>
            <AdFour />
            <hr>
            <AdFive />
            <hr>
            <AdSix />
            <hr>
            <AdSeven />
            <hr>
            <AdEight />
    </main>
    <section>
        <img :alt="description" v-bind:src="globe">
        <Paises />
    </section>
    <Myfooter />
<!-- </div> -->

</template>

<script>
import Myheader from '@/components/Myheader.vue';
import Myfooter from '@/components/Myfooter.vue';
import Paises from '@/components/Paises.vue';
import AdOne from '@/components/AdOne.vue';
import AdTwo from '@/components/AdTwo.vue';
import AdThree from '@/components/AdThree.vue';
import AdFour from '@/components/AdFour.vue';
import AdFive from '@/components/AdFive.vue';
import AdSix from '@/components/AdSix.vue';
import AdSeven from '@/components/AdSeven.vue';
import AdEight from '@/components/AdEight.vue';


export default {
    name: 'App',
    components: {
        Myheader,
        Myfooter,
        Paises,
        AdOne,
        AdTwo,
        AdThree,
        AdFour,
        AdFive,
        AdSix,
        AdSeven,
        AdEight
    },
    data(){
        return {
            subtitle: 'New Members of Travel Advisor',
            lista: [],
            name: '',
            globe: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rotating_globe.gif",
            description: 'globe rotating'
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../css/_color.palette.scss";
@import "../css/_fonts.scss";
@import "../css/_grid.scss";
@import "../css/_media.queries.scss";
@import "../css/_responsive.layouts.scss";
@import "../css/_units.scss";


* ,
body,
html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

main { 
    background: $advisor-main-bg-color;
    background: $advisor-main-bg-linear;
    width: 100%;
    margin: 0 auto;
    padding-bottom: $xs-rem;
}

h2 {
    font-family: $quotes-font;
    color: $white;
    text-shadow: $xxs-pxl $xxs-pxl $xs-pxl $shadow-logo;
    padding: $s-rem 0;
    letter-spacing: $xxs-rem;
    background: $advisor-h2-bg-linear;
    transition: all .3s ease;
    &:hover {
        text-shadow: $xs-pxl $xs-pxl $xxs-pxl $advisor-main-bg-color;
    }
}

.members {
    display: flex;
    flex-direction: column;
}

img {
    width: 75%; 
    margin-left: auto; 
    margin-right: auto; 
    margin-top: $xs-rem; 
    margin-bottom: $xs-rem;
    @include advisors-img-responsive;
}

section {
    background: $advisor-section-bg-color;
    background: $advisor-section-bg-linear;
    width: 100%;
    margin: 0 auto;
    padding-bottom: $xs-rem;
}

</style>