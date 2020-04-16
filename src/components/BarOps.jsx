//Dev Dependencys
import React, { useState, useEffect } from 'react';
import { Container, Row, Dropdown, DropdownButton } from "react-bootstrap";
import { connect } from 'react-redux';

//Components
import Loading from './Loading';

const url = 'http://aurium.cl/swapi/starships.json';

const BarOps = ({ addShipToTable, addDataToState }) => {
    const [loadingShips, setLoadingShips] = useState(true)
    const [ships, setShips] = useState([])

    useEffect(() => {

        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(response => setShips(response.results))

            // addDataToState(ships)
            setLoadingShips(false)
        }, 1000)

        

    }, [])
    return (
        <>
            <Container>
                {
                    loadingShips
                        ?
                        <Row className="justify-content-center align-items-center mt-3 ">
                            <h2 className="text-center">Cargando elementos</h2>
                            <Loading />
                        </Row>
                        :
                        <Row className="justify-content-center align-items-center mt-3 ">
                            <Dropdown >
                                <DropdownButton style={{ width: '100%' }} className="padding_barra" variant="" id="dropdown-basic-button" title="Seleccione una nave">
                                    {
                                        ships.map((item, i) => (
                                            <Dropdown.Item key={i} onClick={() => addShipToTable(item)}>
                                                {item.name}
                                            </Dropdown.Item>
                                        ))
                                    }
                                </DropdownButton>
                            </Dropdown>
                        </Row>

                }

            </Container>
        </>
    )

}

const mapStateToProps = state => ({
    datos: state.datos
});

const mapDispatchToProps = dispatch => ({
    addShipToTable(item){
        dispatch({
            type: "ADD_SHIP_TOTABLE",
            item
        })
    },
    addDataToState(objeto){
        dispatch({
            type: "ADD_OBJS",
            objeto
        })

    }
});


export default connect(mapStateToProps, mapDispatchToProps)(BarOps);