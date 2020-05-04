import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Container, Title, Field } from './styled'
import { updateDuration } from '../../actions/index'

class Duration extends Component {
   render() {
        const { dispatch, storeValue } = this.props;

        return (
            <Container>
                <label>Duration</label>
                <Field>
                    <input type={'text'}
                           defaultValue={storeValue ? storeValue : ''}
                           onChange={e => {
                               dispatch(updateDuration(e.target.value))
                           }}/>
                </Field>
            </Container>
        );
    }
}

Duration.propTypes = {
    storeValue : PropTypes.string
};

const mapStateToProps = ({ sessions }) => ({
    storeValue : sessions.duration || null,
});

export default connect(mapStateToProps)(Duration);
