export interface Experience {

    id: string
    type: 'formation' | 'stage'
    title: string
    organization: string
    place: string
    period: string
    description?: string
    missions?: string[]
    logo?: string
}