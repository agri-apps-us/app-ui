<template>
  <div class="app-card">
      <div class="app-card-media">
          <slot name="media"></slot>
      </div>
      <div class="app-card-body">
          <slot></slot>
      </div>
      <div class="app-card-footer">
          <slot name="footer"></slot>
      </div>
  </div>
</template>