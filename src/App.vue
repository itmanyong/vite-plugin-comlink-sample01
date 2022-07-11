<!--
 * @FilePath: \vue-project\src\App.vue
 * @Author: itmanyong itmanyong@gmail.com
 * @CreateDate: Do not edit
 * @LastEditors: itmanyong itmanyong@gmail.com
 * @LastEditTime: 2022-07-11 01:35:00
 * @Description: 
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import CountVueJsx from './components/CountJsx'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <CountVueJsx />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
