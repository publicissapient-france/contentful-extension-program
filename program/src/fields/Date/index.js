import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Container, Title, Field } from './styled'
import { updateDuration } from '../../actions/index'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Date extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDay: undefined,
        };
    }

    handleDayClick(day, { selected }) {
        if (selected) {
            // Unselect the day if already selected
            this.setState({ selectedDay: undefined });
            return;
        }
        this.setState({ selectedDay: day });
    }

    render() {
        return (
            <div>
                <DayPicker
                    onDayClick={this.handleDayClick}
                    selectedDays={this.state.selectedDay}
                />
                {this.state.selectedDay ? (
                    <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
                ) : (
                    <p>Please select a day.</p>
                )}
            </div>
        );
    }
}

Date.propTypes = {
    storeValue : PropTypes.string
};

const mapStateToProps = ({ sessions }) => ({
    storeValue : sessions.informations['duration'] || null,
});

export default connect(mapStateToProps)(Date);
