<template>
  <ul class="stepper-container">
      <li>
        <div class="circle active"><p>1</p></div>
        <div>Choose template</div>
      </li>
      <hr>
      <li>
        <div class="circle">2</div>
        <div>Enter your details</div>
      </li>
      <hr>
      <li>
        <div class="circle">3</div>
        <div>Download resume</div>
      </li>
    </ul>
</template>

<script>
export default {
name: 'Stepper'
}
</script>

<style scoped>
.stepper-container {
  text-align: center;
  font-size: 1.25rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.stepper-container div {
  display: inline-block;
  margin-left: 1.25rem;
}
/* .stepper-container li {
  display: inline-block;
  margin-left: 1.25rem;
} */
.circle {
  border-radius: 50%;
  color: #8F92A1;
  background-color: #E0E0E5;
  font-weight: 500;
  line-height: 2.5rem;
  height: 2.5rem;
  width: 2.5rem;
}
hr {
  width: 3.75rem;
  margin-left: 1.50rem;
  border: 1px solid #E0E0E5;
}
.active {
  background-color: #01CBFF;
  color: white;
}
</style>