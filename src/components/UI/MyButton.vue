<template>
  <button class="btn" >
    <slot></slot>
  </button>
</template>

<script>
export default {
name: "MyButton"
}
</script>

<style scoped>
.btn{
  /*margin-top: 15px;*/
  padding: 10px 15px;
  background: none;
  color: #4382b8;
  border: 1px solid #4382b8;
}
.btn:hover{
  background: #bebebe;
}
</style>