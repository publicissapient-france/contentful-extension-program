import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Container, Banner} from "./styled";
import SessionLine  from '../SessionLine';
import {addSession} from "../../actions";
import ButtonAction from '../../components/ButtonAction'

class ListSessions extends Component {
    render () {
        const { dispatch,  schedule } = this.props;

        return (
            <Container>
                <Banner>
                    <div><p>Start day</p></div>
                    <div> <p>End day</p></div>
                    <div><p>Type day</p></div>
                    <div><p>Promotion</p></div>
                </Banner>
                {
                    schedule ?
                        schedule.map( (session, index) => {
                            return <SessionLine key={index} index={index}/>
                        })
                        : null
                }
                <ButtonAction active={true} label={'Add session'} action={() => dispatch(addSession())}/>
            </Container>
        );
    }
}

ListSessions.propTypes = {
    schedule : PropTypes.array
};

const mapStateToProps = ({ sessions }) => ({
    schedule: sessions.schedule,
});
export default connect(mapStateToProps)(ListSessions);
