export type IMovie = {
    adult: boolean
    backdrop_path: string
    id: number
    name: string
    original_language: string
    original_name: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: Array<number>
    popularity: number
    first_air_date: string
    vote_average: number
    vote_count: number
    origin_country: Array<string>
    title: string
}
