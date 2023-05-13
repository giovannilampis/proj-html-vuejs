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
    <div class="container">
        <div class="row">
            <div v-for="(logo, index) in brandLogos" :key="index" class="col-2">
                <img :src="'/images/' + logo" alt="">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>