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
    <div class="row">
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
        <div v-for="product,index of topRatedProducts" :key="index">
        </div>
        <div v-for="post,index of recentPost" :key="index">
        </div>
        <div v-for="tag,index of tags" :key="index">
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>