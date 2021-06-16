<template>
<div class="container">
  <div v-if="isOkay" class="btn-cnt">  
    <button @click="showCountries" type="submit" class="show" id="countries">Show Me</button>
    <span v-if="wannaKnow">
      <div class="countries" v-for="item in list" :key="item.name">
        <p class="paises">{{ item.name }}</p>
      </div>
    </span>
  </div>  
  <div v-else>
    <button @click="readyToKnow" type="submit" class="show" id="countries">Learn More</button>
  </div>
</div>

</template>
<script>
export default {
  name: 'Paises',
    data(){
      return {
        list: [],
        name: '',
        wannaKnow: false,
        isOkay: false,
      }
    },
    mounted() {
      console.log("test mounted API")
      fetch('https://travelbriefing.org/countries.json')
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
          this.list = json
        })
        .catch(err => {
          console.log("ERROR ", err)
          this.list =[{titulo: "placeholder"}]
        })
    },
    methods : {
      showCountries() { 
        this.wannaKnow = !this.wannaKnow
      },
      readyToKnow() { 
        this.isOkay = !this.isOkay;
      },
    }
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
  margin: 0;
  align-items: center;
}

.countries {
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  font-family: $nav-list-font;
  transition: all .2s ease-in-out;
  &:hover {
    letter-spacing: $xxxxs-rem;
    word-spacing: $xxs-rem;
  }
}

p.paises {
  font-family: $p-font;
  font-size: $s-font;
  color: $white;
  text-shadow: $xxxs-pxl $xxxs-pxl $xs-pxl $max-blue;
  width: 90%;
  margin: 0; 
  padding: $xxs-rem 0;
}

.btn-cnt {
  margin: $xs-rem;
  padding: $xxs-rem;
}

.show {
  padding: $btn-show-padding;
  border: $last-positive-rem-value solid $white;
  margin: $xxs-rem;
  border-radius: $s-pxl;
  font-weight: bold;
  color: $white;
  font-family: $btn-font;
  background-color: transparent;
  transition: all 0.4s ease-in-out;
  &:hover {
    letter-spacing: $xxxxs-rem;
    color: $shadow-logo;
    background: $white;
  }
}

</style>