import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';

class AroundMap extends React.Component{
    state = {
        isOpen: false,
    }
    onToggleOpen = () => {
        this.setState((prevState) => {
            return {isOpen: !prevState.isOpen};
        });
    }
    render() {
        return (
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{lat: 40.740, lng: -74.18}}
            >
                <Marker
                    position={{lat: 40.740, lng: -74.18}}
                    onClick = {this.onToggleOpen}
                >
                    {this.state.isOpen? <InfoWindow onCloseClick={this.onToggleOpen}>
                        <div> abc </div>
                        </InfoWindow> : null }
                </Marker>
            </GoogleMap>
        );
    }

}
export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));