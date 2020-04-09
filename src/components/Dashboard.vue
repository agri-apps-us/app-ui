<template>
  <div>
      <full-screen>
        <template v-slot:header="{exit}">
            You are in fullscreen mode!
            <button class="button rounded primary ucase" @click="exit">exit</button>
        </template>
        <h2>Dashboard</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel modi recusandae dicta nesciunt laudantium placeat quaerat minima illo possimus quibusdam! Error recusandae iure harum eligendi inventore, dignissimos accusamus atque quaerat.</p>
      </full-screen>

      <full-screen>
      <div class="grid grid-4col" style="padding-top: 40px;">
        <button class="button">DEFAULT</button>
        <button class="button outlined">OUTLINED</button>
        <button class="button secondary">SECONDARY</button>
        <button class="button primary">PRIMARY</button>
        <button class="button primary outlined">PRIMARY OUTLINED</button>
        <button class="button danger">DANGER</button>
        <button class="button danger outlined">DANGER OUTLINED</button>
        <button class="button secondary outlined">SECONDARY OUTLINED</button>

      </div>
      </full-screen>
  </div>
</template>

<script>
import FullScreen from '@/components/FullScreen.vue';

export default {
  components: { FullScreen }
}
</script>

<style>

</style>