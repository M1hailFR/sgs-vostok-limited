import { type Employee, type City, type Plant, type Team, type Shift } from '@/entities/employee'

export interface SelectEmployeeFormState {
  selectedCity: number | null
  selectedPlant: number | null
  selectedEmployee: number | null
  selectedTeam: number | null
  selectedShift: number | null
  cities: City[]
  teams: Team[]
  shifts: Shift[]
  availablePlants: Plant[]
  availableEmployees: Employee[]
}

export interface SelectEmployeeFormField {
  id: string
  label: string
  modelKey: keyof SelectEmployeeFormState
  optionsKey: keyof SelectEmployeeFormState
  placeholder: string
  action: string
  isDisabled: (store: SelectEmployeeFormState) => boolean
} 