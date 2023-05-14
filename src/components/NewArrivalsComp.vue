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
        <h2>New Arrivals</h2>
        <p>Brand new products from top designers</p>
        <div class="row pictures">
            <div class="col-2" v-for="img,index of bestSeller" :key="index">
                <img :src="'/images/' +img" alt="">
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    width: 100%;
    height: 675px;
    text-align: center;
    margin-top: 2rem;
}

</style>