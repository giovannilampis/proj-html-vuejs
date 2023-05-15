<script>

import { brandLogos } from '../store/brandLogos'

export default {
    name: 'BrandsComp',
    data() {
        return {
            brandLogos
        }
    },
}

</script>

<template>
    <section>
        <div class="container">
            <p class="text-center text-uppercase">
                brand logos
            </p>
            <div class="flex">
                <div v-for="(logo, index) in brandLogos" :key="index" class="logo_container">
                    <img :src="'/images/' + logo" alt="">
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    background-color: $gray_light;
    height: 215px;
    position: relative;
}

.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.flex {
    @include display_between;
}

.logo_container {
    width: 12%;
}

</style>