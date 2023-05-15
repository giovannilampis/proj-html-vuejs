<script>

import { subSummary }  from '../store/subSummary'
import StarsComp from './StarsComp.vue'

export default {
    name: 'SummaryComp',
    components: {StarsComp},
    data() {
        return {
            subSummary
        }
    },
}

</script>

<template>
    <section>
        <div class="container">
            <div class="row py-5">
                <div class="col-3">
                    <p class="text-uppercase">featured</p>
                    <div v-for="summary_featured,index of subSummary.featured" :key="index" class="summary_element">
                        <div class="d-flex">
                            <div class="flex-1" style="flex: 1">
                                <p>{{ summary_featured.title }}</p>
                                <div v-if="summary_featured.stars != null" class="pb-2">
                                    <StarsComp>
                                    </StarsComp>
                                </div>
                                <div>
                                    <span v-if="summary_featured.sale_price != null">
                                        $<del>{{ summary_featured.price }}</del> ${{ summary_featured.sale_price }}
                                    </span>
                                    <span v-else>
                                        ${{ summary_featured.price }}
                                    </span>
                                </div>
                            </div>
                            <img style="width: 90px;" :src="'/images/' + summary_featured.img" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <p class="text-uppercase">on sale</p>
                    <div v-for="summary_featured,index of subSummary.on_sale" :key="index" class="summary_element">
                        <div class="d-flex">
                            <div class="flex-1" style="flex: 1">
                                <p>{{ summary_featured.title }}</p>
                                <div v-if="summary_featured.stars != null" class="pb-2">
                                    <StarsComp>
                                    </StarsComp>
                                </div>
                                <div>
                                    <span v-if="summary_featured.sale_price != null">
                                        $<del>{{ summary_featured.price }}</del> ${{ summary_featured.sale_price }}
                                    </span>
                                    <span v-else>
                                        ${{ summary_featured.price }}
                                    </span>
                                </div>
                            </div>
                            <img style="width: 90px;" :src="'/images/' + summary_featured.img" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <p class="text-uppercase">top rated</p>
                    <div v-for="summary_featured,index of subSummary.top_rated" :key="index" class="summary_element">
                        <div class="d-flex">
                            <div class="flex-1" style="flex: 1">
                                <p>{{ summary_featured.title }}</p>
                                <StarsComp/>
                                <div>
                                    <span v-if="summary_featured.sale_price != null">
                                        $<del>{{ summary_featured.price }}</del> ${{ summary_featured.sale_price }}
                                    </span>
                                    <span v-else>
                                        ${{ summary_featured.price }}
                                    </span>
                                </div>
                            </div>
                            <img style="width: 90px;" :src="'/images/' + summary_featured.img" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <p class="text-uppercase">latest reviews</p>
                    <div v-for="summary_featured,index of subSummary.latest_reviews" :key="index" class="summary_element">
                        <div class="d-flex">
                            <div class="flex-1" style="flex: 1">
        
                                <p>{{ summary_featured.title }}</p>
        
                                <StarsComp/>
        
                                <p> by {{ summary_featured.author }}</p>
        
                            </div>
                            <img style="width: 80px;" :src="'/images/' + summary_featured.img" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    height: 360px;
    margin-bottom: 10rem;
}

.summary_element {
    border-bottom: 1px solid $gray_light;
}

p.text-uppercase {
    padding-bottom: 1rem;
}

</style>