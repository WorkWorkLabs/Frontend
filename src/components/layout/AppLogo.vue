<template>
  <div class="app-logo" :data-size="size" :data-variant="variant">
    <div class="logo-content">
      <!-- Logo Icon -->
      <div class="logo-icon">
        <img src="/images/logo&favicon.svg" alt="WorkWork Logo" class="logo-image" />
      </div>
      <div class="logo-text">
        <img src="/images/brandname.svg" alt="WorkWork" class="brand-name" />
        <span v-if="showTagline" class="logo-tagline">Everywhere, Anytime</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  showTagline?: boolean
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  showTagline: false,
  variant: 'light',
  size: 'md'
})
</script>

<style scoped>
.app-logo {
  @apply flex items-center;
}

.logo-content {
  @apply flex items-center gap-3;
}

.logo-icon {
  @apply flex-shrink-0;
}

.logo-image {
  @apply w-8 h-8;
}

.logo-text {
  @apply flex flex-col;
}

.brand-name {
  @apply h-6;
}

.logo-tagline {
  @apply text-xs text-gray-500 -mt-1;
}

/* Size variants */
.app-logo[data-size="sm"] .logo-image {
  @apply w-6 h-6;
}

.app-logo[data-size="sm"] .brand-name {
  @apply h-5;
}

.app-logo[data-size="lg"] .logo-image {
  @apply w-10 h-10;
}

.app-logo[data-size="lg"] .brand-name {
  @apply h-8;
}

/* Dark variant */
.app-logo[data-variant="dark"] .logo-main {
  @apply text-white;
}

.app-logo[data-variant="dark"] .logo-tagline {
  @apply text-gray-300;
}

.text-primary {
  color: #00A1FF;
}
</style>