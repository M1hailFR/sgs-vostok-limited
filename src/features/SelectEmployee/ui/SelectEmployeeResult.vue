<template>
  <div class="result-card">
    <div class="result-item" v-for="(value, label) in resultItems" :key="label">
      <span class="label">{{ label }}:</span>
      <span class="value">{{ value }}</span>
    </div>

    <div class="actions">
      <BaseButton 
        @click="handleBack"
        variant="secondary"
      >
        Вернуться к форме
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useEmployeeStore } from '@/entities/employee/model/store.js'
import { BaseButton } from '@/shared/ui'

const router = useRouter()
const store = useEmployeeStore()

const resultItems = computed(() => ({
  'Город': store.cities.find(city => city.id === store.selectedCity)?.name || '-',
  'Цех': store.availablePlants.find(plant => plant.id === store.selectedPlant)?.name || '-',
  'Сотрудник': store.availableEmployees.find(employee => employee.id === store.selectedEmployee)?.name || '-',
  'Бригада': store.teams.find(team => team.id === store.selectedTeam)?.name || '-',
  'Смена': store.shifts.find(shift => shift.id === store.selectedShift)?.name || '-'
}))

const handleBack = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
.result-card {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.result-item {
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  &:last-of-type {
    border-bottom: none;
  }

  .label {
    font-weight: bold;
    margin-right: 1rem;
    color: #666;
  }

  .value {
    color: var(--text-color);
  }
}

.actions {
  margin-top: 2rem;
  text-align: center;
}
</style> 