export type Film = {
    "Title": string,
    "Year": string,
    "imdbID": string,
    "Type": "movie" | "series" | "episode",
    "Poster": string
}

export type Search = {
    "Search": Film[],
    "totalResults": string,
    "Response": "True" | "False",
    "Error": string
}