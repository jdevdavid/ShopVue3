<template>
  <div class="number">
    <button class="number-minus" type="button" onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();">-</button>
    <input type="number" min="0" value="1" readonly>
    <button class="number-plus" type="button" onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();">+</button>
  </div>
</template>

<script>
export default {
name: "MyInput"
}
</script>

<style scoped>
.number {
  display: inline-block;
  position: relative;
  width: 80px;
}
.number input[type="number"] {
  display: block;
  height: 25px;
  line-height: 20px;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  /*appearance: textfield;*/
}
.number input[type="number"]::-webkit-outer-spin-button,
.number input[type="number"]::-webkit-inner-spin-button {
  display: none;
}
.number-minus {
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  width: 14px;
  padding: 0;
  display: block;
  text-align: center;
  border: none;
  border-right: 1px solid #ddd;
  font-size: 12px;
  font-weight: 600;
}
.number-plus {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  width: 14px;
  padding: 0;
  display: block;
  text-align: center;
  border: none;
  border-left: 1px solid #ddd;
  font-size: 16px;
  font-weight: 600;
}
</style>