import { Iuser } from "./iuser";

export interface Root {
    page: number;
    per_page: number;
    total_pages: number;
    results: Iuser[];
}
