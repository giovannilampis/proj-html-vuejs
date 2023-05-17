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
        <div class="card_container">
            <div class="image_container">
                <img :src="'/images/' + product.image" :alt="product.title">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <p class="product_title fs-5 fw-bold">{{ product.title }}</p>
            <p>{{ product.description }}</p>
            <span v-if="product.sale_price != null">
                $<del>{{ product.price }}</del> ${{ product.sale_price }}
            </span>
            <span v-else>
                ${{ product.price }}
            </span>
        </div>
    </div>

</template>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

.card_container {
    text-align: left;
}
.product_title {
    color: $down_footer;
    cursor: pointer;
    padding-top: 1rem;
}
.product_title:hover {
    color: $havelock_blue;
}

.image_container {
    position: relative;
}

.image_container > i {
    @include absolute_center;
    font-size: 5rem;
    color: $white;
    cursor: pointer;
    display: none;
}

.col-3:hover .image_container > i{
    display: block;
}

.col-3:hover .image_container::before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background-color: rgba(226, 128, 177, 0.5);
}

span {
    color: $havelock_blue;
}

img {
    padding-top: 2rem;
}

</style>