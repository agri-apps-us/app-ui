<template>
  <app-shell>      
    <template v-slot:menu="">              
      <app-menu>
        <app-title logoAltText="Cattle Breakeven App">
            <img slot="logo" src="./../assets/img/app-logo.png" />
            Cattle Breakeven
        </app-title>
        <app-menu-item :to="`${basePath}`" text="Dashboard" svg="dashboard" />
        <app-menu-item to="data" text="Data" svg="data" :items="subnav">
        </app-menu-item>
        <app-menu-item to="reports" text="Reports" svg="reports" :items="reportsnav">
        </app-menu-item>
      </app-menu>
    </template>
    <template v-slot:default="">
      <router-view></router-view>
    </template>
    <template v-slot:appbar="">
        My Plugin App
    </template>
  </app-shell>
</template>

<script>
import AppShell from "@/components/AppShell.vue";
import AppTitle from "@/components/AppTitle.vue";
import AppMenu from "@/components/AppMenu.vue";
import AppMenuItem from "@/components/AppMenuItem.vue";

export default {
  name: "Home",
  data() {
    return {
      initComponent: "dashboard",
      subnav: [],
      reportsnav: []
    };
  },
  components: {
    AppShell, AppTitle, AppMenu, AppMenuItem
  },
  computed: {
    basePath() {
      return `${this.$route.meta["base"]}plugin-app`;
    },
    logoSrc() {
        return './../assets/img/app-logo.png';
    }
  },
  mounted() {
    console.log("route", this.$route);

    this.subnav = [
        { to: `${this.basePath}/data`, text: 'Data', svg: 'data' }
    ]
    this.reportsnav = [
        { to: `${this.basePath}/reports`, text: 'Main', svg: 'reports' }
    ]
  },
};
</script>

<style></style>
