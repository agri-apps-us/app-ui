<template>
  <div class="app-card" :class="{'app-card-rounded': rounded}">
      <div class="app-card-media">
          <slot name="media"></slot>
      </div>
      <div class="app-card-body">
          <slot></slot>
      </div>
      <div class="app-card-footer">
          <slot name="footer"></slot>
      </div>
  </div>
</template>
<script>
export default {
    props: {
        rounded: {
            type: Boolean,
            default: false
        }
    }
}
</script>