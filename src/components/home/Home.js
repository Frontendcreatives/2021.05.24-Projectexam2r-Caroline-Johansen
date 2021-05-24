import React from 'react';
import Search from '../search/Search.js';
import {Container, Jumbotron} from "reactstrap";

export const Home = (props) => (
    <>
    <Jumbotron fluid className="intro">
    <Container fluid>
  <h2> Welcome to FrontEndpedia - The Wikistyle library for Frontend Development </h2>
    <p>Search for posts or login to your user to create or edit posts. </p>
    </Container>
    </Jumbotron>
           
    <Search/>
  </>
);