<script>
import { blogArticles } from '../store/blogArticles'
export default {
    name: 'BlogArticlesComp',
    data() {
        return {
            blogArticles
        }
    }
}

</script>

<template>
    <div class="container-fluid row">
        <div v-for="article,index of blogArticles" :key="index" class="col-4">
            <div class="image-container">
                <img :src="'/images/' + article.img" alt="article.title ">
            </div>
            <p>{{ article.title }}</p>
            <span>{{ article.date }}</span>
            <span>| Comments</span>
            <!-- <span>{{ article.comments.length }}</span> -->
            <p>{{ article.description }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .image-container {
        width: 100%;
    }
</style>