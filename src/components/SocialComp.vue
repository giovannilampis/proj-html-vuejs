<script>

// import {social_icons} from '../store/social'

export default {
    name: 'SocialComp',
    data() {
        return {
            // social_icons
        }
    },
}

</script>

<template>
    <div class="icons">
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
    </div>
</template>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

.icons {
    @include display_center;
    color: $white;
}


</style>