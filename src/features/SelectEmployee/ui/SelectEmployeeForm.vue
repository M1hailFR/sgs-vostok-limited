<template>
  <form @submit.prevent="handleSubmit" class="form">
    <BaseSelect
      v-for="field in formFields"
      :key="field.id"
      :id="field.id"
      :label="field.label"
      v-model="store[field.modelKey]"
      :options="store[field.optionsKey]"
      :placeholder="field.placeholder"
      :disabled="field.isDisabled(store)"
      @update:modelValue="store[field.action]"
    />

    <div class="form-actions">
      <BaseButton 
        type="submit"
        :disabled="!isFormValid"
      >
        Сохранить
      </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useEmployeeStore } from '../../../entities/employee/model/store.ts'
import { formFields } from '../model/config'
// @ts-ignore
import { BaseSelect, BaseButton } from '@/shared/ui'

const router = useRouter()
const store = useEmployeeStore()

const isFormValid = computed(() => {
  return formFields.every(field => store[field.modelKey])
})

const handleSubmit = () => {
  if (isFormValid.value) {
    router.push('/result')
  }
}
</script>

<style scoped lang="scss">
.form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &-actions {
    margin-top: 2rem;
    text-align: center;
  }
}</style> 