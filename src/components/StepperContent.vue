<template>
  <div class="container">
      <h1>Step {{$store.state.step}}</h1>
      <div class="card" v-if="$store.state.step === 1"><h2>Step 1</h2><button v-on:click="$store.commit('addStep')">Next</button></div>
      <div class="card" v-if="$store.state.step === 2"><h2>Step 2</h2><button v-on:click="$store.commit('addStep')">Next</button></div>
      <div class="card" v-if="$store.state.step === 3"><h2>Step 3</h2><button v-on:click="$store.commit('addStep')">Next</button></div>
  </div>
</template>

<script>
export default {
name: 'StepperContent',
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