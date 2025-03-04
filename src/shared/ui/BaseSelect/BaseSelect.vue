<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <select 
      :id="id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :disabled="disabled"
    >
      <option value="">{{ placeholder }}</option>
      <option 
        v-for="option in options" 
        :key="option.id" 
        :value="option.id"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: 'Выберите значение'
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
.form-group {
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    background-color: #fff;

    &:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }
  }
}</style> 