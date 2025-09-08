<template>
  <div class="base-input">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>
    
    <div class="relative">
      <input
        :id="id"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :class="inputClasses"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
      />
      
      <div v-if="$slots.suffix || loading" class="absolute inset-y-0 right-0 flex items-center pr-3">
        <div v-if="loading" class="loading-spinner"></div>
        <slot v-else name="suffix" />
      </div>
    </div>
    
    <p v-if="errorMessage" class="mt-2 text-sm text-red-600">
      {{ errorMessage }}
    </p>
    
    <p v-else-if="helpText" class="mt-2 text-sm text-gray-500">
      {{ helpText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
  id?: string
  label?: string
  type?: 'text' | 'email' | 'password' | 'tel' | 'url'
  placeholder?: string
  required?: boolean
  disabled?: boolean
  loading?: boolean
  errorMessage?: string
  helpText?: string
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  loading: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'blur': [event: FocusEvent]
  'focus': [event: FocusEvent]
}>()

const attrs = useAttrs()

const inputValue = computed({
  get: () => props.modelValue || '',
  set: (value: string) => emit('update:modelValue', value)
})

const inputClasses = computed(() => {
  const baseClasses = [
    'block w-full px-4 py-3 text-base border rounded-lg',
    'transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
    'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed'
  ]

  const errorClasses = props.errorMessage 
    ? ['border-red-300 focus:border-red-300 focus:ring-red-200']
    : ['border-gray-300 focus:border-primary']

  return [...baseClasses, ...errorClasses].join(' ')
})

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
.loading-spinner {
  @apply w-4 h-4 border-2 border-gray-300 border-t-primary rounded-full animate-spin;
}

.focus\:ring-primary:focus {
  --tw-ring-color: #00A1FF;
}

.focus\:border-primary:focus {
  border-color: #00A1FF;
}

.text-primary {
  color: #00A1FF;
}
</style>