<template>
  <div class="calculator">
    <div class="calculator-screen-wrap">
        <input type="text" class="calculator-screen" value="" disabled v-model="displayValue" />
        <div class="calculator-screen-history">{{displayHistory}}</div>
    </div>
    <div class="calculator-keys">
      <button class="operator" value="+" @click="handleOperator('+')">+</button>
      <button class="operator minus-operator" value="+" @click="handleOperator('-')"><span>-</span></button>
      <button class="operator times-operator" value="+" @click="handleOperator('*')"><span>*</span></button>
      <button class="operator" value="+" @click="handleOperator('/')">/</button>

      <button @click="inputDigit(7)">7</button>
      <button @click="inputDigit(8)">8</button>
      <button @click="inputDigit(9)">9</button>

      <button @click="inputDigit(4)">4</button>
      <button @click="inputDigit(5)">5</button>
      <button @click="inputDigit(6)">6</button>

      <button @click="inputDigit(1)">1</button>
      <button @click="inputDigit(2)">2</button>
      <button @click="inputDigit(3)">3</button>

      <button @click="inputDigit(0)">0</button>
      <button class="decimal" value="." @click="inputDecimal('.')">.</button>
      <button class="all-clear" value="all-clear" @click="allClear">AC</button>

      <button class='equal-sign operator' value="=" @click="handleOperator('=')">=</button>
    </div>
  </div>
</template>

<script>

const performCalculations = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
}

export default {
    data() {
        return {
            displayValue: '0',
            displayHistory: '',
            resetHistory: false,
            firstOperand: null,
            waitingForSecondOperand: false,
            waitingForDigit: true,
            operator: null
        }
    },
    methods: {
        handleOperator(nextOperator) {
            const { firstOperand, displayValue, operator } = this;
            const inputValue = parseFloat(displayValue);

            if (this.resetHistory) {
                this.displayHistory = `(${this.displayHistory})`;
                this.resetHistory = false;
            }

            if (nextOperator !== '=') {
                if (['+', '-', '/', '*'].indexOf(this.displayHistory.slice(-1)) === -1) {
                    this.displayHistory += ` ${nextOperator} `;
                }                
            } else {
                this.resetHistory = true;
            }

            if (operator && this.waitingForSecondOperand) {
                this.operator = nextOperator;
                return;
            }
            if (firstOperand == null) {
                this.firstOperand = inputValue;
            } else if (operator) {
                const currentValue = firstOperand || 0;
                const result = performCalculations[operator](currentValue, inputValue);
                this.displayValue = String(result);
                this.firstOperand = result;
                this.$emit('input', parseFloat(result));
            }
            this.waitingForSecondOperand = true;
            this.operator = nextOperator;
        },
        inputDigit(digit) {
            const { displayValue, waitingForSecondOperand } = this;

            if (this.resetHistory) {
                this.displayHistory = '';
                this.resetHistory = false;
            }

            if (waitingForSecondOperand) {
                this.displayValue = digit;
                this.waitingForSecondOperand = false;
            } else {
                this.displayValue = `${displayValue}` === '0' 
                    ? digit : `${displayValue}${digit}`
            }
            this.displayHistory += digit;
        },
        inputDecimal(dot) {
            if (this.waitingForSecondOperand) return;
            if (!this.displayValue.includes(dot)) {
                this.displayValue += dot;
                this.displayHistory += dot;
            }
        },
        allClear() {
            this.displayValue = '0';
            this.displayHistory = '';
            this.firstOperand = null;
            this.waitingForSecondOperand = false;
            this.operator = null;
        }
    }
};
</script>

<style></style>
