<template>
  <label class="toggle-switch">
      <input type="checkbox" :checked="checked" @input="$emit('input', $event.target.checked)">
      <span class="toggle-switch-slider" :class="{'round': round}"></span>
  </label>
</template>

<script>
export default {
    props: {
        checked: {
            type: Boolean
        },
        round: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>