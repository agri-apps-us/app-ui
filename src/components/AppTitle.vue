<template>
  <li class="menu-heading">
        <slot name="logo">
            <img v-if="logo"
                :src="logo"
                :alt="logoAltText"
                />
        </slot>
        <h3 class="uk-text-center"><slot>{{text}}</slot></h3>
        <p class="copyright">&copy; {{copyright}}</p>
    </li>
</template>

<script>
export default {
    props: {
        logo: {
            type: String
        },
        logoAltText: {
            type: String,
            default: ""
        },
        text: {
            type: String
        }
    },
    computed: {
        copyright() {
            return `${new Date().getFullYear()} Agri Apps`
        }
    }

}
</script>

<style>

</style>