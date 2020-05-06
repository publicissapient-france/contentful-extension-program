import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, Delete, Pastille, Promotion, InputDate, InputSelect, SafeDelete, Line, DateBox, CloseBox} from './styled'
import { Icon} from "../../style/styledComponents";
import SvgTrashSmall from '../../components/svg/SvgTrashSmall'
import SvgCalendar from '../../components/svg/SvgCalendar';
import SvgInformation from '../../components/svg/SvgInformation';
import {updateSession, updatePromo, removeSession} from "../../actions";
import ButtonBasic  from '../../components/ButtonBasic'
import ButtonDelete  from '../../components/ButtonDelete'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class SessionLine extends Component {
    constructor (props) {
        super(props);
        this.handleStartDay = this.handleStartDay.bind(this);
        this.handleEndDay = this.handleEndDay.bind(this);


        this.state = {
            openSafeDelete: false,
            openStartCalendar : false,
            openEndCalendar : false,
            startDay: undefined,
            endDay: undefined

        };
    }

    componentDidMount(){
        if(this.props.storeValue.startTime !== undefined ){
            this.setState({
                startDay : new Date(this.props.storeValue.startTime)
            })
        }
        if(this.props.storeValue.endTime !== undefined ){
            this.setState({
                endDay : new Date(this.props.storeValue.endTime)
            })
        }

    }

    toggleSafeSecure = () => this.setState({
        openSafeDelete: !this.state.openSafeDelete,
    })

    openStartCalendar = () => this.setState({openStartCalendar : true});
    closeStartCalendar = () => this.setState({openStartCalendar : false});
    openEndCalendar = () => this.setState({openEndCalendar : true});
    closeEndCalendar = () => this.setState({openEndCalendar : false});

    handleStartDay(day, { selected }) {
        const {dispatch, index} = this.props
        if (selected) {
            // Unselect the day if already selected
            this.setState({ startDay: undefined }, () => {{
                dispatch(updateSession(index, 'startTime', this.state.startDay))
                this.setState({openStartCalendar : false})
            }});
            return;
        }
        this.setState({ startDay: day }, () => {{
            dispatch(updateSession(index, 'startTime', this.state.startDay))
            this.setState({openStartCalendar : false})
        }});

    }


    handleEndDay(day, { selected }) {
        const {dispatch, index} = this.props
        if (selected) {
            // Unselect the day if already selected
            this.setState({ endDay: undefined }, () => {{
                dispatch(updateSession(index, 'endTime', this.state.endDay))
                this.setState({openEndCalendar : false})
            }});
            return;
        }
        this.setState({ endDay: day }, () => {{
            dispatch(updateSession(index, 'endTime', this.state.endDay))
            this.setState({openEndCalendar : false})
        }});

    }


    render() {
        const {dispatch, index, storeValue} = this.props;

        return (
            <Container>
                <Line>
                <Delete onClick={() => this.toggleSafeSecure()}>
                    <Icon className={'trash'}>
                        <SvgTrashSmall/>
                    </Icon>
                </Delete>
                <InputDate>
                    <Icon onClick={() => this.openStartCalendar() }>
                        <SvgCalendar/>
                    </Icon>
                    <p onClick={() => this.openStartCalendar() }>{ this.state.startDay && this.state.startDay !== undefined ?  this.state.startDay.toLocaleDateString() : ''}</p>
                    <DateBox className={!this.state.openStartCalendar ? 'hidden' : '' }>
                        <CloseBox onClick={() => this.closeStartCalendar()}/>
                        <DayPicker
                            onDayClick={this.handleStartDay}
                            selectedDays={this.state.startDay}
                        />
                    </DateBox>
                </InputDate>
                <InputDate>
                    <Icon onClick={() => this.openEndCalendar() }>
                        <SvgCalendar/>
                    </Icon>
                    <p onClick={() => this.openEndCalendar() }>{ this.state.endDay && this.state.endDay !== undefined ?  this.state.endDay.toLocaleDateString() : ''}</p>
                    <DateBox className={!this.state.openEndCalendar ? 'hidden' : '' }>
                        <CloseBox onClick={() => this.closeEndCalendar()}/>
                        <DayPicker
                            onDayClick={this.handleEndDay}
                            selectedDays={this.state.endDay}
                        />
                    </DateBox>
                </InputDate>
                <InputSelect>
                    <select defaultValue={storeValue.type ? storeValue.type : null}
                            onChange={e => { dispatch(updateSession(index, 'type', e.target.value)) }}>
                        <option value={null}>Select Type</option>
                        <option value={'inter'}>inter</option>
                        <option value={'intra'}>intra</option>
                        <option value={'a_distance'}>A distance</option>
                    </select>
                </InputSelect>
                <Pastille className={storeValue.promo && storeValue.promo.available ? 'active' : ''}
                          onClick={() => {
                              if(storeValue.promo.available){
                                  dispatch(updatePromo(index, 'available', false))
                              }else{
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
                            this.setState({ openSafeDelete: false });
                        }}/>
                    </div>
                </SafeDelete>
            </Container>
        );
    }
}

SessionLine.propTypes = {
};


const mapStateToProps = ( state, ownProps) => ({
    storeValue : state.sessions.schedule[ownProps.index] || null,
});


export default connect(mapStateToProps)(SessionLine);
