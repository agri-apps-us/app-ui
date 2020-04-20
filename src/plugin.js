import AppIcons from "./components/AppIcons.vue";
import AppShell from "./components/AppShell.vue";
import AppTitle from "./components/AppTitle.vue";
import AppMenu from "./components/AppMenu.vue";
import AppMenuItem from "./components/AppMenuItem.vue";
import AppPageLinks from "./components/AppPageLinks.vue";
import AppCard from "./components/AppCard.vue";
import AppCardOverview from "./components/AppCardOverview.vue";
import AppCalculatorInput from "./components/AppCalculator.vue";

import DateInput from "./components/DateInput.vue";
import DatePicker from "./components/DatePicker.vue";
import AppInput from "./components/AppInput.vue";
import InputField from "./components/InputField.vue";
import SliderInput from "./components/SliderInput.vue";
import MoneyInput from "./components/MoneyInput.vue";
import SliderRadio from "./components/SliderRadio.vue";
import ToggleSwitch from "./components/ToggleSwitch.vue";
import FullScreen from "./components/FullScreen.vue";
import FullScreenTrigger from "./components/FullScreenTrigger.vue";
import SlidePanel from "./components/SlidePanel.vue";

import { directive as clickOutside } from "v-click-outside";

import "./assets/css/dashboard.css";
import "./assets/css/inputs.css";
import "./assets/css/buttons.css";
import "./assets/css/cards.css";
import "./assets/css/calculator.css";
import "./assets/css/panels.css";
import "./assets/css/tags.css";
import "./assets/css/grids.css";
import "./assets/css/tables.css";
import "./assets/sass/index.scss";

const AppPlugin = {
  install(vue) {
    // Directives
    vue.directive("click-outside", clickOutside);

    // Filters
    vue.filter("percentage", function(value) {
      let val = value;
      if (typeof val !== "number") {
        val = parseFloat(val);
      }
      return val.toFixed(1);
    });

    vue.filter("currency", function(value) {
      let val = value;
      if (typeof val !== "number") {
        val = parseFloat(val);
      }
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });
      return formatter.format(val);
    });

    // Register components
    vue.component("app-icons", AppIcons);
    vue.component("app-shell", AppShell);
    vue.component("app-title", AppTitle);
    vue.component("app-menu", AppMenu);
    vue.component("app-page-links", AppPageLinks);
    vue.component("app-menu-item", AppMenuItem);
    vue.component("app-date-input", DateInput);
    vue.component("app-date-picker", DatePicker);
    vue.component("app-input-field", InputField);
    vue.component("app-input", AppInput);
    vue.component("app-slider-input", SliderInput);
    vue.component("app-slider-radio", SliderRadio);
    vue.component("app-money-input", MoneyInput);
    vue.component("app-toggle-switch", ToggleSwitch);
    vue.component("app-fullscreen", FullScreen);
    vue.component("app-fullscreen-trigger", FullScreenTrigger);
    vue.component("app-card", AppCard);
    vue.component("app-card-overview", AppCardOverview);
    vue.component("app-calculator-input", AppCalculatorInput);
    vue.component("app-slide-panel", SlidePanel);
  },
};

export {
  AppPlugin,
  AppIcons,
  AppShell,
  AppTitle,
  AppMenu,
  AppMenuItem,
  DateInput,
  DatePicker,
  InputField,
  SliderInput,
  SliderRadio,
  MoneyInput,
  ToggleSwitch,
  FullScreen,
};
