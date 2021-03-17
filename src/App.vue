<template>
  <div id="app">
    <Navbar />
    <StepperContent />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import StepperContent from './components/StepperContent'

export default {
  name: 'App',
  components: {
    Navbar,
    StepperContent
  }
}
</script>

<style>
</style>
