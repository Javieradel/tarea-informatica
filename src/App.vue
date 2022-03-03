<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="bloc">
    <router-view></router-view>
  </div>
</template>
<script setup>

</script>
<style lang="scss">
$black: #323232;
@font-face {
  font-family: 'Yagi';
  src: url('/assets/Yagitudeh.otf');
  font-weight: 600;
}
body{
  background-color: whitesmoke;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  .bloc{
    position: relative ;
    h1{
      font-family: 'Yagi';
      font-size: 44px;
    }
    width: 300px;
    height: 300px;
    margin: 45px auto;
    background-color: white;
    background-image: repeating-linear-gradient(to bottom, rgba($black, .5) 0px 1px, transparent 1px 20px);
    border-top: 20px solid pink;
    border-image-source: url('/assets/libreta.svg');
    border-image-slice: 30 30;
    border-image-repeat: round;
  }
}
input[type="text"]{
  border: none;
  outline: none;
}
.mini{
  width: 181px !important;
  height: 181px !important;
}
.btn,button{
  background-image: url('/assets/Vector-1.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  min-height: 34px;
  width: 140px;
  color: white;
}</style>
