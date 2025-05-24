<template>
  <component
    :is="as"
    :disabled="disabled"
    :loading="loading"
    :block="block"
    v-bind="$attrs"
    :class="[bgClasses, sizeClasses, variantClasses]"
    >
    <slot />
  </component>
</template>
<script setup lang="ts">
defineOptions({ name: 'GtButton' })
import { computed } from 'vue';
import { ButtonProps } from './button-types'
const {
  as = 'button',
  type = 'primary',
  size = 'medium',
  variant = 'solid',
  disabled = false,
  loading = false,
  block = false,
  icon = null
} = defineProps<ButtonProps>()
const bgClasses = computed(() => {
  return {
    'gt:bg-red-500': type === 'error',
    'gt:bg-green-500': type === 'success',
    'gt:bg-blue-500': type === 'info',
    'gt:bg-yellow-500': type === 'warning',
    'gt:bg-gray-500': type === 'neutral',
    'gt:bg-purple-500': type === 'primary',
    'gt:bg-orange-500': type === 'secondary'
  }
})
const sizeClasses = computed(() => {
  return {
    'gt:text-sm': size === 'small',
    'gt:text-base': size === 'medium',
    'gt:text-lg': size === 'large'
  }
})
const variantClasses = computed(() => {
  return {
    'gt:bg-red-500': variant === 'link',
    'gt:bg-green-500': variant === 'solid',
    'gt:bg-blue-500': variant === 'outline',
    'gt:bg-yellow-500': variant === 'soft',
  }
})
</script>