import React from 'react';
import {Marker, InfoWindow} from 'react-google-maps';


export class AroundMarker extends React.Component {
    state = {
        isOpen: false,
    }
    onToggleOpen = () => {
        this.setState((prevState) => {
            return {isOpen: !prevState.isOpen};
        });
    }
    render () {
        const {lat, lon} = this.props.pos;
        return (
            <Marker
                position={{lat, lng:lon}}
                onClick = {this.onToggleOpen}
            >
                {this.state.isOpen? <InfoWindow onCloseClick={this.onToggleOpen}>
                    <div> abc </div>
                </InfoWindow> : null }
            </Marker>
        );
    }
}