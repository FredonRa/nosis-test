import * as React from 'react';
import { Link, useParams } from 'react-router-dom'
import { ApiService } from '../services/ApiService';
import { Film } from "../types/Film";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 976px;
    margin: 40px auto;
    & > img {
        margin-right: 25px;
        margin-bottom: 20px;
    }
`

const ContainerDataFilm = styled.div`
    width: calc(90% - 300px);
    min-width: 300px;
`

const ContainerGoBack = styled.div`
    display: flex;
    justify-content: flex-end;
`

const GoBack = styled.button`
    background-color: #2e2e2e;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`

const GoBackButton = () => {
    return (
        <ContainerGoBack>
            <Link to={"/"}>
                <GoBack>
                    Go back
                </GoBack>
            </Link>
        </ContainerGoBack>
    )
}
 
const FilmPage: React.FC = () => {
    const {id} = useParams()
    const [film, setFilm] = React.useState<Film>()
    const [isLoading, setIsLoading] = React.useState(true)


    const getFilm = async() => {
        try {
            const response = await ApiService.getByID<Film>(id || "")
            setFilm(response)
            setIsLoading(false)
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        getFilm();
    }, [])

    if(isLoading) return <span>Loading...</span>

    if(film?.Response == "False") return (
        <Container style={{flexDirection: "column"}}>
            <h1>An error ocurred</h1>
            <GoBackButton />
        </Container>
    )

    return (
        <main>
            <Container>
                <img src={film?.Poster} alt="" />
                <ContainerDataFilm>
                    <span>Genre: {film?.Genre}</span>
                    <h1>{film?.Title}</h1>
                    <p>Year: {film?.Year}</p>
                    <p>Director: {film?.Director}</p>
                    <p>Duration: {film?.Runtime}</p>
                    <hr />
                    <h2>Description</h2>
                    <p>{film?.Plot}</p>
                    <hr />
                    <p>Starring by <i>{film?.Actors}</i></p>
                    <GoBackButton />
                </ContainerDataFilm>
            </Container>
        </main>
    );
}
 
export default FilmPage;