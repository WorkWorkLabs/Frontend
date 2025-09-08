<template>
  <section id="stats" class="stats-section">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="section-header">
        <h2 class="section-title">Community norms and development</h2>
        <p class="section-description">
          The WorkWork community brings together remote workers and independent
          individuals from around the world to create a free, flexible, and
          mutually supportive global home under the concept of "Work everywhere,
          Work anytime, WorkWork".
        </p>
      </div>

      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.id" class="stat-item">
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Testimonial -->
      <div class="testimonial-section">
        <h3 class="testimonial-title">Digital Nomads' Reviews</h3>
        <p class="testimonial-intro">
          WorkWork has won recognition from more and more digital nomads and
          nomadic communities by continuously building and improving the digital
          foundation of a global collaborative community.
        </p>

        <BaseCard
          variant="elevated"
          padding="lg"
          rounded="xl"
          class="testimonial-card"
        >
          <blockquote class="testimonial-content">
            <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <footer class="testimonial-author">
              <div class="author-info">
                <cite class="author-name">@ {{ testimonial.author.name }}</cite>
                <p class="author-title">{{ testimonial.author.title }}</p>
              </div>
            </footer>
          </blockquote>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import BaseCard from "@/components/base/BaseCard.vue";
import { useContentStore } from "@/stores/content";

const contentStore = useContentStore();
const { stats, testimonial } = storeToRefs(contentStore);
</script>

<style scoped>
.stats-section {
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
  @apply text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed;
}

.stats-grid {
  @apply flex justify-center gap-16 mb-20;
}

.stat-item {
  @apply text-center;
}

.stat-number {
  @apply text-5xl font-bold text-primary mb-2;
}

.stat-label {
  @apply text-lg text-gray-600;
}

.testimonial-section {
  @apply max-w-4xl mx-auto;
}

.testimonial-title {
  @apply text-3xl font-bold text-primary text-center mb-6;
}

.testimonial-intro {
  @apply text-lg text-gray-600 text-center mb-12 leading-relaxed;
}

.testimonial-card {
  @apply max-w-3xl mx-auto;
}

.testimonial-content {
  @apply text-center;
}

.testimonial-quote {
  @apply text-2xl font-bold text-primary mb-6;
}

.testimonial-text {
  @apply text-lg text-gray-700 leading-relaxed mb-8;
}

.testimonial-author {
  @apply border-t border-gray-200 pt-6;
}

.author-info {
  @apply space-y-1;
}

.author-name {
  @apply text-lg font-bold text-gray-900 not-italic;
}

.author-title {
  @apply text-sm text-gray-600;
}

.text-primary {
  color: #00a1ff;
}

@media (max-width: 768px) {
  .stats-grid {
    @apply flex-col gap-8;
  }

  .stat-number {
    @apply text-4xl;
  }
}
</style>
