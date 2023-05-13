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
    <div class="row py-5">
        <div class="col-3">
            <div v-for="summary_featured,index of subSummary.featured" :key="index">
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
                    <img style="width: 90px;" :src="'/images/' + summary_featured.img" alt="">
                </div>
            </div>
        </div>
        <div class="col-3">
            <div v-for="summary_featured,index of subSummary.on_sale" :key="index">
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
                    <img style="width: 90px;" :src="'/images/' + summary_featured.img" alt="">
                </div>
            </div>
        </div>
        <div class="col-3">
            <div v-for="summary_featured,index of subSummary.top_rated" :key="index">
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
                    <img style="width: 90px;" :src="'/images/' + summary_featured.img" alt="">
                </div>
            </div>
        </div>
        <div class="col-3">
            <p class=""> Latest Reviews  </p>
            <div v-for="summary_featured,index of subSummary.latest_reviews" :key="index">
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
                    <img style="width: 80px;" :src="'/images/' + summary_featured.img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

</style>