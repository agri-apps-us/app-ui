<template>
  <div class="scrollbar">
    <app-icons />
    <header class="page-header scrollbar">
      <nav>
        <button
          @click="handleMobileToggle"
          class="toggle-mob-menu"
          :aria-expanded="mobileMenuOpened"
          :aria-label="mobileMenuOpened ? 'close menu' : 'open menu'"
        >
          <svg width="20" height="20" aria-hidden="true">
            <use xlink:href="#down"></use>
          </svg>
        </button>
        <div class="app-menu">
          <slot name="menu" 
              v-bind:menuClasses="menuClasses"
              v-bind:menuHeadingClasses="menuHeadingClasses"
              v-bind:copyright="copyright"> </slot>
          <div class="app-menu-spacer">&nbsp;</div>
          <ul class="admin-menu">
            <li class="collapse">
              <button
                ref="collapseBtn"
                @click="handleCollapse"
                class="collapse-btn"
                :aria-expanded="expanded"
                :aria-label="expanded ? 'expand menu' : 'close menu'"
              >
                <svg aria-hidden="true">
                  <use xlink:href="#collapse"></use>
                </svg>
                <span>Collapse</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <section class="page-content scrollbar">
      <section class="app-bar">        
        <slot name="appbar">&nbsp;</slot>
        <slot name="user" v-bind-user="user">
          <div class="admin-profile" v-if="user" @mouseenter="userDrop = true">
            <span class="greeting">{{user.username}}</span>
            <div class="notifications">
              <span v-if="user.notifications" class="badge">{{user.notifications}}</span>
              <svg>
                <use xlink:href="#users"></use>
              </svg>
            </div>
            <div class="notifications-dropdown" :class="{'open': userDrop}" v-click-outside="() => userDrop = false">
              <slot name="userDrop">
                {{user.username}}
              </slot>
            </div>
          </div>
        </slot>
      </section>
      <section class="content scrollbar">
        <slot v-bind:currentComponent="currentComponent">
          <router-view></router-view>
        </slot>
      </section>
      <footer class="page-footer">
        <slot name="footer">
          <small class="uk-display-block"
            >Made with <span class="red">❤</span> by
            <a href="https://agri-apps.online/" target="_blank"
              >Agri Apps</a
            >
          </small>
        </slot>
      </footer>
    </section>
  </div>
</template>

<script>
import AppIcons from "./AppIcons.vue";
import { directive as clickOutside } from 'v-click-outside';
export default {
  props: {
    user: {
      type: Object,
      default() {
        return {
          username: 'Guest',
          notifications: 0
        }
      }
    }
  },
  directives: {
    clickOutside
  },
  data() {
    return {
      expanded: false,
      mobileMenuOpened: false,
      appRoutes: {},
      currentComponent: "",
      userDrop: false
    };
  },
  components: { AppIcons },
  methods: {
    handleCollapse() {
      this.expanded = !this.expanded;
      document.body.classList.toggle("collapsed");
    },
    handleMobileToggle() {
      this.mobileMenuOpened = !this.mobileMenuOpened;
      document.body.classList.toggle("mob-menu-opened");
    },
    menuClasses(classnames) {
      return `admin-menu ${classnames || ''}`
    },
    menuHeadingClasses(classnames) {
      return `menu-heading ${classnames || ''}`
    },
    copyright() {
      return `&copy;2020 Agri Apps`
    }
  },
  mounted() {
    let menuLinks = this.$el.querySelectorAll(".admin-menu a");

    for (const link of menuLinks) {
      link.addEventListener(
        "mouseenter",
        function() {
          document.body.classList.contains("collapsed") &&
          window.matchMedia("(min-width: 768px)").matches
            ? this.setAttribute("title", this.textContent)
            : this.removeAttribute("title");
        }.bind(link)
      );
    }
  },
};
</script>

<style></style>
