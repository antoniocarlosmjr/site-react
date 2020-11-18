import Head from 'next/head';
import {Button, Container, Jumbotron} from "reactstrap";
import Menu from '../components/Menu';

/**
 * Contato do site de doação.
 * @returns {JSX.Element}
 * @constructor
 */
function HomePage() {
    return (
        <>
            <Head>
                <title>Home - Doação</title>
                <meta name="description" content="Sobre a ONG"/>
                <meta name="author" content="Antonio Martins"/>
            </Head>

            <Menu/>

            <Jumbotron fluid className="descricao-topo">
                <style>
                    {
                        `.descricao-topo {
                            background-color: #000;
                            color: #fed136;
                            padding-top: 150px;
                            padding-bottom: 150px;
                            margin-bottom: 0rem !important;
                        }`
                    }
                </style>
                <Container className="text-center">
                    <h1 className="display-4">Sobre a ONG</h1>

                </Container>
            </Jumbotron>


        </>
    );
}

export default HomePage