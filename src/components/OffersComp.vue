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

        <div class="promo_container">

            <div class="promo_box" v-for="(offer, index) in offers" :key="index">

                <img :src="'/images/' + offer.img" alt="">

                <div class="promo_text">

                    <p class="fs-3 fw-bold">{{ offer.offer }}</p>

                    <p class="fw-light">{{ offer.description }}</p>

                    <button class="offer_button">view more</button>

                </div>

            </div>

        </div>
        
    </section>

</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    background-image: url(/images/bkgd_confetti-compressor.jpg);
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    min-height: 20rem;
}

.promo_container {
    @include display_center;
}

.promo_box {
    width: 25%;
    aspect-ratio: 3 /2;
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