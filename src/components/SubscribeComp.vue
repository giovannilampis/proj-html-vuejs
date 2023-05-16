<script>

export default {
    name: 'SubscribeComp'
}

</script>

<template>
    <section>

        <div>

            <div class="subscribe_container">
                <a class="envelope_container"><i class="fa-solid fa-envelope"></i></a>

                <h4 class="px-4">Subscribe now and get special offers</h4>

                <input class="mx-3" type="text" placeholder="Insert your email">

                <button>send</button>
            </div>

        </div>

    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    height: 175px;
    background-color: $subscribe;
    position: relative;
    color: $white;
}

.subscribe_container {
    @include display_center;
    @include absolute_center;
    width: 100%;
    color: $white;
}

.envelope_container {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: $top_footer;
    color: $fedora;
    position: relative;
    cursor: pointer;
}

.fa-envelope {
    font-size: 1.3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

h4 {
    font-size: 1.5rem;
}

input {
    border: none;
    width: 20%;
    font-size: 0.9rem;
    padding: 0.4rem 1.2rem;
    border-radius: 15px;

}

button {
    background-color: $havelock_blue;
    color: $white;
    border: none;
    font-size: 0.9rem;
    padding: 0.4rem 2rem;
    border-radius: 15px;
    text-transform: uppercase;
}

</style>