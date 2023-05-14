<script>
import { avada, recentPost, tags, topRatedProducts } from '../store/footer'
import SocialComp from './SocialComp.vue'
import StarsComp from './StarsComp.vue'
export default {
    name: 'TopFooterComp',
    components: {SocialComp},
    components: {StarsComp},
    data() {
        return {
            avada, recentPost, tags, topRatedProducts
        }
    }
}

</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="logo-container">
                        <img :src="'/images/'+ avada.img " alt="">
                    </div>
                    <p>{{ avada.address }}</p>
                    <p>{{ avada.city }}</p>
                    <p>Phone: {{ avada.phone }}</p>
                    <p>Email: {{ avada.email }}</p>
                    <p>Web: {{ avada.web }}</p>
                    
                    <SocialComp/>
        
                </div>
                <div class="col-3">
                    <p class="text-uppercase">top rated products</p>
                    <div class="row" v-for="top_rated,index of topRatedProducts" :key="index">
                        <div class="col-8">
                            <p class="m-0"> {{ top_rated.name }}</p>
                            <StarsComp/>
                            <div>
                                <span v-if="top_rated.sale_price != null">
                                    $<del>{{ top_rated.price }}</del> ${{ top_rated.sale_price }}
                                </span>
                                <span v-else>
                                    ${{ top_rated.price }}
                                </span>
                            </div>
                        </div>
                        <div class="col-4">
                            <img :src="'/images/'+ top_rated.img " alt="">
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <p class="text-uppercase">recent posts</p>
                    <div v-for="recent_post,index of recentPost" :key="index">
                        <div class="d-flex">
                            <i>></i>
                            <p class="ms-2">{{ recent_post }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-3 d-flex flex-wrap">
                    <p class="text-uppercase">tags</p>
                    <div class="tag-style" style="margin-left: 10px;" v-for="tag,index of tags" :key="index">
                        {{  tag }}
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
    background-color: $top_footer;
    color: $white;
    padding: 4rem 0;
}

.tag-style {
    padding: 0.2rem 0.3rem;
    border: 1px solid $nevada;
}
</style>