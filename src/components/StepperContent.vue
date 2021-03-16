<template>
  <div class="container">
      <h1>Step {{step}}</h1>
      <div class="card" v-if="step === 0"><h2>Step 1</h2><button v-on:click='addStep'>Next</button></div>
      <div class="card" v-if="step === 1"><h2>Step 2</h2><button v-on:click='addStep'>Next</button></div>
      <div class="card" v-if="step === 2"><h2>Step 3</h2><button v-on:click='addStep'>Next</button></div>
  </div>
</template>

<script>
export default {
name: 'StepperContent',
data() {
    return {
        step: 0
    }
},
methods: {
    addStep() {
        this.step += 1
    }
}
}
</script>

<style>
.container {
    background-color: grey;
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    height: 200px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>