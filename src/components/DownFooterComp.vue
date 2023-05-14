<script>

export default {
    name: 'DownFooterComp'
}

</script>

<template>
    <section>
        <div class="container">
            <p class="pt-2">Copyright 2012 - 2020 | Avada Theme by Theme Fusion | All Rights Reserved | Powered by WordPress</p>
            <div class="image_container">
                <img src="../../public/images/payment_cards_footer.png" alt="">
            </div>
        </div>
        
    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    height: 86px;
    background-color: $down_footer;
    text-align: center;
    font-size: 0.8rem;
    color: $white;
}

.image_container {
    width: 16.6%;
    height: 35%;
    margin: 0 auto;
}

</style>