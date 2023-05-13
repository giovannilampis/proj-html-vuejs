<script>

import { seasonCollections } from '../store/collections'
import { CollectionCard } from './CollectionCard.vue'

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
        <div class="col-4" v-for=" season,index of seasonCollections" :key="index" style=" height: 500px; position: relative;">
            <img style="object-fit: cover; position: absolute; z-index: -1; top: 0; left: 0; height: 100%; width: 100%;" 
                :src="'/images/' + season.img" alt="">
                <p>
                    {{ season.title }} 
                </p>
        </div>
    </div>

    <CollectionCard  v-for="(season, index) in seasonCollections" :key="index" :season="season"/>
</template>