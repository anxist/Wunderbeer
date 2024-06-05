import React, {Component} from 'react';
import Menu from "../components/menu";
import {Container} from "react-bootstrap";

class Main extends Component {
    render() {
        return (
            <Container>
                <Menu></Menu>
            </Container>
        );
    }
}

export default Main;