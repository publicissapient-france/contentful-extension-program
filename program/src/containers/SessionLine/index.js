import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Container,
    Delete,
    Pastille,
    Promotion,
    InputDate,
    InputSelect,
    SafeDelete,
    Line,
    DateBox,
    CloseBox
} from './styled'
import {Icon} from "../../style/styledComponents";
import SvgTrashSmall from '../../components/svg/SvgTrashSmall'
import SvgCalendar from '../../components/svg/SvgCalendar';
import {updateSession, updatePromo, removeSession, orderSessions} from "../../actions";
import ButtonBasic from '../../components/ButtonBasic'
import ButtonDelete from '../../components/ButtonDelete'
import DayPicker, {DateUtils} from 'react-day-picker';
import {sortDateAsc, daysToISOString, daysToString, isPassed} from "../../utils/functions";
import 'react-day-picker/lib/style.css';

class SessionLine extends Component {
    constructor(props) {
        super(props);
        this.handleEndDays = this.handleEndDays.bind(this);
        this.handleStartDays = this.handleStartDays.bind(this);

        this.state = {
            openSafeDelete: false,
            openStartCalendar: false,
            openEndCalendar: false,
            startDays: [],
            endDays: []
        };
    }

    componentDidMount() {
        if (this.props.storeValue.startTime !== undefined && this.props.storeValue.startTime !== []) {
            if (typeof this.props.storeValue.startTime === "string") {
                this.setState({
                    startDays: [this.props.storeValue.startTime].map(day => new Date(day))
                }, () => {
                    this.props.dispatch(updateSession(this.props.index, 'startTime', daysToISOString(this.state.startDays)));
                    this.props.dispatch(orderSessions());
                })
            } else {
                this.setState({
                    startDays: this.props.storeValue.startTime.map(day => new Date(day))
                })
            }
        }
        if (this.props.storeValue.endTime !== undefined && this.props.storeValue.endTime !== []) {
            if (typeof this.props.storeValue.endTime === "string") {
                this.setState({
                    endDays: [this.props.storeValue.endTime].map(day => new Date(day))
                }, () => {
                    this.props.dispatch(updateSession(this.props.index, 'endTime', daysToISOString(this.state.endDays)));
                })
            } else {
                this.setState({
                    endDays: this.props.storeValue.endTime.map(day => new Date(day))
                })
            }
        }
    }

    toggleSafeSecure = () => this.setState({openSafeDelete: !this.state.openSafeDelete});

    openStartCalendar = () => this.setState({openStartCalendar: true});
    closeStartCalendar = () => {
        this.setState({openStartCalendar: false});
        console.log('close function')

    }
    openEndCalendar = () => this.setState({openEndCalendar: true});
    closeEndCalendar = () => this.setState({openEndCalendar: false});

    handleStartDays(day, {selected}) {
        const {dispatch, index} = this.props
        const selectedDays = this.state.startDays.concat();

        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }

        this.setState({startDays: sortDateAsc(selectedDays)}, () => {
            dispatch(updateSession(index, 'startTime', daysToISOString(this.state.startDays)));
            dispatch(orderSessions());
        });
    }

    handleEndDays(day, {selected}) {
        const {dispatch, index} = this.props
        const selectedDays = this.state.endDays.concat();

        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }

        this.setState({endDays: sortDateAsc(selectedDays)}, () => {
            dispatch(updateSession(index, 'endTime', daysToISOString(this.state.endDays)));
        });
    }


    isIncomplete = () => {
        const {storeValue} = this.props;
        if (!storeValue.startTime || !storeValue.startTime || !storeValue.type || storeValue.type === '') return true;
        return false;
    }

    render() {
        const {dispatch, index, storeValue} = this.props;

        if (!storeValue) return null
        return (
            <Container className={this.isIncomplete() ? 'incomplete' : ''}>
                <Line>
                    <Delete onClick={() => this.toggleSafeSecure()}>
                        <Icon className={'trash'}>
                            <SvgTrashSmall/>
                        </Icon>
                    </Delete>

                    <InputDate className={isPassed(this.state.startDays[0]) ? 'passed' : ''}>
                        <Icon onClick={() => this.openStartCalendar()}>
                            <SvgCalendar/>
                        </Icon>
                        <p onClick={() => this.openStartCalendar()}>{this.state.startDays && this.state.startDays !== undefined ? daysToString(this.state.startDays) : ''}</p>
                        <DateBox className={!this.state.openStartCalendar ? 'hidden' : ''}>
                            <CloseBox onClick={() => this.closeStartCalendar()}/>
                            <DayPicker
                                onDayClick={this.handleStartDays}
                                selectedDays={this.state.startDays}
                            />
                        </DateBox>
                    </InputDate>

                    <InputDate className={isPassed(this.state.startDays[0]) ? 'passed' : ''}>
                        <Icon onClick={() => this.openEndCalendar()}>
                            <SvgCalendar/>
                        </Icon>
                        <p onClick={() => this.openEndCalendar()}>{this.state.endDays && this.state.endDays !== undefined ? daysToString(this.state.endDays) : ''}</p>
                        <DateBox className={!this.state.openEndCalendar ? 'hidden' : ''}>
                            <CloseBox onClick={() => this.closeEndCalendar()}/>
                            <DayPicker
                                onDayClick={this.handleEndDays}
                                selectedDays={this.state.endDays}
                            />
                        </DateBox>
                    </InputDate>

                    <InputSelect>
                        <select defaultValue={storeValue.type ? storeValue.type : null}
                                onChange={e => {
                                    dispatch(updateSession(index, 'type', e.target.value))
                                }}>
                            <option value={null}>Select Type</option>
                            <option value={'inter'}>inter</option>
                            <option value={'intra'}>intra</option>
                            <option value={'a_distance'}>A distance</option>
                        </select>
                    </InputSelect>
                    <Pastille className={storeValue.promo && storeValue.promo.available ? 'active' : ''}
                              onClick={() => {
                                  if (storeValue.promo.available) {
                                      dispatch(updatePromo(index, 'available', false))
                                  } else {
                                      dispatch(updatePromo(index, 'available', true))
                                  }
                              }}/>
                    {
                        !storeValue.promo || !storeValue.promo.available ? null :
                            <Promotion>
                                <input type={'text'}
                                       defaultValue={storeValue.promo.price ? storeValue.promo.price : ''}
                                       onChange={e => {
                                           dispatch(updatePromo(index, 'price', e.target.value))
                                       }}/>
                            </Promotion>
                    }
                </Line>
                <SafeDelete className={!this.state.openSafeDelete ? 'hidden' : ''}>
                    <p>The deletion is final. Are you sure you want to delete this section?</p>
                    <div className={'buttons'}>
                        <ButtonBasic label={'Cancel'} action={this.toggleSafeSecure}/>
                        <ButtonDelete label={'Delete'} action={() => {
                            dispatch(removeSession(index));
                            this.setState({openSafeDelete: false});
                        }}/>
                    </div>
                </SafeDelete>
            </Container>
        );
    }
}

SessionLine.propTypes = {};

const mapStateToProps = (state, ownProps) => ({
    storeValue: state.sessions.schedule[ownProps.index] || null,
});

export default connect(mapStateToProps)(SessionLine);
