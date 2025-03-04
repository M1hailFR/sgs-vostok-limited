<template>
  <button 
    :type="type"
    :disabled="disabled"
    :class="['base-button', variant]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value)
  }
})

defineEmits(['click'])
</script>

<style scoped lang="scss">
@use "sass:color";

.base-button {
  padding: 0.75rem 2rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.3s;
  color: white;

  &.primary {
    background-color: #4CAF50;
    &:hover {
      background-color: color.adjust(#4CAF50, $lightness: -10%);
    }
  }

  &.secondary {
    background-color: #2196F3;
    &:hover {
      background-color: color.adjust(#2196F3, $lightness: -10%);
    }
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
}
</style> 