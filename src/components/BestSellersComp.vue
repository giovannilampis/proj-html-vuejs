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
    <div>
        <img v-for="img,index of bestSeller" :key="index" 
            :src="'/images/' +img" alt="">
    </div>
</template>


<style lang="scss" scoped>

</style>