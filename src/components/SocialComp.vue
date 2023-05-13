<script>

import { social_icons } from '../store/social'
export default {
    name: 'SocialComp',
    data() {
        return {
            social_icons
        }
    },
}

</script>

<template>
    <div>
        <a v-for="(icon, index) in social_icons" :key="index" href="#">{{ icon }}</a>
    </div>
</template>

<style>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

</style>