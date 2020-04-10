<template>
  <div class="slider-input" :class="size">
      <div class="slider-input-range">
          <input type="range" class="slider" :step="step" :min="minValue" :max="maxValue"
          :value="value" 
            @change="$emit('input', $event.target.value)" />
          <span class="min-value">{{minValue}}</span>
          <span class="max-value">{{maxValue}}</span>
      </div>
      <div v-if="showInput" class="slider-input-input">
          <input v-if="allowInput" type="number" :step="step" :value="value" @input="$emit('input', $event.target.value)" />
          <input v-if="!allowInput" type="number" readonly v-model="value" />
      </div>
  </div>
</template>

<script>
export default {
    props: {
        value: {
            type: [Number, String],
            required: true
        },
        minValue: {
            type: Number,
            default: 0
        },
        maxValue: {
            type: Number,
            default: 100
        },
        step: {
            type: Number,
            default: 1
        },
        showInput: {
            type: Boolean,
            default: true
        },
        allowInput: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            size: 'full'
        }
    },
    mounted() {
        if (this.$el.hasAttribute('small')) {
            this.size = 'small';
            this.$el.removeAttribute('small')
        }
        if (this.$el.hasAttribute('medium')) {
            this.size = 'medium';
            this.$el.removeAttribute('medium')
        }
    }

}
</script>