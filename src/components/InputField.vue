<template>
  <div class="input-field" :class="error ? 'input-field-errors' : ''">
    <label v-if="label">{{ label }}</label>
    <p v-if="hint" class="input-field-hint">{{ hint }}</p>
    <slot v-bind:setError="setError">
        <input :type="type" v-model="value" @input="$emit('input', $event.target.value)" />
    </slot>
    <div v-if="errorMessage" class="input-field-error">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg>
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
      value: {
          type: [String, Number],
          default: ''
      },
    label: {
      type: String,
      default: "",
    },
    hint: {
      type: String,
    },
    error: {
      type: String,
    },
    type: {
        type: String,
        default: 'text'
    }
  },
  data() {
    return {
      errorMessage: this.error,
    };
  },
  methods: {
    setError(str) {
      this.error = str;
    },
  },
  watch: {
    error(newVal) {
      this.errorMessage = newVal;
    },
  },
};
</script>

<style></style>
