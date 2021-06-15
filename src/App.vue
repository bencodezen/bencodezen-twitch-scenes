<template>
  <router-view />
</template>

<script setup></script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Rubik', sans-serif;
}

.footer {
  width: 100%;
  height: 140px;
  position: absolute;
  bottom: 0;
  background-color: rgb(6, 6, 96);
  display: flex;
  align-items: center;
}

.footer-logo {
  max-width: 125px;
  padding: 0 1rem;
}
</style>
