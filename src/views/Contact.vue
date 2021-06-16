<template>
    <Myheader />
<div class="contact-bg">
    <h3 id="print"></h3>
    <h2>{{cont}}</h2>
    <form @submit.prevent="submitForm">
        <div class="form-content">
            <label for="name">{{fName}}</label>
            <input 
                type="text" 
                id="name" 
                v-model.trim.lazy="formData.firstName"
                v-on:keypress="isLetter($event)"
                pattern="[a-zA-Z]+"
                placeholder="First Name"
                required
            />
        </div>
        <div class="form-content">
            <label for="surname">{{lName}}</label>
            <input 
                type="text" 
                id="surname" 
                v-model.trim="formData.lastName"
                v-on:keypress="isLetter($event)"
                pattern="[a-zA-Z]+"
                placeholder="Last Name"
                required 
            />
        </div>
        <div class="form-content">
            <label for="email">{{e}}</label>
            <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="Email Address" 
                required
            />
        </div>
        <div class="form-content">
            <label for="contact">{{cont}}</label>
            <textarea type="text" id="contact" v-model="formData.contact" placeholder="Let us know something..."/>
        </div>
        <div class="form-content">
            <button>Submit</button>
        </div>
    </form>
</div>
    <Myfooter />
</template>

<script>
import Myheader from '@/components/Myheader.vue';
import Myfooter from '@/components/Myfooter.vue';

export default {
    name: 'Contact',
    components: {
        Myheader,
        Myfooter
    },
    data() {
        return {
            fName: 'First Name',
            lName: 'Last Name',
            cont: 'Contact',
            e: 'Email',
            formData: {
                firstName: '',
                lastName: '',
                email:'',
                contact:'',
            }
        }
    },
    methods : {
        isLetter(letter) {
            let character = String.fromCharCode(letter.keyCode); 
            if(/^[A-Za-z]+$/.test(character)) return true; 
            else letter.preventDefault();
        },
        submitForm() {
            console.log('Form data', this.formData)
            document.getElementById('print').innerHTML = ('Congratulations') + ' ' + (this.formData.firstName) + ('!') + ("<br>") + ("Your form has been successfully submitted");
        }
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

*,
html,
body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-bg {
    @include contact-bg;
    padding-top: $xs-rem;
    padding-bottom: $vi-rem;
}

#print {
    margin: $xl-rem auto;
    width: 40%;
}

h2 {
    color: $white;
    font-family: $quotes-font;
    letter-spacing: $xxs-rem;
    text-shadow: $xxs-pxl $xxs-pxl $xs-pxl $pinterest;
    transition: all .3s ease;
    &:hover {
        text-shadow: $s-pxl $xs-pxl $xxs-pxl $shadow-logo;
    }
}

h3 {
    font-family: $p-font;
    color: $white;
    letter-spacing: $xxxs-rem;
}

form {
    backdrop-filter: invert(.10) blur(6px); 
    border-radius: $s-pxl;
    margin: $xs-rem;
    display: flex;
    flex-direction: column;
    align-items: center;  
    width: 50%;
    @include contact-form-responsive;
}

.form-content {
    width: 100%;
    margin: $xs-rem 0;
    display: flex;
    flex-direction: column;
}

label {
    color: $platinum;
    margin: $xs-rem 0;
    font-family: $btn-font;
    text-shadow: $xxs-pxl $xxs-pxl $xs-pxl $black;
    transition: all 0.4s ease-in-out;
    &:hover {
        letter-spacing: $xxxxs-rem;
    }
}

textarea {     
    width: 75%;
    border: $xxs-pxl inset #ddd;
    font-family: $p-font;
    line-height: $m-rem;
    align-self: center;
    border-radius: $s-pxl;
    outline: 0;
    transition: .2s;
    &:focus {
        border: $xs-pxl solid $max-blue;
        }
    @include contact-txtarea-responsive;
}

input {
    width: 75%;
    align-self: center;
    border: $xxs-pxl inset #ddd;
    font-family: $p-font;
    line-height: $m-rem;
    border-radius: $s-pxl;
    outline: 0;
    transition: .2s;
    &:focus {
        border: $xs-pxl solid $max-blue;
        }
    @include contact-input-responsive; 
}

button {
    font-family: $btn-font;
    color: $white;
    padding: $btn-show-padding;
    border: $last-positive-rem-value solid $white;
    border-radius: $m-pxl;
    font-weight: bold;
    width: 55%;
    align-self: center;
    background-color: transparent;
    transition: all 0.4s ease-in-out;
    &:hover {
        letter-spacing: $xxxxs-rem;
        color: $facebook;
        background: $white;
    }
    @include contact-submit-btn-responsive;
}

</style>