<script>
export default {}
</script>

<template>
  <main>
    <footer class="footer">
      <img src="/img/dragon-avatar.png" alt="" class="footer-logo" />
      <div class="footer-text-wrapper">
        <p class="footer-text-title">
          Build with Ben: Nuxt + AirTable Adventures (Part 2)
        </p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.footer-text-wrapper {
  display: flex;
  flex-direction: column;
  color: #fff;
}

.footer-text-title {
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
}

.footer {
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  background-color: rgb(6, 6, 96);
  display: flex;
  align-items: center;
}

.footer-logo {
  max-width: 50px;
  padding: 0 1rem;
}
</style>
