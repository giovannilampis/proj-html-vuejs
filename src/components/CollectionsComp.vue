<script>
import { seasonCollections } from '../store/collections'
export default {
    name: 'FeaturedProductsComp',
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
                :src="'/images/' + season.img + '.jpg'" alt="">
                <p>
                    {{ season.title }} 
                </p>
        </div>
    </div>
</template>