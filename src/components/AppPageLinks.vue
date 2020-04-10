<template>
  <div class="app-page-links">
    <div v-if="next" class="app-page-links-next">
      <router-link :class="buttonClasses" :to="next.to">
        {{ next.label }} <svg class="svg-icon"><use x-link:href="#arrowRight"></use></svg>
      </router-link>
    </div>
    <div v-if="prev" class="app-page-links-prev">
      <router-link :class="buttonClasses" :to="prev.to">
        <svg class="svg-icon"><use x-link:href="#arrowLeft"></use></svg> {{ prev.label }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object
    },
    next: {
      type: Object
    },
    theme: {
      type: String,
      default: "secondary"
    },
    outlined: {
      type: Boolean,
      default: true
    },
    rounded: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    buttonClasses() {
      return {
        button: true,
        [`${this.theme}`]: true,
        outlined: this.$props.outlined,
        rounded: this.$props.rounded
      };
    }
  }
};
</script>
