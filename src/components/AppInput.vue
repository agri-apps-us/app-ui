<template>
  <div 
    :class="{
        'app-input-wrap': true, 
        'icon-prepend': prepend, 
        'icon-append': append,
        'small': isSmall,
        'medium': isMedium
        }">
      <span ref="prepend" v-if="prepend" class="app-input-prepend">
          <slot name="prepend">
              <svg>
                  <use :xlink:href="`#${prepend}`"></use>
              </svg>
          </slot>
      </span>
      <input :type="type" v-bind:value="value" 
            class="app-input"
            @focus="$emit('focus', $event)"
            @blur="$emit('blur', $event)"
            @input="$emit('input', $event.target.value)"
            :readonly="readonly" />
      <span ref="append" v-if="append" class="app-input-append">
          <slot name="append">
              <svg>
                  <use :xlink:href="`#${append}`"></use>
              </svg>
          </slot>
      </span>
  </div>
</template>

<script>
export default {
    props: {
        value: {
            type: [String, Number]
        },
        type: {
            type: String,
            default: 'text'
        },
        prepend: {
            type: [String, Boolean],
            default: ''
        },
        append: {
            type: [String, Boolean],
            default: ''
        },
        width: {
            type: [String, Number]
        },
        readonly: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            isSmall: false,
            isMedium: false
        }
    },
    mounted() {
        this.isSmall = this.$el.hasAttribute('small');
        this.isMedium = this.$el.hasAttribute('medium'); 
        
        if (this.$props.width) {
            this.$el.removeAttribute('small');
            this.$el.removeAttribute('medium');
            this.$el.style.width = `${parseInt(this.$props.width) + 24}px`;
        }
    }
    
}
</script>

<style>

</style>