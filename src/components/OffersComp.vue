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

            <div>

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
    background-size: contain;
    min-height: 20rem;
}

.promo_container {
    @include display_center;
}

</style>