export type Film = {
    Actors: string
    Awards: string | string[]
    BoxOffice: string | string[]
    Country: string
    DVD: string | string[]
    Director: string
    Language: string
    Metascore: string | string[]
    Genre: string
    Plot: string
    Poster: string
    Production: string | string[]
    Rated: string | string[]
    Ratings: {Source: string, Value: string}[]
    Released: string
    Response: "True" | "False"
    Runtime: string
    Title: string
    "Type": "movie" | "series" | "episode",
    Website: "string"
    Writer: string
    Year: string
    imdbID: string
    imdbRating: string
    imdbVotes: string
}

export type Search = {
    "Search": Film[],
    "totalResults": string,
    "Response": "True" | "False",
    "Error": string
}