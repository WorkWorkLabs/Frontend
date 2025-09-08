<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :href="tag === 'a' ? href : undefined"
    :target="tag === 'a' ? target : undefined"
    @click="handleClick"
  >
    <span v-if="loading" class="loading-spinner" aria-hidden="true"></span>
    <slot v-else />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from '@/types'

interface Props extends ButtonProps {
  tag?: 'button' | 'a'
  href?: string
  target?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button',
  disabled: false,
  loading: false
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const buttonClasses = computed(() => {
  const baseClasses = [
    'inline-flex items-center justify-center font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-60 disabled:cursor-not-allowed'
  ]

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  }

  return [
    ...baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    props.loading && 'gap-2'
  ].filter(Boolean).join(' ')
})

const handleClick = (event: Event) => {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>

<style scoped>
.loading-spinner {
  @apply w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin;
}

.bg-primary {
  background-color: #00A1FF;
}

.bg-primary-dark {
  background-color: #0088CC;
}

.bg-secondary {
  background-color: #00375D;
}

.bg-secondary-dark {
  background-color: #002A47;
}

.text-primary {
  color: #00A1FF;
}

.border-primary {
  border-color: #00A1FF;
}

.focus\:ring-primary:focus {
  --tw-ring-color: #00A1FF;
}
</style>