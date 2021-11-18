<script>
const BUILD_WITH_BEN = 'Build with Ben'
const OBSIDIAN_OFFICE_HOURS = 'Obsidian Office Hours'

export default {
  data: () => ({
    streamType: OBSIDIAN_OFFICE_HOURS,
    streamTopic: 'Adventures with Obsidian Buttons Plugin'
  }),
  computed: {
    streamLogo() {
      if (this.streamType === BUILD_WITH_BEN) {
        return '/img/dragon-avatar.png'
      } else {
        return '/img/bencodezen-circle.png'
      }
    }
  }
}
</script>

<template>
  <main>
    <footer class="footer">
      <img :src="streamLogo" alt="" class="footer-logo" />
      <div class="footer-text-wrapper">
        <p class="footer-text-title">{{ streamType }}: {{ streamTopic }}</p>
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
  font-size: 1.8rem;
  margin: 0;
}

.footer {
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  background-color: rgb(6, 6, 96);
  display: flex;
  align-items: center;
}

.footer-logo {
  max-width: 80px;
  padding: 0 1rem;
}
</style>
