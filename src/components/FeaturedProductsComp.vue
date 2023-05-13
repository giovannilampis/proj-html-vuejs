<script>
import { products } from '../store/products'
import FeaturedCard from './FeaturedCard.vue'
export default {
    name: 'FeaturedProductsComp',
    components: {FeaturedCard},
    data() {
        return {
            products,
            current_tab: 'men'
        }
    }
}

</script>

<template>
    <div class="text-center py-5">
        <h2 class="py-5">Featured Products</h2>
        <p>Must have products from our top sellers</p>
        <div>
            <span @click="current_tab = index" v-for="(tab, index) of products" :key="index" class="select-category">{{ index }}</span>
        </div> 
        <div class="container-fluid row py-5">
            <FeaturedCard v-for="product,index of products[current_tab]" :key="index" 
                :product="product">
                 
            </FeaturedCard>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.select-category {
    width: 6rem;
    aspect-ratio: 3 / 1;
    border: 1px solid lightgray;
    padding: 0.5rem 0.6rem;
}

</style>