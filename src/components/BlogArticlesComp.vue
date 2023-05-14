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
    <section>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div v-for="article,index of blogArticles" :key="index" class="col-4">
                    <div class="image-container">
                        <img :src="'/images/' + article.img" alt="article.title ">
                    </div>
                    <p>{{ article.title }}</p>
                    <span>{{ article.date }}</span>
                    
                    <span> | {{ article.comments }} Comments</span>
                    <p>{{ article.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;
    .image-container {
        width: 100%;
    }

    section {
        width: 100%;
        height: 440px;
        margin-top: 6rem;
    }
</style>