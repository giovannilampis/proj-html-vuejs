<script>
import { products } from '../store/products'
export default {
    name: 'FeaturedProductsComp',
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
            <article v-for="product,index of products[current_tab]" :key="index">
                 {{ product }}
            </article>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>