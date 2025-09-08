import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { AppConfig, Breakpoint } from '@/types'

export const useAppStore = defineStore('app', () => {
  // State
  const loading = ref(false)
  const mobileMenuOpen = ref(false)
  const currentBreakpoint = ref<Breakpoint>('lg')

  // App configuration
  const config = ref<AppConfig>({
    title: 'WorkWork - Global Remote Work Ecosystem',
    description: 'Building a global remote work ecosystem for digital nomads, remote workers, freelancers, and super individuals.',
    url: 'https://workwork.works',
    social: [
      { platform: 'twitter', url: 'https://x.com/WorkWorkOrg' },
      { platform: 'github', url: 'https://github.com/workwork' }
    ]
  })

  // Getters
  const isMobile = computed(() => ['xs', 'sm'].includes(currentBreakpoint.value))
  const isTablet = computed(() => currentBreakpoint.value === 'md')
  const isDesktop = computed(() => ['lg', 'xl', '2xl'].includes(currentBreakpoint.value))

  // Actions
  const setLoading = (value: boolean) => {
    loading.value = value
  }

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    mobileMenuOpen.value = false
  }

  const setBreakpoint = (breakpoint: Breakpoint) => {
    currentBreakpoint.value = breakpoint
  }

  const updateConfig = (newConfig: Partial<AppConfig>) => {
    config.value = { ...config.value, ...newConfig }
  }

  return {
    // State
    loading,
    mobileMenuOpen,
    currentBreakpoint,
    config,
    
    // Getters
    isMobile,
    isTablet,
    isDesktop,
    
    // Actions
    setLoading,
    toggleMobileMenu,
    closeMobileMenu,
    setBreakpoint,
    updateConfig
  }
})