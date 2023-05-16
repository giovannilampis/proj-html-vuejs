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

            <div class="title-container">
                <div class="line line-left"></div>
                <h2>featured products</h2>
                <div class="line line-right"></div>
            </div>
          
            <p>Must have products from our top sellers</p>
            <div>
                <span @click="current_tab = index" v-for="(tab, index) of products" :key="index" class="select-category">{{ index }}</span>
            </div> 
            <div class="container-fluid row py-4">
                
                <div class="row">
                    <FeaturedCard v-for="product,index of products[current_tab]" :key="index" 
                        :product="product">
                         
                    </FeaturedCard>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    padding-top: 10rem;
    padding-bottom: 4rem;
    text-align: center;
}
.title-container {
  display: flex;
  align-items: center;
}

h2 {
    @include title;
}

.line {
    @include line;
}

.line-left {
  margin-right: 0;
}

.line-right {
  margin-left: 0;
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