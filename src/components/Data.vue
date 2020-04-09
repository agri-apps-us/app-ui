<template>
  <div>
      <input-field label="In Weight" hint="Choose the incoming weight of the cattle."
                :error="errors.weight">
        <template>
            <slider-input @input="handleInput($event)" small v-model="current" :minValue="0" :maxValue="1200" :step="10" />
        </template>
      </input-field>
      <input-field label="Gestation Period" 
                hint="Select the number of days in the gestation period."
                >
            <slider-input small :minValue="279" :maxValue="283" v-model="gestation" :allowInput="false" />
      </input-field>
      <input-field label="Favorite Letter" hint="Select your favorite letter">
        <slider-radio @input="setLetter" :options="['A', 'P', 'Z']" />
      </input-field>
        <input-field label="Agreement" hint="By selecting, you agree to our terms">
        <toggle-switch :round="true" :checked="true" @input="handleCheck" />
      </input-field>
      <money-input v-model="currency" />
      <app-input type="number" append="reports" medium>
      </app-input>

      <date-picker v-model="selectedDate" />

      <p>{{current}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, fugit odit odio quae obcaecati minima? Modi, nesciunt quae, possimus repudiandae ipsa alias dolorum eos nobis laborum cumque nemo sunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, fugit odit odio quae obcaecati minima? Modi, nesciunt quae, possimus repudiandae ipsa alias dolorum eos nobis laborum cumque nemo sunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, fugit odit odio quae obcaecati minima? Modi, nesciunt quae, possimus repudiandae ipsa alias dolorum eos nobis laborum cumque nemo sunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, fugit odit odio quae obcaecati minima? Modi, nesciunt quae, possimus repudiandae ipsa alias dolorum eos nobis laborum cumque nemo sunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, fugit odit odio quae obcaecati minima? Modi, nesciunt quae, possimus repudiandae ipsa alias dolorum eos nobis laborum cumque nemo sunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, fugit odit odio quae obcaecati minima? Modi, nesciunt quae, possimus repudiandae ipsa alias dolorum eos nobis laborum cumque nemo sunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, fugit odit odio quae obcaecati minima? Modi, nesciunt quae, possimus repudiandae ipsa alias dolorum eos nobis laborum cumque nemo sunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, fugit odit odio quae obcaecati minima? Modi, nesciunt quae, possimus repudiandae ipsa alias dolorum eos nobis laborum cumque nemo sunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, fugit odit odio quae obcaecati minima? Modi, nesciunt quae, possimus repudiandae ipsa alias dolorum eos nobis laborum cumque nemo sunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, fugit odit odio quae obcaecati minima? Modi, nesciunt quae, possimus repudiandae ipsa alias dolorum eos nobis laborum cumque nemo sunt.</p>
    
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue';
import SliderInput from '@/components/SliderInput.vue';
import SliderRadio from '@/components/SliderRadio.vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import MoneyInput from '@/components/MoneyInput.vue';
import AppInput from '@/components/AppInput.vue';
import DatePicker from '@/components/DatePicker.vue';

export default {
    data() {
        return {
            current: 450,
            gestation: 281,
            currency: 100,
            selectedDate: new Date(),
            errors: {

            }
        }
    },
    components: { SliderInput, InputField, SliderRadio, ToggleSwitch, MoneyInput, AppInput, DatePicker },
    methods: {
        handleInput(val) {
            console.log('e', val);
            if (val > 1100) {
                this.errors['weight'] = 'Select a weight less than 1100.';
            } else {
                this.errors['weight'] = ''
            }
        },
        setLetter(val) {
            console.log('value', val)
        },
        handleCheck(val) {
            console.log('check', val)
        }
    }
}
</script>

<style>

</style>