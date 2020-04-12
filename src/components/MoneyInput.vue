<template>
  <div class="money-input">
        <span class="currency">{{symbol}}</span>
        <input
            type="text"
            @focus="isInputActive = true" 
            @blur="isInputActive = false" 
            v-model="displayValue" />
        <a href="javascript:void(0)" @click="showCalculator = !showCalculator">
            <svg viewBox="0 0 1792 1792">
                <path d="M384 1536q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm384 0q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm-384-384q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm768 384q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm-384-384q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm-384-384q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm768 384q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm-384-384q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm768 768v-384q0-52-38-90t-90-38-90 38-38 90v384q0 52 38 90t90 38 90-38 38-90zm-384-768q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm384-320v-256q0-26-19-45t-45-19h-1280q-26 0-45 19t-19 45v256q0 26 19 45t45 19h1280q26 0 45-19t19-45zm0 320q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm128-640v1536q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1536q0-52 38-90t90-38h1408q52 0 90 38t38 90z"/>
            </svg>
        </a>
        <div v-if="showCalculator" class="money-input-calculator" v-click-outside="onClickOutside">
            <app-calculator @input="setValue"/>
        </div>
    </div>
</template>

<script>
import AppCalculator from './AppCalculator.vue';
import vClickOutside from 'v-click-outside';

export default {
    props: {
        value: {
            type: Number
        },
        symbol: {
            type: String,
            default: "$"
        }
    },
    directives: {
        clickOutside: vClickOutside.directive
    },
    components: {
        AppCalculator
    },
    data() {
        return {
            isInputActive: false,
            showCalculator: false
        }
    },
    computed: {
        displayValue: {
            get: function() {
                if (this.isInputActive) {
                    // Cursor is inside the input field. unformat display value for user
                    return this.value.toString()
                } else {
                    // User is not modifying now. Format display value for user interface
                    return this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
                }
            },
            set: function(modifiedValue) {
                // Recalculate value after ignoring "$" and "," in user input
                let newValue = parseFloat(modifiedValue.replace(/[^\d\\.]/g, ""))
                // Ensure that it is not NaN
                if (isNaN(newValue)) {
                    newValue = 0
                }
                // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
                // $emit the event so that parent component gets it
                this.$emit('input', newValue)
            }
        }
    },
    methods: {
        handleKeyup(e) {
            e.target.value = this.formatValue(e.target.value);

        },
        formatValue(num) {
            if (!num) { return '' }
            num = parseInt(num, 10);
            return num.toLocaleString("en-US");
        },
        setValue(val) {
            this.displayValue = `${val}`;
        },
        onClickOutside() {
            this.showCalculator = false;
        }
    },
    mounted() {
        this.val = this.$props.value || 0;
    },
    watch: {
        value(newVal) {
            this.val = this.formatValue(newVal);
        }
    }
}
</script>

<style>

</style>