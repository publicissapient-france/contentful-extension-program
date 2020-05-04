import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Container, Field, Box } from './styled'
import { updatePricing } from '../../actions/index'

class Pricing extends Component {
   render() {
        const { dispatch, storeInter, storeIntra } = this.props;

        return (
            <Container>
                <Box>
                    <Field>
                        <input type={'checkbox'}
                               checked={storeInter && storeInter.available ? storeInter.available : false}
                               onChange={e => {
                                   dispatch(updatePricing('inter', 'available', e.target.checked))
                               }}/>
                        <label>Inter</label>

                    </Field>
                    <Field>
                        <input type={'text'}
                               defaultValue={storeInter && storeInter.price ? storeInter.price : ''}
                               onChange={e => {
                                   dispatch(updatePricing('inter', 'price', e.target.value))
                               }}/>
                    </Field>
                </Box>
                <Box>
                    <Field>
                        <input type={'checkbox'}
                               checked={storeIntra && storeIntra.available ? storeIntra.available : false}
                               onChange={e => {
                                   dispatch(updatePricing('intra', 'available', e.target.checked))
                               }}/>
                        <label>Intra</label>

                    </Field>
                    <Field>
                        <input type={'text'}
                               defaultValue={storeIntra && storeIntra.price ? storeIntra.price : ''}
                               onChange={e => {
                                   dispatch(updatePricing('intra', 'price', e.target.value))
                               }}/>
                    </Field>
                </Box>


            </Container>
        );
    }
}

Pricing.propTypes = {
    storeInter : PropTypes.object
};

const mapStateToProps = ({ sessions }) => ({
    storeInter : sessions.pricing['inter'] || null,
    storeIntra : sessions.pricing['intra'] || null
});

export default connect(mapStateToProps)(Pricing);
