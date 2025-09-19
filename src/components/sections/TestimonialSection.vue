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

        <div class="carousel-container" v-if="reviews.length > 0">
          <div
            class="carousel-track"
            :style="{ 
              transform: `translateX(-${currentIndex * (100 / reviews.length)}%)`,
              width: `${reviews.length * 100}%`
            }"
          >
            <div 
              v-for="review in reviews"
              :key="review.id"
              class="review-slide"
              :style="{ width: `${100 / reviews.length}%` }"
            >
              <img :src="review.image" :alt="review.alt" />
            </div>
          </div>
        </div>
        
        <!-- 指示条 - 只有多于1张图片时才显示 -->
        <div 
          v-if="reviews.length > 1"
          class="carousel-indicators"
        >
          <button
            v-for="(review, index) in reviews"
            :key="review.id"
            :class="['indicator', { active: currentIndex === index }]"
            @click="goToSlide(index)"
            :aria-label="`Go to review ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { storeToRefs } from 'pinia'
import { useContentStore } from '@/stores/content'

const contentStore = useContentStore()
const { reviews } = storeToRefs(contentStore)

const currentIndex = ref(0);
let intervalId: number | null = null;

// 动态计算总张数
const totalSlides = computed(() => reviews.value.length)

const nextSlide = () => {
  if (totalSlides.value > 1) {
    currentIndex.value = (currentIndex.value + 1) % totalSlides.value;
  }
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
  // 重置自动轮播
  if (intervalId) {
    clearInterval(intervalId);
  }
  // 只有多于1张图片时才自动轮播
  if (totalSlides.value > 1) {
    intervalId = setInterval(nextSlide, 3000);
  }
};

const startAutoPlay = () => {
  // 只有多于1张图片时才启动自动轮播
  if (totalSlides.value > 1) {
    intervalId = setInterval(nextSlide, 3000);
  }
}

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
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
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.review-slide {
  height: 100%;
  flex-shrink: 0;
}

.review-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 指示条样式 */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: #d1d5db;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.indicator:hover {
  background-color: #9ca3af;
  transform: scale(1.1);
}

.indicator.active {
  background-color: #00a1ff;
  transform: scale(1.2);
}

.indicator:focus {
  outline: 2px solid #00a1ff;
  outline-offset: 2px;
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
