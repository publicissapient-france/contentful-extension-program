import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, Banner} from "./styled";
import SessionLine from '../SessionLine';
import {addSession} from "../../actions";
import ButtonAction from '../../components/ButtonAction'
import isEqual from 'lodash/isEqual';

class ListSessions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: []
        };
    }

    componentDidMount() {
        this.setState({
            schedule: this.props.schedule
        })
    }

    componentDidUpdate(prevProps) {
        if( prevProps.schedule !==  this.props.schedule || !isEqual(prevProps.schedule, this.props.schedule)) {
            this.setState({
                schedule: this.props.schedule
            })
        }
    }

    render() {
        const {dispatch} = this.props;

        return (
            <Container>
                <Banner>
                    <div><p>Start day</p></div>
                    <div><p>End day</p></div>
                    <div><p>Type day</p></div>
                    <div><p>Promotion</p></div>
                </Banner>
                {
                        this.state.schedule.map((session, index) => {
                            return <SessionLine key={`${session.startTime}${index}`} index={index}/>
                        })
                }
                <ButtonAction active={true} label={'Add session'} action={() => dispatch(addSession())}/>
            </Container>
        );
    }
}

ListSessions.propTypes = {
    schedule: PropTypes.array
};

export default connect()(ListSessions);
