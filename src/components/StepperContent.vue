<template>
  <div class="stepper-content">
        <div class="card" v-if="$store.state.step === 1">
          <h2>Step 1</h2>
          <button v-on:click="$store.commit('addStep')">Next</button>
        </div>

      <form v-if="$store.state.step === 2 && !nameEntered">
          <h2 class="is-size-2">Add your name</h2>
          <p>You made agreat selection! Now lets add your name to it.</p>
          <label for="fname">First name</label>
          <input type="text" name="fname">
          <label for="lname">Last name</label>
          <input type="text" name="lname">

          <div class="btn-div">
            <a @click="$store.commit('removeStep')">BACK</a>
            <a class="continue" @click="nameEnteredTrue">CONTINUE</a>
          </div>
        </form>

        <form class="contact-card" v-if="nameEntered">
          <h2 class="is-size-2">Supply contact information</h2>
          <p>It’s important to let employers know how to contact you. Enter your phone number and email address below.</p>
          
          <label for="email">Email address</label>
          <input type="email" name="email" placeholder="Enter email adress">

          <div class="btn-div">
            <a @click="nameEnteredFalse">BACK</a>
            <a class="free-account">CREATE A FREE ACCOUNT</a>
          </div>
        </form>
  </div>
</template>

<script>
export default {
name: 'StepperContent',
data() {
  return {
    nameEntered: false
  }
},
methods : {
  nameEnteredTrue() {
    this.nameEntered = true
  },
  nameEnteredFalse() {
    this.nameEntered = false
  }
}
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
  width: 526px;
  text-align: center;
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

a {
    width: 160px;
    height: 60px;
    border-radius: 5px;
    border: 1px solid #3050FE;
    display: flex;
    justify-content: center;
    /* align-content: center; */
    flex-direction: column;
    text-align: center;
    color: #3050FE;
}

.continue {
  background: #3050FE;
  color: #FFF;
}

.free-account {
  width: 272px;
  background: #3050FE;
  color: #FFF;
}

.btn-div {
  width: 636px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.contact-card label {
  margin-top: 88px;
}

.contact-card .btn-div {
  margin-top: 96px;
}
</style>