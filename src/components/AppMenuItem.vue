<template>
  <li :class="{'subnav': container}">
      <router-link v-if="!container" :to="to">
          <slot name="icon">
              <svg v-if="svg">
                <use :xlink:href="`#${svg}`"></use>
              </svg>
          </slot>
          <span><slot>{{text}}</slot></span>
      </router-link>
      <div class="subnav-header" v-if="container" @click="expanded = !expanded">
          <slot name="icon">
                <svg v-if="svg">
                    <use :xlink:href="`#${svg}`"></use>
                </svg>
            </slot>
        <span>
            
            <slot>{{text}}</slot>
        </span>
        <span class="subnav-toggle" :class="{'down': expanded}" 
         ></span>
      </div>
      <ul class="subnav-nav" :class="{'active': expanded}" v-if="container">
          <li v-for="(item, i) in menuItems" :key="i">
              <router-link :to="item.to">
                  <svg v-if="item.svg">
                      <use :xlink:href="`#${item.svg}`"></use>
                  </svg>
                  <span>{{item.text}}</span>
              </router-link>
          </li>
      </ul>
  </li>
</template>

<script>
export default {
    props: {
        to: {
            type: String
        },
        svg: {
            type: String
        },
        items: {
            type: Array
        },
        text: {
            type: String,
            default: ''
        },
        open: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            expanded: this.open,
            menuItems: []
        }
    },
    computed: {
        container() {
            return this.menuItems && this.menuItems.length;
        }
    },
    mounted() {
        this.menuItems = this.$props.items || [];
    },
    watch: {
        items(newVal) {
            this.menuItems = [...newVal]
        }
    }
}
</script>

<style>

</style>