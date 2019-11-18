import debounce from 'debounce-fn';
import React from 'react';
import {connect} from 'react-redux';
import {Extension, MainContainer} from '../style/styledComponents';

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

        await this.initStyleStore();
    }

    componentDidUpdate = prevProps => {

    }

    componentWillUnmount = () => {
        this.detachFns.forEach(detach => detach());
        this.props.extension.window.stopAutoResizer();
    }

    setFieldValue = () => {

        this.props.extension.field.setValue({
            program: {}
        });

    }


    getElementById = id => {
        return this.props.extension.space.getEntries({
            'sys.id': id
        }).then(function (result) {
            return result.items[0];
        });
    }

    /*getStyleGuide = () => {
        if (!this.props.extension.entry.fields['styleGuide'].getValue()) return;
        let styleGuideID = this.props.extension.entry.fields['styleGuide'].getValue().sys.id;
        return this.props.extension.space
            .getEntries({
                'sys.id': styleGuideID
            })
            .then(result => {
                return result.items[0].fields;
            });
    }*/


    getAssetsUrlById = id => {
        return this.props.extension.space
            .getAsset(id)
            .then(result => {
                return result.fields.file[this.props.extension.locales.default].url;
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
                <div className={'container'}>
                    {this.renderDomStructure()}
                </div>
            </Extension>
        );
    }

    renderDomStructure = () => {
        return (
            <MainContainer>
                program application
            </MainContainer>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
