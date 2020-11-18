import React from 'react';

import {Jumbotron, Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rodape = () => {
    return (
        <Jumbotron fluid className="rodape">
            <style>
                {`.rodape{
                    background-color: #000;
                    color: #fed136;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin-bottom: 0rem !important;
                }
                .textoRodape {
                   font-size: 10px;
                }
                `}
            </style>
            <Container className="text-center">
                <h2 className="lead textoRodape">
                    Copyright <FontAwesomeIcon icon={["fas", "copyright"]} /> 2020
                    Created for Antonio Martins
                </h2>
            </Container>
        </Jumbotron>
    );
};

export default Rodape;