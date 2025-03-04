import { defineStore } from 'pinia'
// @ts-ignore
import { cities, plants, employees, teams, shifts } from '@/shared/api/mock'
import type { Employee, City, Plant, Team, Shift } from './types.ts'

export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    selectedCity: null as number | null,
    selectedPlant: null as number | null,
    selectedEmployee: null as number | null,
    selectedTeam: null as number | null,
    selectedShift: null as number | null,
    
    cities: cities as City[],
    teams: teams as Team[],
    shifts: shifts as Shift[],
    availablePlants: [] as Plant[],
    availableEmployees: [] as Employee[]
  }),

  actions: {
    setCity(cityId) {
      this.selectedCity = Number(cityId)
      this.selectedPlant = null
      this.selectedEmployee = null
      this.availablePlants = plants.filter(plant => plant.cityId === this.selectedCity)
      this.availableEmployees = []
    },

    setPlant(plantId) {
      this.selectedPlant = Number(plantId)
      this.selectedEmployee = null
      this.availableEmployees = employees.filter(employee => employee.plantId === this.selectedPlant)
    },

    setEmployee(employeeId) {
      this.selectedEmployee = Number(employeeId)
    },

    setTeam(teamId) {
      this.selectedTeam = Number(teamId)
    },

    setShift(shiftId) {
      this.selectedShift = Number(shiftId)
    },

    resetSelections() {
      this.selectedCity = null
      this.selectedPlant = null
      this.selectedEmployee = null
      this.selectedTeam = null
      this.selectedShift = null
      this.availablePlants = []
      this.availableEmployees = []
    }
  }
}) 