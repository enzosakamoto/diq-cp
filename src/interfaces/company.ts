export interface Company {
  id: string
  name: string
  image: string
  description: string
  link: string
}

interface Error {
  message: string
}

export interface UpdateError {
  name: Error
  image: Error
  description: Error
  link: Error
}
