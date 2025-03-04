export interface Employee {
  id: number
  plantId: number
  name: string
}

export interface City {
  id: number
  name: string
}

export interface Plant {
  id: number
  cityId: number
  name: string
}

export interface Team {
  id: number
  name: string
}

export interface Shift {
  id: number
  name: string
} 