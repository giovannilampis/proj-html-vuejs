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
        <div class="container py-5">
            <p class="text-center text-uppercase">
                brand logos
            </p>
            <div class="row">
                <div v-for="(logo, index) in brandLogos" :key="index" class="col-2">
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
}

</style>