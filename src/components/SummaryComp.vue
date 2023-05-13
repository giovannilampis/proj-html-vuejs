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
        <div class="col-3" v-for="summary_featured,index of subSummary.featured" :key="index">
            <div class="d-flex">
                <div class="flex-1" style="flex: 1">
                    {{ summary_featured.title }}
                    Stelline
                    <span v-if="summary_featured.sale_price != null">
                        $<del>{{ summary_featured.price }}</del> ${{ summary_featured.sale_price }}
                    </span>
                    <span v-else>
                        ${{ summary_featured.price }}
                    </span>
                </div>
                <img class="w-5" :src="'/images/' + summary_featured.img" alt="">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>