<template>
  <div class="app-overview-card" :style="{'--app-overview-card-icon-bgColor': iconBackground}">
      <div class="app-overview-card-icon">
          <slot name="icon">
              <svg v-if="icon">
                  <use :xlink:href="`#${icon}`"></use>
              </svg>
          </slot>
      </div>
      <div class="app-overview-card-description">
          <slot name="description">
            <h3 class="app-overview-card-title">
                <slot name="title">{{title}}</slot>
            </h3>
            <p class="app-overview-card-subtitle">{{subtitle}}</p>
          </slot>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'reports'
        },
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        iconBackground: {
            type: String,
            default: '#e67e22'
        }
    }
}
</script>