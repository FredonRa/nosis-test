import * as React from 'react';
import { ApiService } from "./services/ApiService";
import { Search, Film } from './types/Film';

function App() {
    const [inputValue, setInputValue] = React.useState<string>("avengers")
    const [films, setFilms] = React.useState<Film[]>([])
    const [isLoading, setIsLoading] = React.useState(true)

    const getFilms = async() => {
        try {
            const response = await ApiService.get<Search>(inputValue);
            if(response.Response == "True") setFilms(response.Search)
            setIsLoading(false)
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        getFilms();
    }, [])

    if (isLoading) return "Cargando..."

    if (!films.length) return <span>No hay resultados</span>

    return (
        <div>
            <ul>
                {films.map((film, index) => <li key={index}>{film.Title}</li>)}
            </ul>
        </div>
    )
}

export default App
