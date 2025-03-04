import { type SelectEmployeeFormField } from './types'

export const formFields: SelectEmployeeFormField[] = [
  {
    id: 'city',
    label: 'Город',
    modelKey: 'selectedCity',
    optionsKey: 'cities',
    placeholder: 'Выберите город',
    action: 'setCity',
    isDisabled: () => false
  },
  {
    id: 'plant',
    label: 'Цех',
    modelKey: 'selectedPlant',
    optionsKey: 'availablePlants',
    placeholder: 'Выберите цех',
    action: 'setPlant',
    isDisabled: (store) => !store.selectedCity
  },
  {
    id: 'employee',
    label: 'Сотрудник',
    modelKey: 'selectedEmployee',
    optionsKey: 'availableEmployees',
    placeholder: 'Выберите сотрудника',
    action: 'setEmployee',
    isDisabled: (store) => !store.selectedPlant
  },
  {
    id: 'team',
    label: 'Бригада',
    modelKey: 'selectedTeam',
    optionsKey: 'teams',
    placeholder: 'Выберите бригаду',
    action: 'setTeam',
    isDisabled: () => false
  },
  {
    id: 'shift',
    label: 'Смена',
    modelKey: 'selectedShift',
    optionsKey: 'shifts',
    placeholder: 'Выберите смену',
    action: 'setShift',
    isDisabled: () => false
  }
] 