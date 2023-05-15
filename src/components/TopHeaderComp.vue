<script>

export default {
    name: 'TopHeaderComp'
}

</script>

<template>
    <section>
        <div class="container flex">
        
            <ul class="d-flex justify-content-between align-items-center">
                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>  
            </ul>
    
            <ul class="d-flex justify-content-between align-items-center">
                <li class="border_right"><a href=""></a>Shopping Cart</li>
                <li class="border_right">My Account</li>
                <li class="shopping_cart"><i class="fa-sharp fa-solid fa-cart-shopping"></i><span class="text-uppercase px-2">cart</span><i class="fa-solid fa-chevron-down"></i></li>
            </ul>
    
        </div>
    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

.flex {
    @include display_between;
}

section {
    height: 40px;
    background-color: $white;
}

.container ul:first-child li {
    margin-right: 1rem;
}

ul {
    height: 40px;
}

ul li {
    height: 100%;
    @include display_center;
}

.border_right {
    border-right: 1px solid $edward;
    padding: 0 0.5rem;
}

.shopping_cart {
    background-color: $gray_light;
    color: $shark;
    padding: 0 3rem;
}



</style>