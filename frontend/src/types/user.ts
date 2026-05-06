export interface User {
  id: string
  guid: string
  name: string
  email: string
  roles: string[]
  createdAt: string
}

export type UserPreview = Pick<User, "id" | "name" | "email">
