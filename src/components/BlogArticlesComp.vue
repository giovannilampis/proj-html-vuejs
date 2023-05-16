<script>
import { blogArticles } from '../store/blogArticles'
export default {
    name: 'BlogArticlesComp',
    data() {
        return {
            blogArticles,
            zoomedIndexes: []
        }
    },
    methods: {
        zoom_image_in(index) {
            if (!this.zoomedIndexes.includes(index)) {
                this.zoomedIndexes.push(index);
      }
        },
        zoom_image_out(index) {
            const zoomIndex = this.zoomedIndexes.indexOf(index);
            if (zoomIndex !== -1) {
                this.zoomedIndexes.splice(zoomIndex, 1);
            }
        }
    },
}

</script>

<template>
    <section>

        <div class="container">
            
            <div class="title-container">
                <div class="line line-left"></div>
                <h2>from our blog</h2>
                <div class="line line-right"></div>
            </div>

            <p class="text-center pb-5">The latest Classic Shop news</p>

            <div class="row align-items-center justify-content-center">

                <div v-for="article,index of blogArticles" :key="index" class="col-4">

                    <div class="image_container" :class="{ 'zoomed': zoomedIndexes.includes(index) }"
                        @mouseover="zoom_image_in(index)" @mouseleave="zoom_image_out(index)">
                        <div class="image_inner_container">
                            <img :src="'/images/' + article.img" :alt="article.title">
                        </div>
                    </div>

                    <p class="title_article fs-5">{{ article.title }}</p>
                    <span class="date_bottom">{{ article.date }}</span>
                    
                    <span> | {{ article.comments }} Comments</span>
                    <p class="pt-3">{{ article.description }}</p>
                    
                </div>

            </div>

        </div>

    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;


section {
    width: 100%;
    height: 720px;
    padding-top: 5rem;
    padding-bottom: 6rem;
    border-bottom: 1px solid $edward;
}
.title-container {
  display: flex;
  align-items: center;
}

h2 {
    @include title;
}

.line {
    @include line;
}

.line-left {
  margin-right: 0;
}

.line-right {
  margin-left: 0;
}

img {
    padding-bottom: 1rem;
}

.title_article {
    font-weight: bold;
}

.title_article:hover {
    cursor: pointer;
    color: $havelock_blue;
}

p.fs-5 {
    color: $down_footer;
}

.image_container {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.image_container:hover {
    cursor: pointer;
}

.image_inner_container  {
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
}

.zoomed .image_inner_container {
  transform: scale(1.15);
}

</style>