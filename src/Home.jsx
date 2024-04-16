import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Peliculacard from './PeliculaCard';
import { API_URL} from './App';

// Componente principal
const Home = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // Busca una pelicula
    const buscarPeliculas = async (titulo, e) => {
        if (e) e.preventDefault();
        const response = await fetch(`${API_URL}?s=${titulo}`);
        const data = await response.json();
        setPeliculas(data);
    }
    // Llama a las funciones al cargar la página
    useEffect(() => {
        buscarPeliculas(searchTerm)
    }, [searchTerm]);
    return (
        <>
            <h2 className='text-center'>Catálogo de pelicula</h2>

            <Form className="d-flex col-md-8 offset-md-2 col-1g-6 offset-1g-3 mt-4" onSubmit={(e) => buscarPeliculas(searchTerm, e)} >
                <Form.Control  type="search" placeholder="Buscar por título" className="me-2"
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <Button variant="outline-primary" type="submit">Buscar</Button>
            </Form>
            <Container className='mt-4'>
                {peliculas?.length > 0
                    ?(
                        <>
                            <Row xs={1} sm={2} lg={3} xl={4} className='g-3'>
                                {peliculas.map((pelicula)=>(
                                    <Col key={pelicula.peliculaid}>
                                        <Peliculacard pelicula={pelicula} key={pelicula.peliculaid} />
                                    </Col>
                                ))}
                            </Row>
                        </>
                    ):
                    (
                        <Alert variant='warning'>
                            No hay películas encontradas.    
                        </Alert>
                    )
                }
            </Container>
        </>
    );
}
export default Home