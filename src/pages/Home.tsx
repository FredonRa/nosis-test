import * as React from 'react';
import Browser from '../components/Browser';
import { ApiService } from "../services/ApiService";
import { Search, Film } from '../types/Film';
import FilmItem from '../components/Film';
import styled from "styled-components";
import trash from "../assets/trash.png"

const Title = styled.h1`
    margin: 0 auto;
`

const Subtitle = styled.h2`
    display: flex;
    align-items: center;
`

const Trash = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    & > img {
        width: 20px;
    }
`

const ContainerFilms = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1240px;
    margin: 0 auto;
`

const Home: React.FC = () => {
    const [inputValue, setInputValue] = React.useState<string>("")
    const [subtitle, setSubtitle] = React.useState<string>("")
    const [films, setFilms] = React.useState<Film[]>([])
    const initialError = { state: false, message: "" }
    const [error, setError] = React.useState<{
        state: boolean, 
        message: string
    }>(initialError)
    const [isLoading, setIsLoading] = React.useState(false)

    const getFilms = async() => {
        if(inputValue.length < 3) return
        setIsLoading(true)
        setError(initialError)
        setSubtitle(inputValue);
        try {
            const response = await ApiService.getByName<Search>(inputValue);
            if(response.Response == "True") setFilms(response.Search)
            else setError({
                state: true,
                message: response.Error
            })
            setIsLoading(false)
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    const removeSearch = () => {
        setInputValue("")
        setFilms([])
        setSubtitle("")
        setError(initialError)
    }

    React.useEffect(() => {
        if(error.state) setFilms([])
    }, [error])

    return (
        <main>
            <Title>Movie Browser</Title>
            <Browser 
                onChangeText={(value) => setInputValue(value)} 
                onClick={getFilms} 
                placeholder="Enter the name of the movie :)"
                buttonTitle="Search"
                value={inputValue}
            />
            {(films.length > 0 || error.state) && (
                <Subtitle>
                    <Trash onClick={removeSearch}>
                        <img src={trash} alt="trash icon"/>
                    </Trash>
                    {subtitle}
                </Subtitle>
            )}
            <ContainerFilms>
                {   
                    isLoading ? 
                        <span>Loading...</span>
                    : films.map((film, index) => index <= 4 && <FilmItem key={index} item={film} />)
                }
                {error.state && <span>{error.message}</span>}
            </ContainerFilms>
        </main>
    );
}
 
export default Home;