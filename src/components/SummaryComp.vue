<script>

import { subSummary }  from '../store/subSummary'
export default {
    name: 'SummaryComp',
    data() {
        return {
            subSummary
        }
    },
}

</script>

<template>
    <div class="row">
        <div class="col-3" v-for="product,index of subSummary" :key="index">
            <div class="d-flex">
                <div class="flex-1" style="flex: 1">
                    {{ product.title }}
                    Stelline
                    <span v-if="product.sale_price != null">
                        $<del>{{ product.price }}</del> ${{ product.sale_price }}
                    </span>
                    <span v-else>
                        ${{ product.price }}
                    </span>
                </div>
                <img class="w-5" :src="'/images/' + product.img" alt="">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>