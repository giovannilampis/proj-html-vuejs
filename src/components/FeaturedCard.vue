<script>
 export default {
    name: 'FeaturedCard',
    props: {
        product: Object
    },
    data() {
        return {
           
        }
    }
}
</script>

<template>
    <div>
        <div>
            <img :src="'/images/' + product.image" alt="{{ product.name }}">
        </div>
        <span v-if="product.sale_price != null">
            $<del>{{ product.price }}</del> ${{ product.sale_price }}
        </span>
        <span v-else>
            ${{ product.price }}
        </span>
    </div>

</template>