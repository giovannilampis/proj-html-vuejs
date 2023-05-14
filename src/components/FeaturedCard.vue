<script>
 export default {
    name: 'FeaturedCard',
    props: {
        product: Object
    },
}
</script>

<template>
    <div class="col-3">
        <div>
            <img :src="'/images/' + product.image" alt="{{ product.name }}">
        </div>
        <p>{{ product.title }}</p>
        <p>{{ product.description }}</p>
        <span v-if="product.sale_price != null">
            $<del>{{ product.price }}</del> ${{ product.sale_price }}
        </span>
        <span v-else>
            ${{ product.price }}
        </span>
    </div>

</template>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

</style>