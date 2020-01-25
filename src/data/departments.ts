import {
  BLUE,
  LIGHT_BLUE,
  BLACK,
  DARK_RED,
  GREEN,
  GREY,
  ORANGE
} from './colours'
import { Department } from '../definitions'

export const DIRECTOR: Department = {
  title: 'Director',
  background: BLUE
}
export const PARK_RANGER: Department = {
  title: 'Park Ranger',
  background: BLACK
}
export const DINOSAUR_EXPERT: Department = {
  title: 'Dinosaur Expert',
  background: GREEN
}
export const CUSTOMER_SUPPORT: Department = {
  title: 'Customer Support',
  background: GREY
}
export const PARK_VISITOR: Department = {
  title: 'Park Visitor',
  background: DARK_RED,
  fontColour: ORANGE
}
export const LAB_TECHNICIAN: Department = {
  title: 'Lab Technician',
  background: LIGHT_BLUE
}
