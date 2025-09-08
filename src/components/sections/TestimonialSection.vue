<template>
  <section id="testimonials" class="testimonial-section">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="testimonial-content">
        <h3 class="testimonial-title">Digital Nomads' Reviews</h3>
        <p class="testimonial-intro">
          Work Work has won recognition from more and more digital nomads and
          nomadic communities by continuously building and improving the digital
          foundation of a global collaborative community.
        </p>

        <div class="carousel-container">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * 50}%)` }"
          >
            <div class="review-slide">
              <img src="/images/review1.svg" alt="Review 1" />
            </div>
            <div class="review-slide">
              <img src="/images/review2.svg" alt="Review 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const currentIndex = ref(0);
const totalSlides = 2;
let intervalId: number | null = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides;
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 3000); // 3秒切换一次
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
.testimonial-section {
  @apply bg-white;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  padding: 4rem 0;
}

.testimonial-content {
  @apply max-w-4xl mx-auto;
}

.testimonial-title {
  @apply text-3xl font-bold text-primary text-center mb-6;
}

.testimonial-intro {
  @apply text-lg text-gray-600 text-center mb-12 leading-relaxed;
}

.carousel-container {
  width: 1000px;
  height: 296px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: 200%; /* 2张图片，所以是200% */
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.review-slide {
  width: 50%; /* 每张图片占50% */
  height: 100%;
  flex-shrink: 0;
}

.review-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.text-primary {
  color: #00a1ff;
}

@media (max-width: 1024px) {
  .carousel-container {
    width: 90vw;
    max-width: 1000px;
    height: calc(90vw * 296 / 1000);
    max-height: 296px;
  }
}

@media (max-width: 768px) {
  .testimonial-title {
    @apply text-2xl;
  }

  .testimonial-intro {
    @apply text-base;
  }

  .carousel-container {
    width: 95vw;
    height: calc(95vw * 296 / 1000);
  }
}
</style>
