<template>
  <div class="slide-panel slide-panel-main scrollbar"
    :class="{
        'slide-panel--is-visible': show, 
        'slide-panel--from-right': direction === 'right',
        'slide-panel--from-left': direction === 'left',
        'border': border
        }">      
      <div class="slide-panel__container">
          <header class="slide-panel__header">
                <slot name="header"></slot>
          </header>
          <div class="slide-panel__content">
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean
        }
    },
    data() {
        return {
            show: this.open,
            direction: 'left',
            border: false
        }
    },
    mounted() {
        if (this.$el.hasAttribute('right')) {
            this.direction = 'right';
        }
        if (this.$el.hasAttribute('border')) {
            this.border = true;
        }
    },
    watch: {
        open(newVal) {
            this.show = newVal;
            if (this.show) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        }
    }
}
</script>