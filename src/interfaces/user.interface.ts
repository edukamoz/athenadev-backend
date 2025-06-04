export interface User {
    id: number
    email: string
    password: string
    name: string
    score: number
    timeOnSite: Date
    photo?: string | null
}
