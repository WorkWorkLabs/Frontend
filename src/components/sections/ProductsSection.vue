<template>
  <section id="products" class="products-section">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="section-header">
        <h2 class="section-title">Interim results</h2>
        <p class="section-description">
          WorkWork connect users with socially meaningful opportunities
        </p>
        
        <div class="carousel-container">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 50}%)` }">
            <div class="product-slide">
              <img src="/images/mastercard.svg" alt="Mastercard Product" />
            </div>
            <div class="product-slide">
              <img src="/images/growthos.svg" alt="Growth OS Product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const totalSlides = 2
let intervalId: number | null = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 3000) // 3秒切换一次
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.products-section {
  @apply bg-white;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

.section-header {
  @apply text-center mb-16;
}

.section-title {
  @apply text-4xl md:text-5xl font-bold text-primary mb-6;
}

.section-description {
  @apply text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed;
}

.carousel-container {
  width: 1000px;
  height: 500px;
  margin: 32px auto;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: 200%; /* 2张图片，所以是200% */
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.product-slide {
  width: 50%; /* 每张图片占50% */
  height: 100%;
  flex-shrink: 0;
}

.product-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

@media (max-width: 1024px) {
  .carousel-container {
    width: 90vw;
    max-width: 1000px;
    height: calc(90vw * 500 / 1000);
    max-height: 500px;
  }
}

@media (max-width: 768px) {
  .carousel-container {
    width: 95vw;
    height: calc(95vw * 500 / 1000);
  }
}

.text-primary {
  color: #00A1FF;
}
</style>