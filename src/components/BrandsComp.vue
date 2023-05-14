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
            <div class="d-flex justify-content-between align-items-center">
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
}

.logo_container {
    width: 8%;
}

</style>