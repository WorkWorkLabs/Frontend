<template>
  <section id="newsletter" class="newsletter-section">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <form @submit.prevent="handleSubmit" class="newsletter-form">
        <div class="form-group">
          <BaseInput
            v-model="form.email"
            type="email"
            placeholder="Enter your email address"
            :error-message="emailError"
            :loading="isSubmitting"
            required
            class="email-input"
          />
        </div>
        <BaseButton
          type="submit"
          :loading="isSubmitting"
          :disabled="!form.email || !!emailError"
          variant="secondary"
          size="lg"
          class="submit-button"
        >
          Submit
        </BaseButton>
      </form>
      
      <Transition name="success-message">
        <div v-if="showSuccess" class="success-alert">
          <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span>Thank you! We'll be in touch soon.</span>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useFormValidation } from '@/composables/useFormValidation'
import type { NewsletterForm } from '@/types'

const form = ref<NewsletterForm>({
  email: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

// Form validation
const { errors, validateField } = useFormValidation({
  email: (value: string) => {
    if (!value) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email'
    return null
  }
})

const emailError = computed(() => errors.value.email)

// Watch for email changes and validate
watch(() => form.value.email, (newEmail) => {
  validateField('email', newEmail)
})

const handleSubmit = async () => {
  validateField('email', form.value.email)
  
  if (emailError.value) return
  
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    showSuccess.value = true
    form.value.email = ''
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
    
  } catch (error) {
    console.error('Failed to submit newsletter:', error)
    // Handle error (show error message, etc.)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.newsletter-section {
  @apply py-16 bg-primary text-center;
  background: linear-gradient(135deg, #00A1FF 0%, #0088CC 100%);
}

.newsletter-form {
  @apply flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto;
}

.form-group {
  @apply flex-1;
}

.email-input :deep(.base-input input) {
  @apply bg-white/95 border-white/20 text-gray-900 placeholder-gray-500;
}

.submit-button {
  @apply bg-secondary hover:bg-secondary-dark flex-shrink-0;
}

.success-alert {
  @apply mt-6 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg;
}

.success-message-enter-active,
.success-message-leave-active {
  transition: all 0.3s ease;
}

.success-message-enter-from,
.success-message-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.bg-primary {
  background-color: #00A1FF;
}

.bg-secondary {
  background-color: #00375D;
}

.hover\:bg-secondary-dark:hover {
  background-color: #002A47;
}
</style>