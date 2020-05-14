export interface Skill {
  name: string
  level: string
}

interface Address {
  country: string
  city: string
}

export interface Candidate {
  id: String
  name: string
  email: string
  age: number
  skills: Skill[]
  address: Address
}
