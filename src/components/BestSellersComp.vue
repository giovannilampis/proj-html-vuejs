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
    height: 535px;
}

.pictures {
    justify-content: center;
    align-items: center;
}

</style>