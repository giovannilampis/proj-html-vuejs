<script>
 export default {
    name: 'CollectionCard',
    props: {
        season: Object
    },
    data() {
        return {
           
        }
    }
}
</script>

<template>
    
    <div class="col-4" v-for=" season,index of seasonCollections" :key="index" style=" height: 500px; position: relative;">
            <img style="object-fit: cover; position: absolute; z-index: -1; top: 0; left: 0; height: 100%; width: 100%;" 
                :src="'/images/' + season.img" alt="{{ season.title }}">

            <p>
                {{ season.title }} 
            </p>
    </div>

</template>

<style lang="scss" scoped>

</style>