import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const Peliculacard = ({ pelicula, showsinopsis = false }) => {

    const RenderSinopsis = (sinopsis) => {
        if (showsinopsis)
            return (
                <Card.Text>
                    {sinopsis}
                </Card.Text>
            )
        return null
    }

    return(
        <>
            {(showsinopsis === true)
                ?(
                    <Card style={{maxWidth: '50rem'}} className='mx-auto'>
                        <Card.Header className="small text-end">{pelicula.anio}</Card.Header>
                        <Row className='g-0'>
                        <Col sm={4}>
                            <Card.Img variant="top" src={pelicula.poster !== 'Sin poster' ? pelicula.poster : 'https://via.placeholder.com/400'} />
                        </Col>
                        <Col sm={8}>
                            <Card.Body>
                                <Card.Title>{pelicula.titulo}</Card.Title>
                                <Card.Subtitle classtame="mb-2 small text-body-secondary">PELÍCULA</Card.Subtitle>
                                {RenderSinopsis(pelicula.sinopsis)}
                            </Card.Body>
                        </Col>
                        </Row>
                        <Card.Footer className="small text-uppercase">
                            <Link to={`/Editar/${pelicula.peliculaid}`} className="card-link text-decoration-none">Editar</Link>
                            <Link to={`/Eliminar/${pelicula.peliculald}`} className="card-link text-decoration-none">Eliminar</Link>
                        </Card.Footer>
                    </Card>
                ):
                (
                    <Card style={{maxWidth: '20rem'}} className='mx-auto h-100'>

                        <Card.Header className="small text-end">{pelicula.anio}</Card.Header>
                        <Card.Img variant="top" src={pelicula.poster !== 'Sin poster' ? pelicula.poster : 'https://via.placeholder.com/400'} />
                        <Card.Body>
                            <Card.Title>{pelicula.titulo}</Card.Title>
                            <Card.Subtitle className='mb-2 small text-body-secondary'>PELÍCULA</Card.Subtitle>
                        </Card.Body>
                        <Card.Footer>
                            <Link to={`/Detalles/${pelicula.peliculaid}`} className='card-link text-decoration-none'>Detalles</Link>
                        </Card.Footer>

                    </Card>
                )

            }
        </>
    )
}

export default Peliculacard
