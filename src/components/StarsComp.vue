<script>
 export default {
    name: 'StarsComp',
    // props: {
        
    // },
    data() {
        return {
           
        }
    }
}
</script>

<template>
   <span v-for="n in 5"><i class="fa-solid fa-star"></i></span>

</template>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

</style>