<template>
  <div class="slider-input" :class="size">
      <div class="slider-input-range">
          <input ref="input" type="range" class="slider"
             :step="step" 
             :min="minValue" 
             :max="maxValue"
             v-model="displayValue"
             @change="e => $emit('input', displayValue)"
             />
          <span class="min-value">{{minValue}}</span>
          <span class="max-value">{{maxValue}}</span>
      </div>
      <div v-if="showInput" class="slider-input-input">
          <input v-if="allowInput" type="number" :step="step" :value="displayValue" @input="$emit('input', $event.target.value)" />
          <input v-if="!allowInput" type="number" readonly v-model="displayValue" />
      </div>
      <div v-if="isDragging">{{displayValue}}</div>
  </div>
</template>

<script>
import debounce from '../utils/debounce';

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
    directives: { debounce },
    data() {
        return {
            size: 'full',
            isDragging: false,
            displayValue: ''
        }
    },
    methods: {
        trackInput(evt) {
            const { target } = evt;
            this.displayValue = target.value;
        }
    },
    watch: {
        value(val) {
            this.displayValue = val;
        }
    },
    mounted() {

        this.$refs.input.addEventListener('input', this.trackInput, 400);
        this.displayValue = this.$props.value;

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