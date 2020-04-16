//Dev Dependencys
import React from 'react';
import { connect } from 'react-redux';

//styles
import { Container, Row, Card, Button } from "react-bootstrap";


const DataShip = ({ seleccion, deleteShip }) => {

    return (
        <Container>
            <Row xs="12" md="12" lg="12" className="justify-content-center align-items-center mt-3 text-center">

                {seleccion.map((item, i) => (
                    <div key={i}>
                        {console.log(item)}
                        <Card  style={{ width: '100%', minWidth: '355px'}}>
                        
                            <Card.Header>
                                <Card.Title style={{ fontSize: '25px' }}><b>{item.name}</b></Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title><b>Fabricante</b></Card.Title>
                                <Card.Text>{item.manufacturer}</Card.Text>
                                <Card.Title><b>Largo</b></Card.Title>
                                <Card.Text>{`${item.length} Ft`}</Card.Text>
                                <Card.Title><b>Valor</b></Card.Title>
                                <Card.Text>{`${item.cost_in_credits} creditos`}</Card.Text>
                                <Card.Title><b>Cantidad pasajeros</b></Card.Title>
                                <Card.Text>{`${item.passengers}`}</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '100%', minWidth: '355px' }} className="mt-3" >
                            <Card.Body>
                                <Card.Header>
                                    <Card.Title style={{ fontSize: '25px' }}><b>Pasajeros</b></Card.Title>
                                </Card.Header>
                                <Card.Text>{`void`}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Button onClick={()=> deleteShip(item)} variant="danger" className="mb-4 pr-4 pl-4">x</Button>
                    </div>
                ))

                }
            </Row>
        </Container>
    )

}

const mapStateToProps = state => ({
    seleccion: state.seleccion
});

const mapDispatchToProps = dispatch => ({
    deleteShip(item){
        dispatch({
            type: "DELETE_SHIP_TOTABLE",
            item
        })
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(DataShip);