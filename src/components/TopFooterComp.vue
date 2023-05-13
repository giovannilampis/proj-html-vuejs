<script>
import { recentPost, tags, topRatedProducts } from '../store/footer'
export default {
    name: 'TopFooterComp',
    data() {
        return {
            recentPost, tags, topRatedProducts 
        }
    }
}

</script>

<template>
    <div class="row py-5">
        <div class="col-3">
            <p>AVADA</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, exercitationem.</p>
            <div>
                <a href="http://facebook" target="_blank" rel="noopener noreferrer">

                </a>
                <a href="http://twitter" target="_blank" rel="noopener noreferrer">
                    
                </a>
                <a href="http://instagram" target="_blank" rel="noopener noreferrer">
                    
                </a>
                <a href="http://youtube" target="_blank" rel="noopener noreferrer">
                    
                </a>
            </div>
        </div>
        <div class="col-3">
            <div class="row" v-for="top_rated,index of topRatedProducts" :key="index">
                <div class="col-8">
                    <p class="m-0"> {{ top_rated.name }}</p>
                    <p class="m-0">
                        stelline
                    </p>
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
            <p>RECENT POSTS</p>
            <div v-for="recent_post,index of recentPost" :key="index">
                <div class="d-flex">
                    <i>></i>
                    <p class="ms-2">{{ recent_post }}</p>
                </div>
            </div>
        </div>
        <div class="col-3 d-flex flex-wrap">
            <div class="border p-2" style="margin-left: 10px;" v-for="tag,index of tags" :key="index">
                {{  tag }}
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>