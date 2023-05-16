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
    
    <div class="col-4" style=" height: 500px; position: relative;">
            <img style="object-fit: cover; position: absolute; z-index: -1; top: 0; left: 0; height: 100%; width: 100%;" 
                :src="'/images/' + season.img" :alt="season.title">

            <div class="collection_text">

                <p class="title_card fs-3">{{ season.title }}</p>
    
                <p class="text-uppercase fw-light">{{ season.description }}</p>
    
                <a class="button_collection" href="#">view more</a>

            </div>

    </div>

</template>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

.title_card {
    white-space: nowrap;
    font-weight: bold;
}
.collection_text {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $white;
    text-align: center;
}

.button_collection {
    text-transform: uppercase;
    text-decoration: none;
    color: $white;
    padding: 0.7rem 0.9rem;
    border: 1px solid $white;
    border-radius: 14px;
    font-size: 0.65rem;
    font-weight: bold;
}

</style>