import AppIcons from './components/AppIcons.vue';
import AppShell from './components/AppShell.vue';
import AppTitle from './components/AppTitle.vue';
import AppMenu from './components/AppMenu.vue';
import AppMenuItem from './components/AppMenuItem.vue';

import DateInput from './components/DateInput.vue';
import DatePicker from './components/DatePicker.vue';
import InputField from './components/InputField.vue';
import SliderInput from './components/SliderInput.vue';
import MoneyInput from './components/MoneyInput.vue';
import SliderRadio from './components/SliderRadio.vue';
import ToggleSwitch from './components/ToggleSwitch.vue';
import FullScreen from './components/FullScreen.vue';

import './assets/css/dashboard.css';
import './assets/css/inputs.css';
import './assets/css/buttons.css';

const AppPlugin = {
    install(vue, ) {

        // Register components
        vue.component('app-icons', AppIcons);
        vue.component('app-shell', AppShell);
        vue.component('app-title', AppTitle);
        vue.component('app-menu', AppMenu);
        vue.component('app-menu-item', AppMenuItem);
        vue.component('app-date-input', DateInput);
        vue.component('app-date-picker', DatePicker);
        vue.component('app-input-field', InputField);
        vue.component('app-slider-input', SliderInput);
        vue.component('app-slider-radio', SliderRadio);
        vue.component('app-money-input', MoneyInput);
        vue.component('app-toggle-switch', ToggleSwitch);
        vue.component('app-fullscreen', FullScreen);
    }
}

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
    FullScreen
}