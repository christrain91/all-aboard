export interface StaffMember {
  firstname: string
  surname: string
  job: Job
  nicknames?: string[]
}

export interface Department {
  id: number
  title: string
  background: string
  fontColour?: string
}

export interface Job {
  title: string
  description: string
  department: Department
  displayOrder: number
}
