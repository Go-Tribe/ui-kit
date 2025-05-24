<template>
  <component
    :is="as"
    :disabled="disabled"
    :loading="loading"
    :block="block"
    v-bind="$attrs"
    :class="[bgClasses,sizeClasses, variantClasses, roundedClasses, blockClasses]"
    >
    <slot />
  </component>
</template>
<script setup lang="ts">
defineOptions({ name: 'GtButton' })
import { computed } from 'vue';
import { ButtonProps, ButtonVariant } from './button-types'
const {
  as = 'button',
  type = 'primary',
  size = 'md',
  rounded = 'md',
  variant = '',
  disabled = false,
  loading = false,
  block = false,
  color = ''
} = defineProps<ButtonProps>()
const bgClasses = computed(() => {
  if (color || variant) return {}
  return {
    'gt:bg-red-500 gt:text-white': type === 'error',
    'gt:bg-green-500 gt:text-white': type === 'success',
    'gt:bg-blue-500 gt:text-white': type === 'primary',
    'gt:bg-yellow-500 gt:text-white': type === 'warning',
    'gt:bg-gray-500 gt:text-white': type === 'neutral',
    'gt:bg-orange-500 gt:text-white': type === 'secondary'
  }
})
const sizeClasses = computed(() => {
  return {
    'gt:text-sm gt:px-2 gt:py-1': size === 'sm',
    'gt:text-base gt:px-4 gt:py-2': size === 'md',
    'gt:text-lg gt:px-6 gt:py-3': size === 'lg'
  }
})
const roundedClasses = computed(() => {
  return {
    'gt:rounded-sm': rounded === 'sm',
    'gt:rounded-md': rounded === 'md',
    'gt:rounded-lg': rounded === 'lg'
  }
})
const blockClasses = computed(() => {
  return {
    'gt:w-full': block
  }
})
const solidClasses = computed(() => {
  return {
    'gt:bg-red-500 gt:text-white': color === 'error',
    'gt:bg-green-500 gt:text-white': color === 'success',
    'gt:bg-blue-500 gt:text-white': color === 'primary',
    'gt:bg-yellow-500 gt:text-white': color === 'warning',
    'gt:bg-gray-500 gt:text-white': color === 'neutral',
    'gt:bg-orange-500 gt:text-white': color === 'secondary'
  }
})
const outlineClasses = computed(() => {
  return {
    'gt:bg-red-100 gt:text-red-500 gt:border-red-500 gt:border': color === 'error',
    'gt:bg-green-100 gt:text-green-500 gt:border-green-500 gt:border': color === 'success',
    'gt:bg-blue-100 gt:text-blue-500 gt:border-blue-500 gt:border': color === 'primary',
    'gt:bg-yellow-100 gt:text-yellow-500 gt:border-yellow-500 gt:border': color === 'warning',
    'gt:bg-gray-100 gt:text-gray-500 gt:border-gray-500 gt:border': color === 'neutral',
    'gt:bg-orange-100 gt:text-orange-500 gt:border-orange-500 gt:border': color === 'secondary'
  }
})
const softClasses = computed(() => {
  return {
    'gt:bg-red-100 gt:text-red-500': color === 'error',
    'gt:bg-green-100 gt:text-green-500': color === 'success',
    'gt:bg-blue-100 gt:text-blue-500': color === 'primary',
    'gt:bg-yellow-100 gt:text-yellow-500': color === 'warning',
    'gt:bg-gray-100 gt:text-gray-500': color === 'neutral',
    'gt:bg-orange-100 gt:text-orange-500': color === 'secondary'
  }
})
const subtleClasses = computed(() => {
  return {
    'gt:bg-red-100 gt:text-red-500 gt:border-red-500 gt:border': color === 'error',
    'gt:bg-green-100 gt:text-green-500 gt:border-green-500 gt:border': color === 'success',
    'gt:bg-blue-100 gt:text-blue-500 gt:border-blue-500 gt:border': color === 'primary',
    'gt:bg-yellow-100 gt:text-yellow-500 gt:border-yellow-500 gt:border': color === 'warning',
    'gt:bg-gray-100 gt:text-gray-500 gt:border-gray-500 gt:border': color === 'neutral',
    'gt:bg-orange-100 gt:text-orange-500 gt:border-orange-500 gt:border': color === 'secondary'
  }
})
const ghostClasses = computed(() => {
  return {
    'gt:text-red-500': color === 'error',
    'gt:text-green-500': color === 'success',
    'gt:text-blue-500': color === 'primary',
    't:text-yellow-500': color === 'warning',
    'gt:text-gray-500': color === 'neutral',
    'gt:text-orange-500': color === 'secondary'
  }
})
const linkClasses = computed(() => {
  return {
    'gt:text-red-500': color === 'error',
    'gt:text-green-500': color === 'success',
    'gt:text-blue-500': color === 'primary',
    't:text-yellow-500': color === 'warning',
    'gt:text-gray-500': color === 'neutral',
    'gt:text-orange-500': color === 'secondary'
  }
})
const variantClasses = computed(() => {
  if (variant === ButtonVariant.solid) {
      return solidClasses.value
  }
  if (variant === ButtonVariant.outline) {
    return outlineClasses.value
  }
  if (variant === ButtonVariant.soft) {
    return softClasses.value
  }
  if (variant === ButtonVariant.subtle) {
    return subtleClasses.value
  }
  if (variant === ButtonVariant.ghost) {
    return ghostClasses.value
  }
  if (variant === ButtonVariant.link) {
    return linkClasses.value
  }
  return {}
})
</script>