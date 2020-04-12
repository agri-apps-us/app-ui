<template>
  <div class="slider-radio elegant">
      <span v-for="(opt, i) in options" :key="i">
          <input type="radio" 
            v-model="the_value"
            :id="opt.id || opt"
            :value="opt.id || opt"
            :name="name">
            <label :for="opt.id || opt">{{opt.text || opt}}</label>
     </span>
  </div>
</template>

<script>

export default {    
    props: {
        value: {
            type: [String, Number]
        },
        name: {
            type: String,
            default: 'group'
        },
        options: {
            type: Array,
            default() { 
                return [];
            }
        }
    },
    data() {
        return {
            the_value: this.value
        }
    },
    watch: {
        the_value(newVal) {
            this.$emit('input', newVal);
        }
    },
    computed: {
        steps() {
            return this.options.length
        }
    }
}
</script>

<style>

</style>