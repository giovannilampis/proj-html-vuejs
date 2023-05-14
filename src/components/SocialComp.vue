<script>

export default {
    name: 'SocialComp',
    props: {
        icon: String
    },
    data() {
        return {
            // social_icons
        }
    },
}

</script>

<template>
    <div>
        <a href="#">{{ icon }}</a>
    </div>
</template>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;


</style>