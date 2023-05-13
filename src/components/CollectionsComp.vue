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

    <div class="row">
        <CollectionCard v-for="(season, index) in seasonCollections" :key="index" :season="season"/>
    </div>

</template>