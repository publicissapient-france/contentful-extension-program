import debounce from 'debounce-fn';
import React from 'react';
import {connect} from 'react-redux';
import {Extension, MainContainer, FlexBox} from '../style/styledComponents';
import isEqual from 'lodash/isEqual';
import {initExtensionInformation, initSessions} from '../actions';
import Duration from '../fields/Duration';
import Pricing from '../fields/Pricing'
import ListSessions from './ListSessions'


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openAddSectionTop: false
        };

        this.onViewingEntryUpdated = debounce(this.onViewingEntryUpdated, {
            wait: 250
        });
    }

    componentDidMount = async () => {
        if (this.props.extension.field && this.props.extension.field.getValue()) {
            this.props.dispatch(initSessions(JSON.parse(this.props.extension.field.getValue().value)));
            this.props.dispatch(initExtensionInformation(this.props.extension));
        }

        this.detachFns = [];

        const fields = this.props.extension.entry.fields;
        for (let key in fields) {
            this.detachFns.push(
                fields[key].onValueChanged(this.onViewingEntryUpdated)
            );
        }
        this.detachFns.push(
            this.props.extension.entry.onSysChanged(this.onViewingEntryUpdated)
        );

        this.props.extension.window.startAutoResizer();
    }

    componentDidUpdate = prevProps => {
        if (!isEqual(prevProps.sessions, this.props.sessions)) {
            if (!this.props.extension.field.getValue()) {
                this.setFieldValue();
            }

            if (this.props.extension.field.getValue() &&
                this.props.extension.field.getValue().value &&
                !isEqual(this.props.sessions, JSON.parse(this.props.extension.field.getValue().value))) {
                this.setFieldValue();
            }
        }
    }

    componentWillUnmount = () => {
        this.detachFns.forEach(detach => detach());
        this.props.extension.window.stopAutoResizer();
    }

    setFieldValue = () => {
        this.props.extension.field.removeValue().then(() => {
            const sessions = this.props.store.getState().sessions;

            this.props.extension.field.setValue({
                value: JSON.stringify(sessions)
            }).then(() => {
                    console.log('NEW PROGRAM VALUE', this.props.extension.field.getValue())
            });
        });

    }


    getElementById = id => {
        return this.props.extension.space.getEntries({
            'sys.id': id
        }).then(function (result) {
            return result.items[0];
        });
    }


    getAssetsUrlById = id => {
        return this.props.extension.space
            .getAsset(id)
            .then(result => {
                return result.fields.file[this.props.extension.locales.default].url;
            });
    }

    getPagesOfSpace = async () => {

        return this.props.extension.space
            .getEntries({
                'content_type': 'page'
            })
            .then(result => {
                let pages = result.items.map(entry => entry)
                    .filter(page => page.fields.type[this.props.extension.locales.default] === 'internal')
                return pages;
            });
    }

    onError = error => {
        this.props.extension.notifier.error(error.message);
    }

    onViewingEntryUpdated = async () => {
        const latestSys = this.props.extension.entry.getSys();
    }

    openEntry = entryId => {
        return () => {
            this.props.extension.navigator.openEntry(entryId, {
                slideIn: true
            });
        };
    }

    render = () => {
        return (
            <Extension>
                <MainContainer className={'container'}>
                    <FlexBox>
                        <Duration/>
                        <Pricing/>
                    </FlexBox>
                    <ListSessions schedule={this.props.sessions.schedule}/>
                </MainContainer>
            </Extension>
        );
    }
}

const mapStateToProps = ({sessions}) => ({
    sessions: sessions,
});
export default connect(mapStateToProps)(App);
