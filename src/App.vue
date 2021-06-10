<template>
  <main>
    <footer class="footer">
      <img src="/img/bencodezen-circle.png" alt="" class="footer-logo" />
      <p class="footer-title">Obsidian Office Hours — Session #3</p>
    </footer>
  </main>
</template>

<script setup></script>

<style>
html,
body {
  padding: 0;
  margin: 0;
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

.footer-title {
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  font-family: 'Rubik', sans-serif;
}
</style>
