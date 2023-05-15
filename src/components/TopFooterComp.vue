<script>
import { avada, recentPost, tags, topRatedProducts } from '../store/footer'
import StarsComp from './StarsComp.vue'
export default {
    name: 'TopFooterComp',
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

                <!-- AVADA CLASSIC SHOP -->
                <div class="col-3">
                    <div class="logo-container">
                        <img :src="'/images/'+ avada.img " alt="">
                    </div>
                    <p>{{ avada.address }}</p>
                    <p>{{ avada.city }}</p>
                    <p>Phone: {{ avada.phone }}</p>
                    <p>Email: {{ avada.email }}</p>
                    <p>Web: {{ avada.web }}</p>


                    <ul class="d-flex justify-content-start align-items-center">
                        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>  
                    </ul>
                    
                </div>

                <!-- TOP RATED PRODUCTS -->
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
                            <div class="image_container">
                                <img :src="'/images/'+ top_rated.img " :alt="top_rated.name">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RECENT POSTS -->
                <div class="col-3">
                    <p class="text-uppercase">recent posts</p>
                    <div v-for="recent_post,index of recentPost" :key="index">
                        <div class="d-flex">
                            <i>></i>
                            <p class="ms-2">{{ recent_post }}</p>
                        </div>
                    </div>
                </div>

                <!-- TAGS -->
                <div class="col-3 d-flex flex-wrap">
                    <p class="text-uppercase w-p">tags</p>
                    <span class="tag-style" v-for="tag,index of tags" :key="index">
                        {{  tag }}
                    </span>
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

.logo-container {
    width: 40%;
    aspect-ratio: 4 / 1;
    padding-bottom: 3rem;
}
.image_container {
    width: 70px;
    padding-bottom: 1rem;
}

.fa-brands {
    color: $white;
    margin-right: 1.5rem;
    margin-top: 2rem;
}

.w-p {
    width: 100%;
    height: 0.01rem;
}

.tag-style {
    border: 0.3px solid $nevada;
    height: 1.7rem;
    margin-right: 0.3rem;
    padding: 0 0.3rem;
}
</style>