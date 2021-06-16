<template>
   <main class="container">
    <div v-for="dat in adlist" :key="dat">
        <h3 class="h3">{{dat.first_name}} {{ dat.last_name}}</h3>
        <img class="img" :src="dat.avatar" :alt="imgDescription" />
        <p class="email">{{ dat.email }}</p>  
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
            bio: "My name is Evergreen Holt but my friends call me 'Eve' and I have spent over 35 years in tourist industry. My father worked for Boeing when I was growing up and took us to so many wonderful places around the world which ignited my passion for travel. Throughout my experience, I opened my own travel agency early 90s, and I’m grateful for the privilege to have met many people who have passion in this industry. I love sharing my extensive knowledge to travelers like you, as a possible client to provide the perfect vacation. My most recent travels include visits to Thailand, Bali, Sweden, Australia, a month residence in Paris, and a cruise to Antarctica and South Georgia. I would love to make your travel dreams come true..",
            languages: "English, French, a bit of German, and basic level of Chinese",
            destinations: "My most recent travels include visits to Thailand, Bali, Sweden, Australia, a month residence in Paris, and a cruise to Antarctica and South Georgia.",
            imgDescription: 'Eve Holt, travel advisor agent'
        }           
    },
  
    mounted() {
        console.log("users API TESTING")
        fetch('https://reqres.in/api/users/4')
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
    @include advisor-img-responsive; 
}

.h3 {
    font-family: $nav-list-font;
    color: $platinum;
    transition: all .2s ease-out;
    &:hover {
        text-shadow: $neg-three-px $xs-pxl $vii-pxl $anchor-temp;
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
            &:hover {
                color: $white;
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