<script>
import { bestSeller } from '../store/bestSeller'
export default {
    name: 'BestSellersComp',
    data() {
        return {
            bestSeller
        }
    }
}

</script>

<template>
    <section>
        <div class="container">
            <h2 class="text-capitalize text-center fw-bold">Best Seller</h2>
            <p>Must have products from our top sellers</p>

            <div class="slider_container">

                <div id="prev">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                
                <div class="row pictures">
                    <div class="col-2" v-for="img,index of bestSeller" :key="index">
                        <img :src="'/images/' +img" :alt="index">
                    </div>
                </div>

                <div id="next">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                
            </div>

        </div>
    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    height: 410px;
    margin-top: 8rem;
    text-align: center;
}

.slider_container {
    @include display_between;
}

#prev,
#next {
    background-color: $edward;
    color: $white;
    width: 3rem;
    aspect-ratio: 1 / 2;
    cursor: pointer;
    @include display_center;
}


.pictures {
    justify-content: center;
    align-items: center;
}

</style>