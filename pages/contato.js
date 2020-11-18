import React, {useState} from 'react';
import Head from 'next/head';
import {Container, Jumbotron, Form, FormGroup, Label, Input, Button} from "reactstrap";

import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

/**
 * Contato do site de doação.
 * @returns {JSX.Element}
 * @constructor
 */
function HomePage() {

    /**
     * Constantes para instanciar os valores do formulário.
     */
    const [contato, setContato] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });

    /**
     * Inicializa a mensagem de erro, o tipo e se foi clicado para salvar o form.
     */
    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    /**
     * Quando o usuário realizar qualquer alteração em um input executa essa função.
     */
    const onChangeInput = e => setContato({ ...contato, [e.target.name]: e.target.value});

    /**
     * Função assíncrona para enviar a mensagem.
     */
    const sendMensagem = async e => {
        e.preventDefault();

        /**
         * Torna true quando tenta salvar os dados do formulário.
         */
        setResponse({formSave: true});
        try{
            const res = await fetch('http://localhost:8080/contato', {
                method: 'POST',
                body: JSON.stringify(contato),
                headers: {'Content-Type': 'application/json'}
            });

            const responseEnv = await res.json();

            if (responseEnv.error) {
              setResponse({
                  formSave: false,
                  type: 'error',
                  message: responseEnv.mensagem
              });
            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    message: responseEnv.mensagem
                });
            }
        } catch (erro) {
            setResponse({
                formSave: false,
                type: 'error',
                message: 'Erro: Mensagem não enviada com sucesso, tente mais tarde.'
            });
        }
    }

    return (
        <>
            <Head>
                <title>Home - Doação</title>
                <meta name="description" content="Contato com a ONG"/>
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
                    <h1 className="display-4">Contate-nos</h1>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="form-contato">
                <style>
                    {
                        `.form-contato {
                            padding-top: 80px;
                            padding-bottom: 80px;
                            background-color: #fff;
                            margin-bottom: 0rem !important;
                        }`
                    }
                </style>
                <Container>
                    {response.type === 'error' ? <div className="alert alert-danger">{response.message}</div> : ""}
                    {response.type === 'success' ? <div className="alert alert-success">{response.message}</div> : ""}
                    <Form onSubmit={sendMensagem}>
                        <FormGroup>
                            <Label for="name">Nome:</Label>
                            <Input type="text" required="required" name="name" id="name" placeholder="Informe o nome completo" onChange={onChangeInput}></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email:</Label>
                            <Input type="email" required="required" name="email" id="email" placeholder="Informe seu melhor email" onChange={onChangeInput}></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="subject">Assunto:</Label>
                            <Input type="text" required="required" name="subject" id="subject" placeholder="Informe o assunto da mensagem" onChange={onChangeInput}></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="content">Conteúdo:</Label>
                            <Input type="textarea" required="required" name="content" id="content" placeholder="Informe o conteúdo da mensagem." onChange={onChangeInput}></Input>
                        </FormGroup>

                        {
                            response.formSave
                            ? <Button type="submit" color="warning" disabled>Enviando...</Button>
                            :  <Button type="submit" color="warning">Enviar</Button>
                        }

                    </Form>
                </Container>
            </Jumbotron>

            <Rodape/>
        </>
    );
}

export default HomePage