//Main App component ____________________
//Dependencys
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

//components
import BarOps from './BarOps';
import Table from './Table';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row} from "react-bootstrap";
import '../styles/styles.css'

const ShipsApp = () => {

    return (
        <Provider store={store} >
            <Row className="padre">
                <Container className="img">
                </Container>
                <BarOps />
                <Table />
            </Row>

        </Provider>
    )

}



export default ShipsApp;