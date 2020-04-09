<template>
  <input type="date" ref="input"
    v-bind:value="dateToYYYYMMDD(value)"
    v-on:input="updateValue($event.target)"
    v-on:focus="selectAll" />
</template>

<script>
export default {
    props: {
        value: {
            type: [Date, String],
            default: new Date()
        }
    },
    methods: {
        dateToYYYYMMDD(date) {
            let isDate = date && date instanceof Date;
            if (!isDate) {
                return date.split('T')[0];
            }
            // may have timezone caveats https://stackoverflow.com/a/29774197/1850609
            return date && date.toISOString().split('T')[0];
        },
        updateValue: function (target) {
            this.$emit('input', target.valueAsDate)
        },
        selectAll: function (event) {
            // Workaround for Safari bug
            // https://stackoverflow.com/q/1269722/1850609
            setTimeout(function () {
                event.target.select();
            }, 0)
        }
    }
}
</script>

<style>

</style>