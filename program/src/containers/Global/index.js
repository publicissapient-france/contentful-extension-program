import React, { Component } from 'react';
import {Container, Banner} from "./styled";
import OGP from '../../fields/global/Pricing';
import GoogleTagManager from '../../fields/global/GoogleTagManager';

class Global extends Component {
    render () {
        return (
            <Container>
                <Banner>
                    <h4>Global information</h4>
                </Banner>
                <OGP/>
                <GoogleTagManager/>
            </Container>
        );
    }
}

Global.propTypes = {};

export default Global;
