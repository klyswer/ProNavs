//Dev Dependencys
import React, { useState } from 'react';
import { Container, Row } from "react-bootstrap";

//Components
import Loading from './Loading';
import DataShip from './DataShip';

const Table = () => {
    const [loadingShips, setLoadingShips] = useState(true)

    setTimeout(() => {
        setLoadingShips(false)
    }, 4000)
    return (
        <>
            <Container>
                {
                    loadingShips
                        ?
                        <Row className="justify-content-center align-items-center mt-5 ">
                            <h3 className="text-center">Cargando</h3>
                            <Loading />
                        </Row>
                        :
                        <Row className="justify-content-center align-items-center mt-3 ">
                            <DataShip />
                        </Row>
                }

            </Container>
        </>

    )

}



export default Table;