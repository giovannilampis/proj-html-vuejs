<script>

import { offers } from '../store/offers'

export default {
    name: 'OffersComp',
    data() {
        return {
            offers
        }
    },
}

</script>

<template>

    <section>

        <div class="promo_container container">

            <div v-for="(offer, index) in offers" :key="index">

                <div class="promo_box">

                    <img :src="'/images/' + offer.img" alt="">
    
                    <div class="promo_text">
    
                        <p class="fs-3 fw-bold">{{ offer.offer }}</p>
    
                        <p class="fw-light">{{ offer.description }}</p>
    
                        <button class="offer_button">view more</button>
    
                    </div>

                </div>

            </div>

        </div>
        
    </section>

</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    width: 100%;
    height: 412px;
    background-image: url(/images/bkgd_confetti-compressor.jpg);
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    min-height: 20rem;
}

.promo_container {
    @include display_center;
    gap: 30px;
}

.promo_box {
    // width: 50%;
    aspect-ratio: 3 / 2;
    position: relative;
}

.promo_text {
    position: absolute;
    font-size: 0.7rem;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    color: $white;
}
.offer_button {
   text-transform: uppercase;
   text-decoration: none;
   padding: 0.6rem 0.8rem;
   border-radius: 10%;
   color: $white;
   background-color: transparent;
   border: 1px solid $white;
    font-size: 0.7rem;
    font-weight: bold;
}

</style>