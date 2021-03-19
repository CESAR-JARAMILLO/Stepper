<template>
  <div class="stepper-content">
        <div class="card" v-if="$store.state.step === 1">
          <h2>Step 1</h2>
          <button v-on:click="$store.commit('addStep')">Next</button>
        </div>

      <form v-if="$store.state.step === 2">
          <h2 class="is-size-2">Add your name</h2>
          <p>You made agreat selection! Now lets add your name to it.</p>
          <label for="fname">First name</label>
          <input type="text" name="fname">
          <label for="lname">Last name</label>
          <input type="text" name="lname">

          <div class="btn-div">
            <button @click="$store.commit('removeStep')">Back</button>
            <button @click="$store.commit('addStep')">Next</button>
          </div>
        </form>

        <div class="card" v-if="$store.state.step === 3">
          <h2 class="is-size-2">Step 3</h2>
          <button>Next</button>
        </div>
  </div>
</template>

<script>
export default {
name: 'StepperContent',
}
</script>

<style>
.stepper-content {
    background-color: #F6F8FE;
    height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

form {
    height: 560px;
    width: 860px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
}
form h2 {
    /* width: 260px;
    height: 46px;*/
    font-weight: 700; 
    margin-top: 40px ;
    /* margin-bottom: -1rem; */
}

form p {
  font-size: 16px;
  color: #8F92A1;
  /* margin: 1rem; */
  margin-top: 10px;
}

form label {
  /* margin-bottom: -2rem; */
  margin-top: 38px;
  width: 636px;
  color: #60657D;
  font-size: 14px;
  /* text-align: left; */
} 

input {
  width: 636px;
  height: 58px;
  background: #F6F8FE;
  border: 1px solid #3050FE;
  border-radius: 5px;
  margin-top: 16px;
}

button {
    width: 160px;
    height: 60px;
    border-radius: 5px;
}

.btn-div {
  width: 636px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
</style>