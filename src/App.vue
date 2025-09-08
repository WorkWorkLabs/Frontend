<template>
  <div id="app" class="app">
    <AppHeader />
    
    <main class="main-content">
      <router-view />
    </main>
    
    <AppFooter />
    
    <!-- Loading overlay -->
    <Transition name="loading">
      <div v-if="loading" class="loading-overlay">
        <div class="loading-spinner">
          <div class="spinner"></div>
          <p class="loading-text">Loading...</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { loading } = storeToRefs(appStore)

// Responsive breakpoint detection
const updateBreakpoint = () => {
  const width = window.innerWidth
  if (width < 640) {
    appStore.setBreakpoint('sm')
  } else if (width < 768) {
    appStore.setBreakpoint('md')
  } else if (width < 1024) {
    appStore.setBreakpoint('lg')
  } else if (width < 1280) {
    appStore.setBreakpoint('xl')
  } else {
    appStore.setBreakpoint('2xl')
  }
}

// Handle window resize
const handleResize = () => {
  updateBreakpoint()
  // Close mobile menu on resize to desktop
  if (window.innerWidth >= 768) {
    appStore.closeMobileMenu()
  }
}

onMounted(() => {
  updateBreakpoint()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
/* Minimal global styles - Tailwind handles most */

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 64px; /* Account for fixed header */
}

/* Loading overlay */
.loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-spinner {
  text-align: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #00A1FF;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}

.loading-text {
  color: #6b7280;
  font-weight: 500;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Loading transitions */
.loading-enter-active,
.loading-leave-active {
  transition: all 0.3s ease;
}

.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}

/* Utility classes */
.container {
  max-width: 1200px;
}

/* Focus styles */
*:focus {
  outline: 2px solid #00A1FF;
  outline-offset: 2px;
}

/* Selection styles */
::selection {
  background-color: #00A1FF;
  color: white;
}

::-moz-selection {
  background-color: #00A1FF;
  color: white;
}

/* Scrollbar styles */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* Print styles */
@media print {
  .app-header,
  .app-footer,
  .loading-overlay {
    display: none !important;
  }
  
  .main-content {
    padding-top: 0 !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  body {
    background: white;
    color: black;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  html {
    scroll-behavior: auto;
  }
}
</style>