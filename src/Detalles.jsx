import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { useParams } from "react-router-dom"
import { API_URL } from './App'
import PeliculaCard from'./PeliculaCard'

const Detalles = ()=>{
    const {id} = useParams()
    const [pelicula, setPelicula] = useState()

    const buscarPelicula = async (id) =>{
        let data = null
        const response = await fetch(`${API_URL}/${id}`)
        if (response.ok)
            data = await response.json()
        setPelicula(data)
    }

    useEffect(()=>{
        buscarPelicula(id)
    },[id])

    return(
        <>
            <h2 className="text-center">Detalles de película</h2>
            <Container>
                {(pelicula != null)
                    ?(
                        <PeliculaCard pelicula={pelicula} showsinopsis={true} key={pelicula.peliculaid} />
                    ):
                    (
                        <Alert variant="warning">
                            No hay películas encontradas.
                        </Alert>
                    )
                }
            </Container>
        </>
    )
}
export default Detalles