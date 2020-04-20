<template>
  <div class="full-screen" :class="{'open': expanded, 'scrollbar': expanded}">      
      <svg @click="expanded=false" class="full-screen-toggle" v-if="showCloseIcon && expanded" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>
      <svg @click="expanded=true" class="full-screen-toggle" v-if="showIcon && !expanded" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
      <slot v-if="expanded" name="header" v-bind:exit="() => expanded = false"></slot>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        showOpenIcon: {
            type: Boolean,
            default: true
        },
        showCloseIcon: {
            type: Boolean,
            default: true
        },
        trigger: {
            type: String
        }
    },
    data() {
        return {
            expanded: false,
            triggerEl: null
        }
    },
    methods: {
        toggle() {
            this.expanded = !this.expanded;
        }
    },
    mounted() {
        if (this.$props.trigger) {
            
            this.triggerEl = document.querySelector(this.$props.trigger);
            if (this.triggerEl) {
                this.triggerEl.addEventListener('click', this.toggle);
            }
        }
    },
    beforeDestroy() {
        if (this.triggerEl) {
            this.triggerEl.removeEventListener('click', this.toggle);
        }
    },
    watch: {
        trigger(sel) {
            if (this.triggerEl) {
                this.triggerEl.removeEventListener('click', this.toggle);
            }
            
            this.triggerEl = document.querySelector(sel);
            if (this.triggerEl) {
                this.triggerEl.addEventListener('click', this.toggle);
            }
        }
    }
}
</script>

<style>

</style>