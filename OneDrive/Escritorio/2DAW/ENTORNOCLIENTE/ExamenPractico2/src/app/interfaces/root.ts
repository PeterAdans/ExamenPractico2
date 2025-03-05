import { IPrducts } from "./iprducts"

export interface Root {
    page: number
    per_page: number
    total: number
    total_pages: number
    results: IPrducts[]
}
