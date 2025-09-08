<template>
  <BaseCard
    variant="elevated"
    padding="md"
    rounded="lg"
    hoverable
    class="team-member-card"
  >
    <div class="member-content text-center">
      <div class="member-avatar">
        <div class="avatar-placeholder">
          {{ getInitials(member.name) }}
        </div>
      </div>
      
      <h3 class="member-name">{{ member.name }}</h3>
      <p class="member-title">{{ member.title }}</p>
      
      <div v-if="member.social && member.social.length > 0" class="member-social">
        <a
          v-for="social in member.social"
          :key="social.platform"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <component :is="getSocialIcon(social.platform)" class="w-4 h-4" />
        </a>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue'
import type { TeamMember } from '@/types'

interface Props {
  member: TeamMember
}

const props = defineProps<Props>()

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const getSocialIcon = (platform: string): string => {
  // In a real app, you'd return the actual icon component
  // For now, returning a placeholder
  return 'div'
}
</script>

<style scoped>
.team-member-card {
  @apply transition-all duration-300 hover:shadow-xl hover:-translate-y-2;
}

.member-content {
  @apply space-y-4;
}

.member-avatar {
  @apply mx-auto mb-4;
}

.avatar-image {
  @apply w-20 h-20 rounded-full object-cover mx-auto;
}

.avatar-placeholder {
  @apply w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto;
}

.member-name {
  @apply text-lg font-bold text-gray-900;
}

.member-title {
  @apply text-sm text-gray-600 leading-relaxed;
}

.member-social {
  @apply flex justify-center space-x-3;
}

.social-link {
  @apply text-gray-400 hover:text-primary transition-colors;
}

.bg-primary {
  background-color: #00A1FF;
}

.hover\:text-primary:hover {
  color: #00A1FF;
}
</style>