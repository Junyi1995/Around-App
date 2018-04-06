import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class AroundMap extends React.Component{
    render() {
        return (
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{lat: 40.740, lng: -74.18}}
            >
                <Marker
                    position={{lat: 40.740, lng: -74.18}}
                />
            </GoogleMap>
        );
    }

}
export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));