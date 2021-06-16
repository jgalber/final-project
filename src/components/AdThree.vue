<template>
   <main class="container">
    <div v-for="dat in adlist" :key="dat">
        <h3 class="h3">{{dat.first_name}} {{ dat.last_name}}</h3>
        <img class="img" :src="dat.avatar" :alt="imgDescription" >
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
            bio: "My name is Emma and my speciality is helping groups, because I am expertise tour guide. I worked in a lot of many places around the world, such as Louvre Museum, Prado Museum, and in the MoMa. But I have decided temporaly stopped working because I am now a mother, and my baby is the most lovely thing I have ever had in my life. And this is why I am here, to share knowledge. I learned about other members who have more experience on traveling, in my case as an advisor, I can provide all my knowledge of different ethnic and cultural things that you might be surprised. The clock is ticking, and the chance of plan a trip to visit such beautiful museums is just by one click. I am currently living in the beautiful California Coast.",
            languages: "English, French, Spanish, Chinese, Italian, Greek, Portuguese, and bit of German and Hebrew.",
            destinations: "France, Spain, Italy, Israel, Portugal, Greece.",
            imgDescription: "Emma Wong, travel advisor agent"
        }           
    },
  
    mounted() {
        console.log("users API TESTING")
        fetch('https://reqres.in/api/users/3')
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
                color: $white;
                text-shadow: $xxxs-pxl $xxxs-pxl $xs-pxl $classic-yellow;
            }
        }
    }
    &__info:first-of-type {
        margin-top: 0;
    }
}

</style>