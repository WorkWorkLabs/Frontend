<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    
    <div :class="bodyClasses">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hoverable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  rounded: 'lg',
  hoverable: false
})

const cardClasses = computed(() => {
  const baseClasses = ['card', 'transition-all duration-200']

  const variantClasses = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-transparent border-2 border-gray-300',
    ghost: 'bg-gray-50/50'
  }

  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  }

  const hoverClasses = props.hoverable 
    ? ['hover:shadow-xl hover:-translate-y-1 cursor-pointer']
    : []

  return [
    ...baseClasses,
    variantClasses[props.variant],
    roundedClasses[props.rounded],
    ...hoverClasses
  ].join(' ')
})

const bodyClasses = computed(() => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  return ['card-body', paddingClasses[props.padding]].join(' ')
})
</script>

<style scoped>
.card-header {
  @apply border-b border-gray-200 px-6 py-4;
}

.card-footer {
  @apply border-t border-gray-200 px-6 py-4;
}
</style>