<template>
  <div class="app-date-picker">
    <app-input
      type="text"
      :append="true"
      @focus="
        show = true;
        isInputActive = true;
      "
      small
      @blur="isInputActive = false"
      :readonly="true"
      v-model="displayValue"
    >
      <svg
        @click="show = !show"
        class="cursor"
        slot="append"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    </app-input>
    <div v-if="show" class="app-date-picker-drop">
      <div
        v-if="mode === 'year'"
        class="grid grid-2col"
        @click="mode = 'month'"
      >
        <button
          @click="selectedYear = year"
          style="margin: 0 3px;"
          v-for="year in years"
          :key="year"
        >
          {{ year }}
        </button>
      </div>
      <div v-if="mode === 'year'" class="grid grid-2col">
        <button @click="yearOffset = yearOffset - 1">🡐</button>
        <button @click="yearOffset = yearOffset + 1">🡒</button>
      </div>
      <div v-if="mode === 'month'" class="grid grid-2col" @click="mode = 'day'">
        <button
          @click="selectedMonth = month.month"
          style="margin: 0 3px;"
          v-for="month in months"
          :key="month.month"
        >
          {{ month.label }}
        </button>
      </div>
      <div v-if="mode === 'day'" class="grid grid-4col">
        <button
          @click="
            selectedDay = day;
            show = false;
          "
          style="margin: 0 3px;"
          v-for="day in days"
          :key="day"
        >
          {{ day }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from "./AppInput.vue";

const monthData = [
  { month: 1, label: "Jan", days: 31 },
  { month: 2, label: "Feb", days: 28 },
  { month: 3, label: "Mar", days: 31 },
  { month: 4, label: "Apr", days: 30 },
  { month: 5, label: "May", days: 31 },
  { month: 6, label: "Jun", days: 30 },
  { month: 7, label: "July", days: 31 },
  { month: 8, label: "Aug", days: 31 },
  { month: 9, label: "Sep", days: 30 },
  { month: 10, label: "Oct", days: 31 },
  { month: 11, label: "Nov", days: 30 },
  { month: 12, label: "Dec", days: 31 },
];

export default {
  components: { AppInput },
  props: {
    value: {
      type: [Date, String],
      default() {
        return new Date();
      },
    },
  },
  data() {
    return {
      show: false,
      isInputActive: false,
      mode: "year",
      selectedYear: 0,
      selectedMonth: 0,
      selectedDay: 0,
      yearOffset: 0,
    };
  },
  computed: {
    years() {
      let currentYear = new Date().getFullYear() - 1;

      if (this.yearOffset !== 0) {
        currentYear = currentYear + this.yearOffset * 10;
      }

      return Array.from(Array(10), (_, index) => currentYear + index + 1);
    },
    months() {
      return monthData;
    },
    days() {
      let match = monthData.filter((x) => x.month === this.selectedMonth)[0];
      if (match) {
        let daysArr = Array.from(Array(match.days), (_, index) => index + 1);
        let isLeapYear =
          this.selectedYear % 100 === 0
            ? this.selectedYear % 400 === 0
            : this.selectedYear % 4 === 0;
        if (match.month === 2 && isLeapYear) {
          daysArr.push(29);
        }

        return daysArr;
      }
      let daysArr = Array.from(Array(31), (_, index) => index + 1);

      return daysArr;
    },
    displayValue: {
      get: function() {
        return `${this.selectedYear}-${`0${this.selectedMonth}`.slice(
          -2
        )}-${`0${this.selectedDay}`.slice(-2)}`;
      },
      set: function(modifiedValue) {
        this.$emit("input", modifiedValue);
      },
    },
  },
  methods: {
    dateToYYYYMMDD(date) {
      let isDate = date && date instanceof Date;
      if (!isDate) {
        return date.split("T")[0];
      }
      // may have timezone caveats https://stackoverflow.com/a/29774197/1850609
      return date && date.toISOString().split("T")[0];
    },
  },
  mounted() {
    if (this.$props.value) {
      if (this.$props.value instanceof Date) {
        this.selectedYear = this.$props.value.getFullYear();
        this.selectedMonth = this.$props.value.getMonth() + 1;
        this.selectedDay = this.$props.value.getDate();
      } else {
        // string
        let parts = this.$props.value.split('-');
        if (parts.length !== 3) {
          parts = this.$props.value.split('/');
        }

        if (parts.length === 3) {
          this.selectedYear = parts[0].length === 4 
              ? parseInt(parts[0]) : parseInt(parts[2]);
          this.selectedMonth = parseInt(parts[1]);
          this.selectedDay = parts[0].length === 4
              ? parseInt(parts[2]) : parseInt(parts[0]);
        }        
      }
    }
  },
  watch: {
    show(newVal) {
      if (!newVal) {
        this.mode = "year";
      }
    },
    displayValue(newVal ) {
      if (this.selectedYear && this.selectedMonth && this.selectedDay) {
        this.$emit('input', newVal);
      }
    }
  },
};
</script>

<style></style>
