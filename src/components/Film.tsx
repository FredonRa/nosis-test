import * as React from 'react';
import styled from "styled-components";
import { Film } from '../types/Film';
import { Link } from "react-router-dom"
import imageNotFound from "../assets/image_not_found.png"

interface FilmItemProps {
    item: Film
}

const Container = styled.div`
    height: auto;
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > img {
        width: 100%;
    }
    &:hover > div > div {
        -webkit-transform: scale(1.1,1.1);
        -webkit-transition: all 0.3s ease-in-out;
    }
    @media (max-width: 567px) {
        width: 100%;
    }
`

const DataFilm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > span { font-style: italic;}
    & > span,
    & > h2,
    & > h3 {
        color: #2e2e2e;
        margin: 2px 0;
        text-align: center;
    }
`

const ContainerPoster = styled.div`
    overflow: hidden;
`

const FilmItem: React.FC<FilmItemProps> = ({ item }) => {
    if(item.Poster == "N/A") item.Poster = imageNotFound
    
    const Poster = styled.div`
        background-image: url(${item.Poster});
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
        width: 100%;
        height: 370px;
        -webkit-transition: all 0.3s ease-in-out;
    `

    return (  
        <Link to={`/film/${item.imdbID}`} style={{textDecoration: "none", width: "250px", margin: "10px"}}>
            <Container>
                <ContainerPoster>
                    <Poster  />
                </ContainerPoster>
                <DataFilm>
                    <span>{item.Type}</span>
                    <h2>{item.Title}</h2>
                    <h3>{item.Year}</h3>
                </DataFilm>
            </Container>
        </Link>
    );
}
 
export default FilmItem;