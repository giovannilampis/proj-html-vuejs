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
    <div>
        <div v-for="article,index of blogArticles" :key="index">
            {{  article }}
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>