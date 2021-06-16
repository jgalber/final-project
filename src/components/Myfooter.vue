<template>
    <footer id="footer" class="footer">
        <h3 class="footer__logo--footer">Travel Advisor</h3>
            <nav class="footer__nav">
                <ul class="footer__nav__list">
                    <li class="footer__nav__list--item">
                        <a class="footer__nav__list--item--anchor" href="#/">Homepage</a></li>
                    <li class="footer__nav__list--item">
                        <a class="footer__nav__list--item--anchor" href="#contact">Contact</a></li>
                    <li class="footer__nav__list--item">
                        <a class="footer__nav__list--item--anchor" href="#contact">Terms & Conditions</a></li>
                </ul>
            </nav>
            <div class="footer__fa">
                <i class="footer__fa fab fa-facebook"></i>
                <i class="footer__fa fab fa-instagram"></i>
                <i class="footer__fa fab fa-pinterest"></i>
                <i class="footer__fa fab fa-twitter"></i>
            </div>
            <small>&copy; 2021 JGalber Designs</small>
    </footer>
</template>
    
<script></script>

<style lang="scss" scoped>
@import "../css/_color.palette.scss";
@import "../css/_fonts.scss";
@import "../css/_footer.scss";
@import "../css/_grid.scss";
@import "../css/_responsive.layouts.scss"; 
@import "../css/_media.queries.scss";
@import "../css/_units.scss";


.footer {
    @include fb-footer;
    &__logo--footer {
        @include logo-item;
        @include logo--footer;
        @include responsive(phone) {
            line-height: $m-rem;
            width: 90%;
        }
    }
        
    &__nav {
        margin: $s-rem 0;
        &__list {
            padding: 0;
            @include list;
            @include footer-navbar-responsive; 
            
            &--item {
                @include footer-list-item;
                @include footer-nav-item-responsive;
              
            }
            &--item:first-child {
                padding-left: 0;
            }

            &--item:last-child {
                margin-right: 0;
            }

            &--item::after {
                @include footer-list-item-after;
                @include responsive(phone) {
                    display: none;
                }
            }

            &--item:last-of-type::after {
                display: none;
            }
            
            &--item--anchor {
                color: $platinum;
                text-decoration: none;
            }
        }
    }

    &__fa {
        @include fa;      
    }

    .fab:first-child {
        @include sm-hover;
        &:hover {
            color: $facebook;
        }
    }

    .fab:nth-child(2) {
        @include sm-hover;
        &:hover {
            color: $instagram;
        }        
    }

    .fab:nth-child(3) {
        @include sm-hover;
        &:hover {
            color: $pinterest;
        }        
    }

    .fab:last-child {
        @include sm-hover;
        &:hover {
            color: $twitter;
        }        
    }

    & small {
        @include copy-info;
    }
}
    
</style>