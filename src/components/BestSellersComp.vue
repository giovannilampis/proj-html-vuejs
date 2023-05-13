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
    <div class="row " style=" justify-content: center;">
        <div class="col-2" v-for="img,index of bestSeller" :key="index">
            <img class="w-100"  :src="'/images/' +img" alt="">
        </div>
        
    </div>
</template>


<style lang="scss" scoped>

</style>