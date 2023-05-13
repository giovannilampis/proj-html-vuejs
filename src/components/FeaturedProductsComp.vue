<script>
import { products } from '../store/products'
import ArticleCard from './FeaturedCard.vue'
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
    <div>
        <div>
            <span @click="current_tab = index" v-for="(tab, index) of products" :key="index" class="p-2">{{ index }}</span>
        </div> 
        <div>
            <ArticleCard v-for="product,index of products[current_tab]" :key="index" 
                :product="product">
                 
            </ArticleCard>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>