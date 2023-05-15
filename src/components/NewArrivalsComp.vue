<script>

import { new_arrivals } from '../store/new_arrivals'
export default {
    name: 'NewArrivalsComp',
    data() {
        return {
            new_arrivals
        }
    }
}

</script>

<template>
    <section>
        <h2 class="text-capitalize text-center fw-bold">New Arrivals</h2>
        <p>Brand new products from top designers</p>

        <div class="slider_container">

            <div id="prev">
                <i class="fa-solid fa-chevron-left"></i>
            </div>

            <div class="row pictures">
                <div class="col-2" v-for="img,index of new_arrivals" :key="index">
                    <img :src="'/images/' +img" :alt="index">
                </div>
            </div>

            <div id="next">
                <i class="fa-solid fa-chevron-right"></i>
            </div>

        </div>
    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    width: 100%;
    height: 500px;
    text-align: center;
    margin-top: 2rem;
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


</style>