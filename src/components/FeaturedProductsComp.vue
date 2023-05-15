<script>
import { products } from '../store/products'
import FeaturedCard from './FeaturedCard.vue'
// import SectionTitle from './SectionTitle.vue'

export default {
    name: 'FeaturedProductsComp',
    components: {FeaturedCard},
    // components: {SectionTitle},
    data() {
        return {
            products,
            current_tab: 'men'
        }
    }
}

</script>

<template>
    <section>
        <!-- <SectionTitle/> -->
        <div class="container">
            <h2 class="text-capitalize text-center fw-bold">Featured Products</h2>
            <p>Must have products from our top sellers</p>
            <div>
                <span @click="current_tab = index" v-for="(tab, index) of products" :key="index" class="select-category">{{ index }}</span>
            </div> 
            <div class="container-fluid row py-4">
                <FeaturedCard v-for="product,index of products[current_tab]" :key="index" 
                    :product="product">
                     
                </FeaturedCard>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    padding-top: 6rem;
    padding-bottom: 4rem;
    text-align: center;
}

.select-category {
    width: 6rem;
    aspect-ratio: 3 / 1;
    border: 1px solid lightgray;
    padding: 0.5rem 0.6rem;
    background-color: $gray_light;
    color: $down_footer;
    font-weight: bold;
    cursor: pointer;
}

.select-category:hover {
    background-color: $white;
}

p {
    padding-bottom: 2rem;
}

</style>