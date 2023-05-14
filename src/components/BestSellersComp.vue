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
            <h2>Best Seller</h2>
            <p>Must have products from our top sellers</p>
            <div class="row pictures">
                <div class="col-2" v-for="img,index of bestSeller" :key="index">
                    <img :src="'/images/' +img" alt="">
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

.pictures {
    justify-content: center;
    align-items: center;
}

</style>