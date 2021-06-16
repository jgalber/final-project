
<template>
   <main class="container">
    <div v-for="dat in adlist" :key="dat">
        <h3 class="h3">{{dat.first_name }} {{dat.last_name}}</h3>
        <img class="img" :src="dat.avatar" :alt="imgDescription" >
        <p class="email">{{dat.email}}</p>  
    </div>
    <section class="section">
        <p class="section__bio"> <span class="section__bio--span">Bio:</span> {{bio}}</p>
    </section>
    <article class="article">
        <p class="article__info"> <span class="article__info--span">Languages: </span> {{languages}}</p>
        <p class="article__info"> <span class="article__info--span">Destinations: </span> {{destinations}}</p>
    </article>
    </main>
</template>

<script>
export default {
    name: 'Advisors',
    data(){
        return {
            adlist: [],
            id: '',
            first_name: '',
            last_name: '',
            avatar: '',
            email : '', 
            bio: "My name is Janet, I'm 29 years old, born and raised in Boston, but currently living in Antwerp, Belgium. The reason of why I am living in the most boring country in the world? Sarcastically, it is not boring at all. The city where I live is very vibrant and famous on fashion, chocolates, and diamonds. I am studying diamond design and it is very hard and not affordable for every pocket. Also, I can proudly share my experience as a fashion designer in the last runway fashion week in Antwerp. Well, all about me is fashion and design but this concept can be translated into the travel industry, I can provide you the best advanced seasonal fashion runways in all the world. Then, I can guide you through Belgium, more in the Flanders area and the Netherlands. In conclusion, if you love french fries, chocolates and a tour of the hidden gems in Antwerp, let me know when you are ready. Cheers!!",
            languages: "English, Flemish or southern Dutch, German, and French.",
            destinations: "a 100% Benelux area tour guide.",
            imgDescription: "Janet Weaver, travel advisor agent"
        }
    },
  
    mounted() {
        console.log("users API TESTING")
        fetch('https://reqres.in/api/users/2')
        .then(response => {
            console.log(response)
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Request failed with")
            }
        })
        .then((json) => {
            console.log(json)
            this.adlist = json
        })
        .catch(err => {
            console.log("ERROR ", err)
            this.adlist =[{titulo: "placeholder"}]
        })
    },
}
</script>
<style lang="scss" scoped>

@import "../css/_base.normalize.scss";
@import "../css/_color.palette.scss";
@import "../css/_fonts.scss";
@import "../css/_grid.scss";
@import "../css/_media.queries.scss";
@import "../css/_responsive.layouts.scss";
@import "../css/_units.scss";


.container {
    display: flex;
    flex-direction: column;
    @include advisor-container-responsive;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-bottom: 0;
    @include div-no-class;
}

div:last-of-type{
    display:none;
}

.img {
    width: 45%;
    clip-path: polygon(0 0, 100% 0, 100% 92%, 4% 100%);
    transition: filter .90s, width .80s ease-in-out;
    &:hover {
        filter: grayscale(100%) contrast(120%);
        width: 50%;
    }
    @include advisor2-img-responsive;
}

.h3 {
    font-family: $nav-list-font;
    color: $platinum;
    transition: all .2s ease-out;
    &:hover {
        text-shadow: $neg-three-px $xs-pxl $vii-pxl $instagram;
    }  
}

.email {
    font-family: $small-ital-font;
    color: $platinum;
    margin-bottom: 0;
}

.section {
    @include advisor-section-responsive;

    &__bio {
        font-family: $p-font;
        margin: $s-rem $m-rem;
        line-height: $s-rem;
        color: $white;
        letter-spacing: $xxxxs-rem;
        text-align: initial;
        @include ad-section-bio-responsive;
        &--span {
            font-weight: bold;
            color: $white;
            font-family: $nav-list-font;
            text-shadow: $xxxs-pxl $xxxs-pxl $xs-pxl $black;
            transition: all .5s ease-in-out;
            &:hover {
                color:$white;
                text-shadow: $xxxs-pxl $xxxs-pxl $xs-pxl $classic-yellow;
            }
        }
    }  
}

.article {
    @include advisor-article-responsive; 
    &__info {
        font-family: $p-font;
        margin: $s-rem $m-rem;
        line-height: $s-rem;
        color: $white;
        letter-spacing: $xxxxs-rem;
        text-align: initial;
        &--span {
            font-weight: bold;
            color: $white;
            font-family: $nav-list-font;
            text-shadow: $xxxs-pxl $xxxs-pxl $xs-pxl $black;
             &:hover {
                color:$white;
                text-shadow: $xxxs-pxl $xxxs-pxl $xs-pxl $classic-yellow;
            }
        }
    }
    &__info:first-of-type {
        margin-top: 0;
    }
}
</style>
