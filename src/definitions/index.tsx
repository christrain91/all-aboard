export interface StaffMember {
  firstname: string
  surname: string
  department: Department
  job: string
}

export interface Department {
  title: string
  background: string
  fontColour?: string
}
