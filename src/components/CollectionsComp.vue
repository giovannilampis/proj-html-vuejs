<script>

import { seasonCollections } from '../store/collections'
import CollectionCard from './CollectionCard.vue'

export default {
    name: 'FeaturedProductsComp',
    components: {CollectionCard},
    data() {
        return {
            seasonCollections
        }
    }
}
</script>

<template>

    <div class="row py-5">
        <CollectionCard v-for="(season, index) in seasonCollections" :key="index" :season="season"/>
    </div>

</template>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

</style>