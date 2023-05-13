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
        <div class="col-3" v-for="category,index of subSummary" :key="index">
            <div class="d-flex">
                <div class="flex-1" style="flex: 1">
                    {{ category.title }}
                    Stelline
                    <span v-if="category.sale_price != null">
                        $<del>{{ category.price }}</del> ${{ product.sale_price }}
                    </span>
                    <span v-else>
                        ${{ category.price }}
                    </span>
                </div>
                <img class="w-5" :src="'/images/' + category.img" alt="">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>