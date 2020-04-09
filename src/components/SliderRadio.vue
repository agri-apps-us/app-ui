<template>
  <div class="slider-radio elegant">
      <span v-for="(opt, i) in options" :key="i">
          <input type="radio" @click="$emit('input', opt.id || opt)" name="grade" :id="opt.id || opt"><label :for="opt.id || opt">{{opt.text || opt}}</label>
     </span>
  </div>
</template>

<script>

export default {    
    props: {
        options: {
            type: Array,
            default() { 
                return [];
            }
        }
    },
    data() {
        return {
            value: ''
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