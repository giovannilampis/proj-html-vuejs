<script>
 export default {
    name: 'ArticleCard',
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
            <img :src="'/images/' + product.image" alt="">
        </div>
        <span v-if="product.sale_price != null">
            $<del>{{ product.price }}</del> ${{ product.sale_price }}
        </span>
        <span v-else>
            ${{ product.price }}
        </span>
    </div>

</template>